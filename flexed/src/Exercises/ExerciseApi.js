import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exerciseGroupApi = createApi({
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
    }),
});
export const { useGetExercisesQuery, useCreateExerciseMutation } =
    exerciseGroupApi;
