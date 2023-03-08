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
        editExWoDate: builder.mutation({
            query: (data) => ({
                url: `/ex-wo-date/${data[0]}`,
                // body: {
                //     account_id: 1,
                //     duration_done: "None",
                //     exercise_id: 6,
                //     status: "yes",
                //     weight_done: "100lbs",
                //     wo_date: "2023-03-06",
                //     workout_id: 2,
                // },
                body: {
                    account_id: data[1][3],
                    duration_done: data[1][6],
                    exercise_id: data[1][2],
                    status: data[1][4],
                    weight_done: data[1][5],
                    wo_date: data[1][1],
                    workout_id: data[1][0],
                },
                method: "put",
            }),
            invalidatesTags: ["exWoDateRelationship"],
        }),
    }),
});
export const {
    useCreateExWoDateRelationshipMutation,
    useGetExWoDateByDateQuery,
    useEditExWoDateMutation,
} = exWoDateRelationship;
