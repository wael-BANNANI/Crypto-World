import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders= {
    'X-RapidAPI-Key': 'ebd3edb6d8msh252df612524ef13p12d9ddjsnf66a7464ace7',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
  }
const baseUrl = 'https://crypto-news16.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({count}) => createRequest(`/news/top/${count}`),
      })
    })
  });
export const {useGetCryptoNewsQuery}=cryptoNewsApi;  