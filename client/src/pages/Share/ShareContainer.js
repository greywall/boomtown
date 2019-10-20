import React, { Component } from "react";
import Share from "./Share";
// import FullScreenLoader from '../../components/FullScreenLoader';
// import { Query } from 'react-apollo';
// import { } from '../../apollo/queries';
// Hint: query tags
import { Query } from "react-apollo";
import { ALL_TAGS_QUERY } from "../../apollo/queries";

class ShareContainer extends Component {
  render() {
    return (
      <Query query={ALL_TAGS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Loading";
          if (error) return `Error: ${error}`;
          if (data) {
            return <Share items={data.items} />;
          }
        }}
      </Query>
    );
  }
}

export default ShareContainer;
