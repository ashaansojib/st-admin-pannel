import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9988'
    }),
    tagTypes: ['customers', 'products'],
    endpoints: (builder) => ({
        getCustomer: builder.query({
            query: () => '/customer-list',
            providesTags: ['customers']
        }),
        setCustomer: builder.mutation({
            query: (data) => ({
                url: '/create-customer',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['customers']
        }),
        removeCustomer: builder.mutation({
            query: (id) => ({
                url: `/remove-customer/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['customers']
        }),
        // product managing
        addProduct: builder.mutation({
            query: (data) =>({
                url: '/add-specifiq-product',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['products']
        }),
        specifiqUserProduct: builder.query({
            query: (userID) => ({
                url: `/specifiq-product-list/${userID}`
            }),
            invalidatesTags: ['products']
        }),
        removeSingleProduct: builder.mutation({
            query: (id) =>({
                url: `/remove-specifiq-product/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['products']
        }),
    }),
});
export const { useGetCustomerQuery, useSetCustomerMutation, useRemoveCustomerMutation, useAddProductMutation, useSpecifiqUserProductQuery, useRemoveSingleProductMutation } = baseApi;
export default baseApi;