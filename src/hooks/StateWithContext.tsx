import { useEffect, useState } from "react"


export function useStateWithLocalStorage<T>(key: string, initializer: T | (() => T)) {
    const [value, setValue] = useState(() => {
        // initialisier-funktion
        let v = localStorage.getItem(key)
        if (v) {
            return JSON.parse(v) as T
        }
        return initializer instanceof Function ? initializer() : initializer
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    return [value, setValue] as const
}