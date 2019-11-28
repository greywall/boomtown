const { ApolloError } = require("apollo-server-express");
const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function setCookie({ tokenName, token, res }) {
  res.cookie(tokenName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 2
  });
}

function generateToken(user, secret) {
  const { id, email } = user;

  return jwt.sign({ id, email }, secret, {
    expiresIn: "2h"
  });
}

const mutationResolvers = app => ({
  async signup(
    parent,
    { user: { fullname, email, password } },
    { pgResource, req }
  ) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await pgResource.createUser({
        fullname: fullname,
        email: email,
        password: hashedPassword
      });

      const token = await generateToken(user, app.get("JWT_SECRET"));

      setCookie({
        tokenName: app.get("JWT_COOKIE_NAME"),
        token,
        res: req.res
      });

      return {
        token,
        user
      };
    } catch (e) {
      console.log(e);
      throw new AuthenticationError(e);
    }
  },

  async login(parent, { user: { email, password } }, { pgResource, req }) {
    try {
      const user = await pgResource.getUserAndPasswordForVerification(email);
      if (!user) throw "User was not found.";
      const valid = await bcrypt.compare(password, user.password);

      const token = generateToken(user, app.get("JWT_SECRET"));
      if (!valid) throw "Invalid Password";
      setCookie({
        tokenName: app.get("JWT_COOKIE_NAME"),
        token,
        res: req.res
      });

      return {
        token,
        user
      };
    } catch (e) {
      throw new AuthenticationError(e);
    }
  },

  logout(parent, args, context) {
    context.req.res.clearCookie(app.get("JWT_COOKIE_NAME"));
    return true;
  },
  async addItem(parent, { input }, { pgResource, token }, info) {
    try {
      const user = await jwt.decode(token, app.get("JWT_SECRET"));

      const newItem = await pgResource.saveNewItem({
        item: input,
        user
      });

      return newItem;
    } catch (e) {
      throw new ApolloError(e);
    }
  }
});

module.exports = mutationResolvers;
