import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9988'
    }),
    tagTypes: ['customers'],
    endpoints: (builder) => ({
        getCustomer: builder.query({
            query: () => '/customer-list',
            providesTags: ['customers']
        }),
    }),
});
export const { useGetCustomerQuery } = baseApi;
export default baseApi;