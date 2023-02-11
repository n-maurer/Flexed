import { configureStore } from "@reduxjs/toolkit";
import { muscleGroupApi } from "./Muscle-Groups/muscleGroupApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { exerciseGroupApi } from "./Exercises/ExerciseApi";

export const store = configureStore({
    reducer: {
        [muscleGroupApi.reducerPath]: muscleGroupApi.reducer,
        [exerciseGroupApi.reducerPath]: exerciseGroupApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(muscleGroupApi.middleware)
            .concat(exerciseGroupApi.middleware),
});

setupListeners(store.dispatch);
