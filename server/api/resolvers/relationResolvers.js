const { ApolloError } = require("apollo-server");

module.exports = {
  User: {
    async items({ id }, { args }, { pgResource }, info) {
      try {
        const items = await pgResource.getItemsForUser(id);
        return items;
      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async borrowed({ id }, { args }, { pgResource }, info) {
      try {
        const items = await pgResource.getBorrowedItemsForUser(id);
        return items;
      } catch (e) {
        throw new ApolloError(e);
      }
    }
  },

  Item: {
    async itemowner({ itemowner }, args, { pgResource }, info) {
      try {
        const owner = await pgResource.getUserById(itemowner);
        return owner;
      } catch (e) {
        throw new ApolloError(e);
      }
    },

    async borrower({ borrower }, args, { pgResource }, info) {
      try {
        if (borrower) {
          const borrowerUser = await pgResource.getUserById(borrower);
          return borrowerUser;
        } else {
          return null;
        }
      } catch (e) {
        throw new ApolloError(e);
      }
    },

    async tags({ id }, args, { pgResource }, info) {
      try {
        const tags = await pgResource.getTagsForItem(id);
        return tags;
      } catch (e) {
        throw new ApolloError(e);
      }
    }
  }
};
