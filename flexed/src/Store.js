import { configureStore } from "@reduxjs/toolkit";
import { flexedApi } from "./flexedApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [flexedApi.reducerPath]: flexedApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(flexedApi.middleware),
});

setupListeners(store.dispatch);
