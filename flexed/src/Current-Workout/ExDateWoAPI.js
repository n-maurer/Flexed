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
        getLastWeight: builder.query({
            query: (ex_id) => `/ex-wo-date/${ex_id}/recent`,
            providesTags: ["exWoDateRelationship"],
        }),
        getExDateWoAll: builder.query({
            query: () => `/ex-wo-date`,
            providesTags: ["exWoDateRelationship"],
        }),
        deleteExWorkoutDate: builder.mutation({
            query: (ewd_id) => ({
                url: `/ex-wo-date/${ewd_id}`,
                method: "delete",
            }),
            invalidatesTags: ["exWoDateRelationship"],
        }),
    }),
});
export const {
    useDeleteExWorkoutDateMutation,
    useGetExDateWoAllQuery,
    useCreateExWoDateRelationshipMutation,
    useGetExWoDateByDateQuery,
    useEditExWoDateMutation,
    useGetLastWeightQuery,
} = exWoDateRelationship;
