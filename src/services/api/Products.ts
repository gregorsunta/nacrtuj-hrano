import { gql } from 'graphql-request';
import { fetchData } from './Utils';

const GET_PRODUCTS = gql`
  query Query($categories: [String]!, $page: Int!, $pageSize: Int!) {
    productsByCategories(
      categories: $categories
      page: $page
      pageSize: $pageSize
    ) {
      novo_ime
      id_slika
      prices {
        redna_cena_na_kilogram_liter
      }
    }
  }
`;

export const fetchProducts = async (variables) => {
  return await fetchData(GET_PRODUCTS, variables);
};
