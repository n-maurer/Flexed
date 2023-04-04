import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exerciseApi = createApi({
    reducerPath: "exercises",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FLEXED_SERVICE_API_HOST,
    }),
    tagTypes: ["ExerciseList"],
    endpoints: (builder) => ({
        getExercises: builder.query({
            query: () => "/exercises/all",
            providesTags: ["ExerciseList"],
        }),
        createExercise: builder.mutation({
            query: (data) => ({
                url: "/exercises",
                body: data,
                method: "post",
            }),
            invalidatesTags: ["ExerciseList"],
        }),
        filterExercises: builder.query({
            query: (mg_id) => `/exercises/${mg_id}`,
            providesTags: ["ExerciseList"],
        }),
        deleteExercise: builder.mutation({
            query: (ex_id) => ({
                url: `/exercises/${ex_id}`,
                method: "delete",
            }),
            invalidatesTags: ["ExerciseList"],
        }),
    }),
});
export const {
    useGetExercisesQuery,
    useCreateExerciseMutation,
    useFilterExercisesQuery,
    useDeleteExerciseMutation,
} = exerciseApi;
