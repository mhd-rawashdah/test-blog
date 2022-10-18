import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Blog } from "../../common/types";
import { RootState } from "../../store";


interface BlogState {
    blogs: Blog[],
    loading: boolean,
}

const initialState: BlogState = {
    blogs: [],
    loading: false
}

export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        createBlog: (state, action: PayloadAction<Blog>) => {
            console.log(action)
            state.blogs.push(action.payload);
        },
        getBlogs: (state, action: PayloadAction<Blog[]>) => {
            state.blogs = action.payload;
        }
    }
})

export const { createBlog, getBlogs} = blogSlice.actions;


export const selectBlogs = (state: RootState) => state.blogs.blogs;

export default blogSlice.reducer;