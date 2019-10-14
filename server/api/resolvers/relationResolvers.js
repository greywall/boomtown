const { ApolloError } = require("apollo-server");

module.exports = {
  User: {
    items({ id }, { args }, { pgResource }, info) {
      return pgResource.getItems(id);
    },
    borrowed({ id }, { args }, { pgResource }, info) {
      return pgResource.getItems(id);
    }
  },

  Item: {
    async itemowner({ ownerid }, { args }, { pgResource }, info) {
      return pgResource.getUserById(ownerid);
    },

    async tags(parent, args, { pgResource }, info) {
      return pgResource.getTagsForItem(parent.id);
    },
    async borrower(parent, args, { pgResource }, info) {
      console.log(parent);
      if (parent.borrowid) {
        return pgResource.getUserById(parent.borrowid);
      } else {
        return null;
      }
    }
  }
};
