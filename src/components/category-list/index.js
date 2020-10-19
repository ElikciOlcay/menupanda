import gql from "graphql-tag";
import { graphql } from "react-apollo";

const PRODUCTS_QUERY = gql`
    query {
    categoriesList {
        items {
        id    
        title
        }
    }
    }
`;
export default PRODUCTS_QUERY;