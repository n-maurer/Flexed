import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const muscleGroupApi = createApi({
    reducerPath: "muscleGroups",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FLEXED_SERVICE_API_HOST,
    }),
    tagTypes: ["MuscleGroupList"],
    endpoints: (builder) => ({
        getMuscleGroups: builder.query({
            query: () => "/muscle-groups",
            providesTags: ["MuscleGroupList"],
        }),
        createMuscleGroup: builder.mutation({
            query: (data) => ({
                url: "/muscle-groups",
                body: data,
                method: "post",
            }),
            invalidatesTags: ["MuscleGroupList"],
        }),
    }),
});
export const { useGetMuscleGroupsQuery, useCreateMuscleGroupMutation } =
    muscleGroupApi;
