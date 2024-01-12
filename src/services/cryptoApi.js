import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'ebd3edb6d8msh252df612524ef13p12d9ddjsnf66a7464ace7',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetail: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
    }),
  })
});

export const { 
  useGetCryptosQuery,
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery ,
} = cryptoApi;
