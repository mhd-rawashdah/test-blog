import { configureStore } from "@reduxjs/toolkit";
import blogReducers from "./features/blog/blog.slice";
 

export const store = configureStore({
    reducer: {
        blogs: blogReducers
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;