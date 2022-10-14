import { createSlice } from "@reduxjs/toolkit";

import {UsersData} from '../FakeData'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        value: UsersData
    },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
        editUser: (state, action) => {
            const { id, name, username, email } = action.payload;
            const existUser = state.find(user => user.id === id);
            if(existUser){
                existUser.name = name;
                existUser.username = username;
                existUser.email = email;
            }
            // state.value.map((user) => {
            //     if (user.id === action.payload.id){
            //         user.name = action.payload.name;
            //     }
            // })
        }
    }
})

export const {addUser, deleteUser, editUser} = userSlice.actions;
export default userSlice.reducer;