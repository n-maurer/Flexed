import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exWoDateRelationship = createApi({
    reducerPath: "exWoDateRelationship",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FLEXED_SERVICE_API_HOST,
    }),
    tagTypes: ["exWoDateRelationship"],
    endpoints: (builder) => ({
        createExWoDateRelationship: builder.mutation({
            query: (data) => ({
                url: "/ex-wo-date",
                body: data,
                method: "post",
            }),
            invalidatesTags: ["exWoDateRelationship"],
        }),
        getExWoDateByDate: builder.query({
            query: (date) => `/ex-wo-date/${date}`,
            providesTags: ["exWoDateRelationship"],
        }),
    }),
});
export const {
    useCreateExWoDateRelationshipMutation,
    useGetExWoDateByDateQuery,
} = exWoDateRelationship;
