import { useEffect, useState, type ChangeEvent } from "react";
import { Input } from "./components/ui/input";

function useStateWithLocalStorage<T>(key: string, initializer: T|(() => T)) {
    const [ value, setValue ] = useState(() => {
        // initialisier-funktion
        let v = localStorage.getItem(key)
        if (v) {
            return JSON.parse(v) as T
        }
        if (typeof initializer === "function") {
            return (initializer as () => T)()
        }
        return initializer
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    return [ value, setValue ] as const
}

export function App() {
    const [age, setAge] = useStateWithLocalStorage("input-age", 27)
    const [name, setName] = useStateWithLocalStorage("input-name2", () => "ppp")
    console.log("rerender App", name)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    return (
        <div className="grow m-8 ">
            <label htmlFor="i1">Name</label>
            <Input id="i1" value={name} 
                onChange={handleChange} 
                />
        </div>
    )
}





