import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workoutApi = createApi({
    reducerPath: "workouts",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FLEXED_SERVICE_API_HOST,
    }),
    tagTypes: ["WorkoutList"],
    endpoints: (builder) => ({
        getWorkouts: builder.query({
            query: () => "/workouts",
            providesTags: ["WorkoutList"],
        }),
        createWorkout: builder.mutation({
            query: (data) => ({
                url: "/workouts",
                body: data,
                method: "post",
            }),
            invalidatesTags: ["WorkoutList"],
        }),
        getExerciseByWorkout: builder.query({
            query: (id) => `/workouts/${id}`,
            providesTags: ["WorkoutList"],
        }),
        addExercise: builder.mutation({
            query: (data) => ({
                url: "we-table",
                body: data,
                method: "post",
            }),
            invalidatesTags: ["WorkoutList"],
        }),
        getAllWEReltaionships: builder.query({
            query: () => "/we-table",
            providesTags: ["WorkoutList"],
        }),
        deleteWorkout: builder.mutation({
            query: (wo_id) => ({
                url: `/workouts/${wo_id}`,
                method: "delete",
            }),
            invalidatesTags: ["WorkoutList"],
        }),
    }),
});
export const {
    useGetWorkoutsQuery,
    useCreateWorkoutMutation,
    useGetExerciseByWorkoutQuery,
    useAddExerciseMutation,
    useGetAllWEReltaionshipsQuery,
    useDeleteWorkoutMutation,
} = workoutApi;
