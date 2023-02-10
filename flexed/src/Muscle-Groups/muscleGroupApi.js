import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const muscleGroupApi = createApi({
    reducerPath: "muscleGroups",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FLEXED_SERVICE_API_HOST,
    }),
    endpoints: (builder) => ({
        getMuscleGroups: builder.query({
            query: () => "/muscle-groups",
        }),
        createMuscleGroup: builder.mutation({
            query: (data) => ({
                url: "/muscle-groups",
                body: data,
                method: "post",
            }),
        }),
    }),
});
export const { useGetMuscleGroupsQuery, useCreateMuscleGroupMutation } =
    muscleGroupApi;
