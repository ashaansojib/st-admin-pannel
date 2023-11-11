import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { data } from 'autoprefixer';
const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://st-development.vercel.app'
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
        // product managing
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/add-specifiq-product',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['customers']
        }),
        specifiqUserProduct: builder.query({
            query: (userID) => ({
                url: `/specifiq-product-list/${userID}`
            }),
            invalidatesTags: ['customers']
        }),
        removeSingleProduct: builder.mutation({
            query: (id) => ({
                url: `/remove-specifiq-product/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['customers']
        }),
        // login users managing
        getLoginUser: builder.query({
            query: () => ({
                url: '/login-users',
            }),
            invalidatesTags: ['customers']
        }),
        addUsers: builder.mutation({
            query: (data) => ({
                url: '/store-users',
                method: 'POST',
                body: data,
            }),
        }),
        makeAdmin: builder.mutation({
            query: ({ _id, data }) => ({
                url: `/update-user-role/${_id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
    }),
});
export const { useGetCustomerQuery, useSetCustomerMutation, useRemoveCustomerMutation, useAddProductMutation, useSpecifiqUserProductQuery, useRemoveSingleProductMutation, useGetLoginUserQuery, useAddUsersMutation, useMakeAdminMutation } = baseApi;
export default baseApi;