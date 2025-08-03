import React, { useEffect, useState } from 'react'
import { createContext } from "react";

export let OurContext = createContext();

const FilterName = ({ children }) => {
    

    useEffect(() => {
        // localStorage.setItem('loginStatus', login);
    }, [login]);

    return (
        <OurContext.Provider value={{
            
        }}>
            {children}
        </OurContext.Provider>
    )
}

export default FilterName
