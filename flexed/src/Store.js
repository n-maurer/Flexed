import { configureStore } from "@reduxjs/toolkit";
import { muscleGroupApi } from "./Muscle-Groups/muscleGroupApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [muscleGroupApi.reducerPath]: muscleGroupApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(muscleGroupApi.middleware),
});

setupListeners(store.dispatch);
