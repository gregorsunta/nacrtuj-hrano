import { gql } from 'graphql-request';
import request from 'graphql-request';

// interface IFetchCategories {
//   data: ICategory[];
// }

interface IOriginalCategory {
  name: string;
  subcategoryids: string[];
}

const GET_CATEGORIES = gql`
  {
    categories {
      name
      subcategoryids
    }
  }
`;

export const fetchCategories = async (): Promise<{
  categories: IOriginalCategory[];
}> => {
  return await request('import.meta.env.VITE_SERVER_URI', GET_CATEGORIES);
};
