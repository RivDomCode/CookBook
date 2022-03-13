import React, { useState, useContext } from 'react';



const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [isActive, setIsActive] = useState(false);

    const openModal = () => {
        setIsActive(true);

    }

    const closeModal = () => {
        setIsActive(false);
    }

    return <AppContext.Provider value={{ isActive, openModal, closeModal }}>{children}</AppContext.Provider>
}

export {
    AppContext, AppProvider
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}