import { useEffect, useState, type ChangeEvent } from "react";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/sonner";

function useStateWithLocalStorage<T>(key: string, initializer: T | (() => T)) {
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

type FormContent = {
    age: number
    name: string
    email: string
}

export function App() {
    const [form, setForm] = useStateWithLocalStorage<FormContent>("input-form", {
        age: 0,
        name: "",
        email: "",
    }) 
    
    const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => 
        setName(e.target.value)
    const handleChange2 = (e: ChangeEvent<HTMLInputElement>) =>
        setAge(Number.parseInt(e.target.value))
    const handleChange3 = (e: ChangeEvent<HTMLInputElement>) => 
        setEmail(e.target.value)
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
            {age > 100 && (<div className="text-red-500 text-xs">ZU ALT</div>)}
            <label htmlFor="i3">E-Mail</label>
            <Input disabled={age > 100} id="i3" value={email} type="email"
                onChange={handleChange3}
            />
            <Toaster />
        </div>
    )
}





