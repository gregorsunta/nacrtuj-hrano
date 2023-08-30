import { gql } from 'graphql-request';
import { fetchData } from './Utils';

const GET_CATEGORIES = gql`
  {
    categories {
      name
      subcategoryids
    }
  }
`;

export const fetchCategories = async () => {
  return await fetchData(GET_CATEGORIES);
};
