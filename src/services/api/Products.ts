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
  query Query(
    $categories: [String]!
    $page: Int!
    $pageSize: Int!
    $shops: [String]!
  ) {
    products(
      categories: $categories
      page: $page
      pageSize: $pageSize
      shops: $shops
    ) {
      novo_ime
      id_slika
      prices {
        enota
        redna_cena_na_kilogram_liter
        trgovina
        date
      }
    }
  }
`;

const GET_SHOPS = gql`
  {
    shops
  }
`;

export const fetchProducts = async (
  variables: Variables,
): Promise<{ products: IProduct[] }> => {
  return await request(
    import.meta.env.VITE_SERVER_URI,
    GET_PRODUCTS,
    variables,
  );
};

export const fetchShops = async (): Promise<{ shops: string[] }> => {
  return await request(import.meta.env.VITE_SERVER_URI, GET_SHOPS);
};
