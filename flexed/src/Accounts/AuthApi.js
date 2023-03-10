import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authentication",
    tagTypes: ["Token"],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FLEXED_SERVICE_API_HOST,
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (info) => {
                let formData = null;
                if (info instanceof HTMLElement) {
                    formData = new FormData(info);
                } else {
                    formData = new FormData();
                    formData.append("username", info.email);
                    formData.append("password", info.password);
                }
                return {
                    url: "/token",
                    method: "post",
                    body: info,
                    credentials: "include",
                };
            },
            invalidatesTags: (result) => {
                return (result && ["Token"]) || [];
            },
        }),
        signup: builder.mutation({
            query: (info) => {
                return {
                    url: "/api/accounts",
                    method: "post",
                    body: info,
                    credentials: "include",
                };
            },
            providesTags: ["Token"],
        }),
        logout: builder.mutation({
            query: () => {
                return {
                    url: "/token",
                    method: "delete",
                    credentials: "include",
                };
            },
            invalidatesTags: (result) => {
                return (result && ["Token"]) || [];
            },
        }),
        getToken: builder.query({
            query: () => ({
                url: "/api/token",
                credentials: "include",
            }),
            providesTags: ["Token"],
        }),
    }),
});
export const {
    useLoginMutation,
    useGetTokenQuery,
    useLogoutMutation,
    useSignupMutation,
} = authApi;
