import React, { useEffect, useState } from 'react'
import { createContext } from "react";

export let OurContext = createContext();

const ContextProvider = ({ children }) => {
    

    useEffect(() => {
        // localStorage.setItem('loginStatus', login);
    }, []);

    return (
        <OurContext.Provider value={{
            
        }}>
            {children}
        </OurContext.Provider>
    )
}

export default ContextProvider
