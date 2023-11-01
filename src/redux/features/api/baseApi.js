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
        updateProduct: builder.mutation({
            query: (data) => ({
                url: '/add-existing-item',
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['customers']
        }),
        removeSingleProduct: builder.mutation({
            query: ({customerID, productID}) =>({
                url: `/remove-single-product/${customerID}/${productID}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['customers']
        }),
    }),
});
export const { useGetCustomerQuery, useSetCustomerMutation, useRemoveCustomerMutation, useUpdateProductMutation, useRemoveSingleProductMutation } = baseApi;
export default baseApi;