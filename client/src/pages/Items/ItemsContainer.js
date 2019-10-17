// stateful components

import React, { Component } from "react";
import Items from "./Items";
// import FullScreenLoader from '../../components/FullScreenLoader';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {} from "../../apollo/queries";

const GET_ITEMS = gql`
  query getItems($id: ID!) {
    items(filter: $id) {
      id
      title
      imageurl
      description
      itemowner {
        fullname
      }
      tags {
        id
        title
      }
      borrower {
        fullname
      }
    }
  }
`;

class ItemsContainer extends Component {
  render() {
    return <Items></Items>;
  }
}

export default ItemsContainer;
