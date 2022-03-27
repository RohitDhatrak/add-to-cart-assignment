import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [saveForLater, setSaveForLater] = useState([]);

    const states = {
        cart,
        setCart,
        saveForLater,
        setSaveForLater,
    };

    return <AppContext.Provider value={states}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    return useContext(AppContext);
}
