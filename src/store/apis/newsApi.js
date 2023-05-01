import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      fetchNews: builder.query({
        providesTags: (result, error, arg) =>{
          const tags = result.map((news)=>{
            return { type: 'News', id: news.id}
          })
          tags.push({type:'New'});
          return tags;
        },
        query: () => {
          return {
            url: '/news',
            method: 'GET',
          };
        },
      }),
      addNews: builder.mutation({
        invalidatesTags: (result, error, news) =>{
          return [{type:'New'}]
        },
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
        invalidatesTags: (result, error, arg) =>{
          return [{type:'News', id: arg.id}]
        },
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
