import { createSlice } from '@reduxjs/toolkit';
import {toast} from "react-toastify";


const initialState = {
    users:localStorage.getItem("users" ) ? JSON.parse(localStorage.getItem("users")): [],
    loggedIn : false,
    username:""
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers : {
        login(state, action){
            
            for (let index = 0; index < state.users.length; index++) {
                const element = state.users[index];
                if (element.username === action.payload.username && element.password === action.payload.password){
                    
                    state.loggedIn = true
                    toast.success(`Logged In `, {
                        position:"bottom-left"
                    });

                    break
                        
                }else {
                    alert("invalid username or password")
                }
                
            }
            const currentUser = action.payload.username
            state.username = currentUser
        },
        logout(state,action){

            state.loggedIn = false
            toast.error(`Logged out`, {
                position:"bottom-left"
            });
            
        },
        register(state,action){
            if(state.users.length > 0){
                for (let index = 0; index < state.users.length; index++) {
                    const element = state.users[index];
                    if (element.username !== action.payload.username){
                        let newUser = {
                            username:action.payload.username,
                            password:action.payload.password}
                        state.users.push(newUser)
                        localStorage.setItem("users",JSON.stringify(state.users));
                        toast.success(`Signed In`, {
                            position:"bottom-left"
                        });
                        break                      
                    }else {
                        alert("This username has been used before!")
                    }
            }
                   
        }else{
            let newUser = {
                username:action.payload.username,
                password:action.payload.password}
            state.users.push(newUser)
            localStorage.setItem("users",JSON.stringify(state.users));
            toast.success(`Signed In`, {
                position:"bottom-left"
            });
        }

    }}
})
export const { login, logout, register} = userSlice.actions

export default userSlice.reducer