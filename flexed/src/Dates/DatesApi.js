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
    }),
});
export const { useWorkoutDatesQuery, useCreateWorkoutDateMutation } =
    workoutDateApi;
