import { Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [ konter, setKonter ] = useState(1);

    return (
        <AppContext.Provider value={{ konter, setKonter }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;