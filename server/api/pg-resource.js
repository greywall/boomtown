module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text: `INSERT into USERS (fullname, email, password)
        values ($1, $2, $3) RETURNING *`,
        values: [fullname, email, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        // console.log(user.rows[0]);
        return user.rows[0];
      } catch (e) {
        console.log(e);
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
        text: `SELECT * FROM users WHERE email = $1`,
        values: [email]
      };

      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw "User was not found. 1";
        return user.rows[0];
      } catch (e) {
        throw "User was not found. 2";
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
        throw e + "- User was not Found. #3";
      }
    },
    async getItems(idToOmit) {
      const getItems = {
        text: `SELECT * FROM items WHERE itemowner != $1`,
        values: idToOmit ? [idToOmit] : []
      };
      try {
        const items = await postgres.query(getItems);
        return items.rows;
      } catch (e) {
        throw "item not found";
      }
    },
    async getItemsForUser(id) {
      const getItemsForUser = {
        text: `SELECT * FROM items WHERE itemowner = $1;`,
        values: [id]
      };
      try {
        const items = await postgres.query(getItemsForUser);
        return items.rows;
      } catch (e) {
        throw "Items not found";
      }
    },
    async getBorrowedItemsForUser(id) {
      const getBorrowedItemsForUser = {
        text: `SELECT * FROM items
            WHERE borrowid = $1;`,
        values: [id]
      };
      try {
        const items = await postgres.query(getBorrowedItemsForUser);
        return items.rows;
      } catch (e) {
        throw "Items not found";
      }
    },
    async getTags() {
      const getTags = `SELECT * FROM tags`;
      try {
        const tags = await postgres.query(getTags);
        return tags.rows;
      } catch (e) {
        throw "Tags were not found";
      }
    },
    async getTagsForItem(id) {
      const tagsQuery = {
        text: `
        SELECT id, title
        FROM tags
        INNER JOIN itemtags
        ON tags.id = itemtags.tagid
        WHERE itemtags.itemid = $1;`,
        values: [id]
      };
      try {
        const tags = await postgres.query(tagsQuery);
        return tags.rows;
      } catch (e) {
        throw "Tags were not found";
      }
    },
    async saveNewItem({ item, user }) {
      try {
        return new Promise((resolve, reject) => {
          postgres.connect((err, client, done) => {
            try {
              client.query("BEGIN", async err => {
                const { title, description, tags, imageurl } = item;

                const itemsQuery = {
                  text: `INSERT INTO items (title, description, itemowner, imageurl)
                 values ($1,$2, $3, $4) returning *;`,
                  values: [title, description, user.id, imageurl]
                };

                const newItem = await postgres.query(itemsQuery);
                const itemid = newItem.rows[0].id;

                let values = tagsQueryString([...tags], itemid, "");
                const tagsQuery = {
                  text: `INSERT INTO itemtags (tagid, itemid)
                  VALUES ${values}`,
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
        throw "There was an error";
      }
    }
  };
};
