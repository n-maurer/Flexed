import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountsApi = createApi({
    reducerPath: "account",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FLEXED_SERVICE_API_HOST,
    }),
    tagTypes: ["account"],
    endpoints: (builder) => ({
        createLoginToken: builder.mutation({
            query: (data) => ({
                url: "/token",
                body: data,
                method: "post",
            }),
            invalidatesTags: ["account"],
        }),
    }),
});
export const { useCreateLoginTokenMutation } = accountsApi;
