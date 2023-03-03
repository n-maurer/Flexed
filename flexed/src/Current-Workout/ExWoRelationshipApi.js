import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const woExRelationship = createApi({
    reducerPath: "woExRelationship",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FLEXED_SERVICE_API_HOST,
    }),
    tagTypes: ["WoExRelationship"],
    endpoints: (builder) => ({
        createWoExRelationship: builder.mutation({
            query: (data) => ({
                url: "/we-table",
                body: data,
                method: "post",
            }),
            invalidatesTags: ["WoExRelationship"],
        }),
    }),
});
export const { useCreateWoExRelationship } = woExRelationship;
