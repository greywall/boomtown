import { Query } from "react-apollo";
import React from "react";
import { VIEWER_QUERY } from "../apollo/queries";

export const ViewerContext = React.createContext();

export const ViewerProvider = ({ children }) => {
  return (
    <Query query={VIEWER_QUERY}>
      {({ data, error, loading }) => {
        const viewer = data && data.viewer ? data.viewer : null;
        console.log(viewer);
        return (
          <ViewerContext.Provider value={{ viewer, loading }}>
            {children}
          </ViewerContext.Provider>
        );
      }}
    </Query>
  );
};
