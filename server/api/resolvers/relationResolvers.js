const { ApolloError } = require("apollo-server");

module.exports = {
  User: {
    /**
     *  @TODO: Advanced resolvers
     *
     *  The User GraphQL type has two fields that are not present in the
     *  user table in Postgres: items and borrowed.
     *
     *  According to our GraphQL schema, these fields should return a list of
     *  Items (GraphQL type) the user has lent (items) and borrowed (borrowed).
     *
     */
    // @ TODO: Uncomment these lines after you define the User type with these fields
    items({ id }, { args }, { pgResource }, info) {
      return pgResource.getItems(id);
      // -------------------------------
    },
    borrowed({ id }, { args }, { pgResource }, info) {
      return pgResource.getItems(id);
      // -------------------------------
    }
    // -------------------------------
  },

  Item: {
    /**
     *  @TODO: Advanced resolvers
     *
     *  The Item GraphQL type has three fields that are not present in the
     *  Items table in Postgres: itemowner, tags and borrower.
     *
     * According to our GraphQL schema, the itemowner and borrower should return
     * a User (GraphQL type) and tags should return a list of Tags (GraphQL type)
     *
     */
    // @TODO: Uncomment these lines after you define the Item type with these fields
    async itemowner({ ownerid }, { args }, { pgResource }, info) {
      return pgResource.getUserById(ownerid);
    },

    async tags(parent, args, { pgResource }, info) {
      return pgResource.getTagsForItem(parent.id);
      // -------------------------------
    },
    async borrower(parent, args, { pgResource }, info) {
      /**
       * @TODO: Replace this mock return statement with the correct user from Postgres
       * or null in the case where the item has not been borrowed.
       */
      console.log(parent);
      if (parent.borrowid) {
        return pgResource.getUserById(parent.borrowid);
      } else {
        return null;
      }
      // -------------------------------
    }
    // -------------------------------
  }
};
