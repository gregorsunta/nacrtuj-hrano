import { Variables, gql } from 'graphql-request';
// import { fetchData } from './Utils';
import { IProduct } from '../../stores/ProductStore';
import request from 'graphql-request';

// interface IVariables {
//   categories: string[];
//   page: number;
//   pageSize: number;
// }

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
        enota
        redna_cena_na_kilogram_liter
        trgovina
      }
    }
  }
`;

export const fetchProducts = async (
  variables: Variables,
): Promise<{ productsByCategories: IProduct[] }> => {
  return await request(
    'import.meta.env.VITE_SERVER_URI',
    GET_PRODUCTS,
    variables,
  );
};
