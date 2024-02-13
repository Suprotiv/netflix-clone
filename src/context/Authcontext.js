import { createContext,useContext,useState,useEffect } from "react";

import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const Authcontext=createContext()

export function AuthContextProvider({children})
{

    const[user,setUser]=useState({})



    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    function logout()
    {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(curerentUser)=>{
            setUser(curerentUser);
        })
        return (()=>{
            unsubscribe()
        })
    })

    return(
        <Authcontext.Provider value={{signup,user,login,logout}}>
            {children}
        </Authcontext.Provider>
    )
}

export function useAuth(){
    return useContext(Authcontext)
}