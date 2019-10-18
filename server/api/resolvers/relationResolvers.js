const { ApolloError } = require("apollo-server");

module.exports = {
  User: {
    async items({ id }, { args }, { pgResource }, info) {
      try {
        const items = await pgResource.getItemsForUser(id);
        return items;
      } catch (e) {
        throw "No Items were found";
      }
    },
    async borrowed({ id }, { args }, { pgResource }, info) {
      try {
        const items = await pgResource.getBorrowedItemsForUser(id);
        return items;
      } catch (e) {
        throw "No items were found";
      }
    }
  },

  Item: {
    async itemowner({ itemowner }, { args }, { pgResource }, info) {
      try {
        const itemowner1 = pgResource.getUserById(itemowner);
        return itemowner1;
      } catch (e) {
        throw "No items were found";
      }
    },

    async tags({ id }, args, { pgResource }, info) {
      try {
        const tags = pgResource.getTagsForItem(id);
        return tags;
      } catch (e) {
        throw "No tags were found";
      }
    },
    async borrower({ borrower }, args, { pgResource }, info) {
      try {
        if (borrower) {
          const borrowerUser = pgResource.getUserById(borrower);
          return borrowerUser;
        } else {
          return null;
        }
      } catch (e) {
        throw "No tags were found";
      }
    }
  }
};
