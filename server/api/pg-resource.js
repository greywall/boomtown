function tagsQueryString(tags, itemid, result) {
  for (i = tags.length; i > 0; i--) {
    result += `($${i}, ${itemid}),`;
  }
  return result.slice(0, -1) + ";";
}

module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text: `insert into users ( email, fullname, password)
        values ($1, $2, $3)`, // TODO : Authentication - Server
        values: [fullname, email, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw "An account with this username already exists.";
          case /users_email_key/.test(e.message):
            throw "An account with this email already exists.";
          default:
            throw "There was a problem creating your account.";
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: "SELECT * FROM users WHERE email = $1", // TODO : Authentication - Server
        values: [email]
      };

      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw "User was not found.";
        return user.rows[0];
      } catch (e) {
        throw "User was not found.";
      }
    },
    async getUserById(id) {
      const findUserQuery = {
        text: "SELECT * FROM users WHERE id = $1",
        values: id ? [id] : []
      };
      try {
        const user = await postgres.query(findUserQuery);
        return user.rows[0];
      } catch (e) {
        throw "User was not found.";
      }
    },
    async getItems(idToOmit) {
      const items = await postgres.query({
        text: `SELECT * FROM items WHERE ownerid != $1`,
        values: idToOmit ? [idToOmit] : []
      });

      return items.rows;
    },
    async getItemsForUser(id) {
      const items = await postgres.query({
        text: `SELECT * FROM items WHERE ownerid = $1;`,
        values: [id]
      });

      return items.rows;
    },
    async getBorrowedItemsForUser(id) {
      const items = await postgres.query({
        text: `SELECT * FROM items
            WHERE borrowid = $1;`,
        values: [id]
      });
      return items.rows;
    },
    async getTags() {
      const tags = await postgres.query(`SELECT * FROM tags`);

      try {
        return tags.rows;
      } catch (error) {
        console.log(error);
      }
    },
    async getTagsForItem(id) {
      const tagsQuery = {
        text: `
        SELECT itemtags.itemid, tags.id, tags.title
        FROM itemtags
        INNER JOIN tags
        ON tags.id = itemtags.tagid
        WHERE itemid = $1;
        `,
        values: [id]
      };
      try {
        const tags = await postgres.query(tagsQuery);
        return tags.rows;
      } catch (error) {
        console.log(error);
      }
    },
    async saveNewItem({ item, user }) {
      try {
        return new Promise((resolve, reject) => {
          postgres.connect((err, client, done) => {
            try {
              client.query("BEGIN", async err => {
                const { title, description, tags } = item;
                const itemsQuery = {
                  text: `INSERT into items (title, description, ownerid)
                 values ($1,$2, $3) returning id, title, description;`,
                  values: [title, description, user]
                };

                const newItem = await postgres.query(itemsQuery);
                const itemid = newItem.rows[0].id;

                const tagsQuery = {
                  text: `INSERT into itemtags (tagid, itemid)
                VALUES ${tagsQueryString([...tags], itemid, "")}`,
                  values: tags.map(tag => tag.id)
                };
                const newTags = await postgres.query(tagsQuery);

                client.query("COMMIT", err => {
                  if (err) {
                    throw err;
                  }
                  done();
                  resolve(newItem.rows[0]);
                });
              });
            } catch (e) {
              client.query("ROLLBACK", err => {
                if (err) {
                  throw err;
                }

                done();
              });
              switch (true) {
                default:
                  throw e;
              }
            }
          });
        });
      } catch (e) {
        console.log(e);
      }
    }
  };
};
