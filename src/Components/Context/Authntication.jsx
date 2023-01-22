import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthenticationStatus = createContext();

const AuthenticationStatusProvider = ({children})=>{
    const [authStatus , setAuthStatus] = useState(null);
    
    return(
        <AuthenticationStatus.Provider value={{authStatus , setAuthStatus }}>
            {children}
        </AuthenticationStatus.Provider>
    )
}
export default AuthenticationStatusProvider;