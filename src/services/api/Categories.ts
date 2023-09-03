import { Variables, gql } from 'graphql-request';
import request from 'graphql-request';
import { ICategory } from '../../stores/CategoryStore';

const GET_CATEGORIES = gql`
  {
    categories {
      id
      name
      subcategories
    }
  }
`;

const GET_CATEGORY = gql`
  query Query($id: Int!) {
    category(id: $id) {
      id
      name
      subcategories
    }
  }
`;

export const fetchCategories = async (): Promise<{
  categories: ICategory[];
}> => {
  return await request(import.meta.env.VITE_SERVER_URI, GET_CATEGORIES);
};

export const fetchCategory = async (
  variables: Variables,
): Promise<{ category: ICategory }> => {
  return await request(
    import.meta.env.VITE_SERVER_URI,
    GET_CATEGORY,
    variables,
  );
};
