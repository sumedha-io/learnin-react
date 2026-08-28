import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: 1, text: "Hello" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo)//state =initialState (state is always preserved or updated no spreading(...) necessary)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
/*
When you call createSlice, it returns an object containing two major things you need to export:
1.actions: An object containing individual action creator functions generated for each case (addTodo, removeTodo).
2.reducer: The single, complete reducer function that manages the total state for this entire slice
Hence reducer is passed to the store because it gets the info of every element inside createSlice
*/