import request, { RequestDocument, Variables } from 'graphql-request';

export const fetchData = async (
  query: RequestDocument,
  variables?: Variables,
) => {
  try {
    return await request(import.meta.env.VITE_SERVER_URI, query, variables);
  } catch (err) {
    console.error(err);
  }
};
