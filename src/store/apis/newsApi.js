import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      fetchNews: builder.query({
        query: () => {
          return {
            url: '/news',
            method: 'GET',
          };
        },
      }),
      addNews: builder.mutation({
        query: (news) => {
          return{
            url: '/news',
            method: 'POST',
            body:{
              id: news.id,
              size: news.size,
              url: news.url,
              body: news.body
            }
          }

          }
      }),
      deleteNews: builder.mutation({
        query: (id) => {
          return{
            url: `/news/${id}`,
            method: 'DELETE',
          }
        }
      })
    };
  },
});

export const { useFetchNewsQuery, useAddNewsMutation, useDeleteNewsMutation } = newsApi;
export { newsApi };
