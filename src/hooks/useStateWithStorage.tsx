import { useEffect, useState, type Dispatch, type SetStateAction } from "react"

export function useStateWithStorage<T>(storageKey: string, initialValue: T) {
    const [state, setState] = useState(() => {
        const raw = localStorage.getItem(storageKey)
        if (!raw) {
            return initialValue
        }
        return JSON.parse(raw) as T
    })
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(state))
    }, [state])
    return [state, setState] as [T, Dispatch<SetStateAction<T>>]
}
