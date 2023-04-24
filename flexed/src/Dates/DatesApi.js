import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workoutDateApi = createApi({
    reducerPath: "workoutDate",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FLEXED_SERVICE_API_HOST,
    }),
    tagTypes: ["workoutDate"],
    endpoints: (builder) => ({
        getWorkoutDates: builder.query({
            query: () => "/workout-date",
            providesTags: ["workoutDate"],
        }),
        createWorkoutDate: builder.mutation({
            query: (data) => ({
                url: "/workout-date",
                body: data,
                method: "post",
            }),
            invalidatesTags: ["workoutDate"],
        }),
        getWorkoutByDate: builder.query({
            query: (date) => `workout-date/${date}`,
            providesTags: ["workoutDate"],
        }),
        getWorkoutDatesByAccountId: builder.query({
            query: (account_id) => `/workout-date/users/${account_id}`,
            providesTags: ["workoutDate"],
        }),
        getWorkoutDatesByAccountAndDate: builder.query({
            query: (account_id, date) =>
                `/workout-date/users/${account_id}/${date}`,
            providesTags: ["workoutDate"],
        }),
        deleteWorkoutDate: builder.mutation({
            query: (wd_id) => ({
                url: `/workout-date/${wd_id}`,
                method: "delete",
            }),
            invalidatesTags: ["workoutDate"],
        }),
    }),
});
export const {
    useWorkoutDatesQuery,
    useCreateWorkoutDateMutation,
    useGetWorkoutByDateQuery,
    useGetWorkoutDatesByAccountIdQuery,
    useGetWorkoutDatesByAccountAndDateQuery,
    useDeleteWorkoutDateMutation,
} = workoutDateApi;
