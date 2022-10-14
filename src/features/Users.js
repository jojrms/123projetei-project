import { createSlice } from "@reduxjs/toolkit";

import {UsersData} from '../FakeData'


const initialState = [];

const userSlice = createSlice({
    name: 'users',
    initialState: {
        value: UsersData
    },
    reducers: {

        // Função de adicionar usuário
        addUser: (state, action) => {
            state.value.push(action.payload)
        },


        // Função de deletar usuário
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        }, 
        
        // Função de editar usuário
        editUser: (state, action) => {
            const { id, name, username, email } = action.payload;
            const existUser = [state].find(user => user.id === id);
            if(existUser){
                existUser.name = name;
                existUser.username = username;
                existUser.email = email;
            }
        },
    }
})

export const {addUser, deleteUser, editUser} = userSlice.actions;
export default userSlice.reducer;