import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: () => {
          return {
            url: '/news',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery } = newsApi;
export { newsApi };
