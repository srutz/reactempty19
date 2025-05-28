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
    const [email, setEmail] = useStateWithLocalStorage("input-email", () => "")
    console.log("rerender App", name)
    const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => 
        setAge(Number.parseInt(e.target.value))
    const handleChange3 = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    return (
        <div className="grow m-8 flex flex-col gap-2">
            <label htmlFor="i1">Name</label>
            <Input id="i1" value={name} 
                onChange={handleChange1} 
                />
            <label htmlFor="i2">Age2</label>
            <Input id="i2" value={age} type="number"
                onChange={handleChange2} 
                />
            <label htmlFor="i3">E-Mail</label>
            <Input id="i3" value={email} type="email"
                onChange={handleChange3} 
                />
        </div>
    )
}





