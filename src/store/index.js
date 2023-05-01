import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { newsApi } from './apis/newsApi';

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(newsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchNewsQuery, useAddNewsMutation, useDeleteNewsMutation } from './apis/newsApi';