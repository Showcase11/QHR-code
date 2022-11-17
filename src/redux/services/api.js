import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const qhrApi = createApi({
  reducerPath: "qhrApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ formData }) => ({
        url: "/emploee/signup",
        method: "POST",
        body: formData,
      }),
    }),
    login: builder.mutation({
      query: ({ formData }) => ({
        url: "/emploee/signin",
        method: "POST",
        body: formData,
      }),
    }),
    forgotPassword: builder.mutation({
      query: ({ formData }) => ({
        url: "/emploee/forgotpassword",
        method: "POST",
        body: formData,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ resetToken, formData }) => ({
        url: `/emploee/resetPassword${resetToken}`,
        method: "PATCH",
        body: formData,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = qhrApi;
