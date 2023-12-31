import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://st-development.vercel.app'
    }),
    tagTypes: ['customers', 'users', 'product'],
    endpoints: (builder) => ({
        getCustomer: builder.query({
            query: () => '/customer-list',
            providesTags: ['customers'],
        }),
        setCustomer: builder.mutation({
            query: (data) => ({
                url: '/create-customer',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['customers'],
        }),
        removeCustomer: builder.mutation({
            query: (id) => ({
                url: `/remove-customer/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['customers'],
        }),
        // product managing
        specifiqUserProduct: builder.query({
            query: (userID) => ({
                url: `/specifiq-product-list/${userID}`,
                providesTags: ['product'],
            }),
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/add-specifiq-product',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['product']
        }),
        removeSingleProduct: builder.mutation({
            query: (id) => ({
                url: `/remove-specifiq-product/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['product']
        }),
        // login users managing
        getLoginUser: builder.query({
            query: () => ({
                url: '/login-users',
                providesTags: ['users']
            }),
        }),
        addUsers: builder.mutation({
            query: (data) => ({
                url: '/store-users',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['users']
        }),
        makeAdmin: builder.mutation({
            query: ({ id, data }) => ({
                url: `/update-user-role/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['users']
        }),
        removeUser: builder.mutation({
            query: (id) => ({
                url: `/remove-login-user/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['users']
        }),
    }),
});
export const { useGetCustomerQuery, useSetCustomerMutation, useRemoveCustomerMutation, useAddProductMutation, useSpecifiqUserProductQuery, useRemoveSingleProductMutation, useGetLoginUserQuery, useAddUsersMutation, useMakeAdminMutation, useRemoveUserMutation } = baseApi;
export default baseApi;