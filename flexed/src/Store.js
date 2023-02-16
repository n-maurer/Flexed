import { configureStore } from "@reduxjs/toolkit";
import { muscleGroupApi } from "./Muscle-Groups/muscleGroupApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { exerciseApi } from "./Exercises/ExerciseApi";
import { workoutApi } from "./Workouts/WorkoutApi";
import { workoutDateApi } from "./Dates/DatesApi";
import { accountsApi } from "./Accounts/AccountsApi";

export const store = configureStore({
    reducer: {
        [muscleGroupApi.reducerPath]: muscleGroupApi.reducer,
        [exerciseApi.reducerPath]: exerciseApi.reducer,
        [workoutApi.reducerPath]: workoutApi.reducer,
        [workoutDateApi.reducerPath]: workoutDateApi.reducer,
        [accountsApi.reducerPath]: accountsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(muscleGroupApi.middleware)
            .concat(exerciseApi.middleware)
            .concat(workoutApi.middleware)
            .concat(workoutDateApi.middleware)
            .concat(accountsApi.middleware),
});

setupListeners(store.dispatch);
