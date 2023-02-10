import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const flexedApi = createApi({
    reducerPath: "flexed",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FLEXED_SERVICE_API_HOST,
    }),
    endpoints: (builder) => ({
        getMuscleGroups: builder.query({
            query: () => "/muscle-groups",
        }),
    }),
});
export const { useGetMuscleGroupsQuery } = flexedApi;
