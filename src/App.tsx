import { useEffect, useState, type ChangeEvent } from "react";
import { ComboBox } from "./components/ComboBox";
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
    weather: string
}

export function App() {
    const [form, setForm] = useStateWithLocalStorage<FormContent>("input-form", {
        age: 0,
        name: "",
        email: "",
        weather: ""
    })

    const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
        form.name = e.target.value
        setForm(structuredClone(form))
    }
    const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, age: Number.parseInt(e.target.value) })
    }
    const handleChange3 = (e: ChangeEvent<HTMLInputElement>) => {
        const newForm = { ...form }
        newForm.email = e.target.value
        setForm(newForm)
    }
    const options = [
        { label: "Glatt", value: "slippery"},
        { label: "Warm", value: "warm" }, 
        { label: "Nass", value: "rain" },
    ]
    return (
        <div className="grow m-8 flex flex-col gap-2">
            <label htmlFor="i1">Name</label>
            <Input id="i1" value={form.name}
                onChange={handleChange1}
            />
            <label htmlFor="i2">Age2</label>
            <Input id="i2" value={form.age} type="number"
                onChange={handleChange2}
            />
            <label htmlFor="i3">E-Mail</label>
            <Input id="i3" value={form.email} type="email"
                onChange={handleChange3}
            />
            <label>Präferiertes Wetter</label>
            <ComboBox options={options}
                value={form.weather}
                showSearch={false}
                onValueChange={(v) => setForm({ ...form, weather: v })}
            ></ComboBox>
            <Toaster />
        </div>
    )
}





