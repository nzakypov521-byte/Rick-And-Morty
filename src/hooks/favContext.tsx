/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactNode } from "react";
import useFavChars from "./useLocalStorage";
import type { FavContextType} from "../types/types"

const FavContext = createContext<FavContextType|undefined>(undefined)

export function FavProvider({ children }:{ children: ReactNode}) {
    const favData = useFavChars()

    return (
        <FavContext.Provider value={favData}>
            {children}
        </FavContext.Provider>
    )
}

export function useFavs() {
    const context = useContext(FavContext)

    if (!context) {
        throw new Error("useFavs должен использоваться строго внутри FavProvider");
    }

    return context
}