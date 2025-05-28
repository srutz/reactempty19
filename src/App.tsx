import { useEffect, type ChangeEvent } from "react";
import { toast } from "sonner";
import { ComboBox } from "./components/ComboBox";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/sonner";
import { useFormStore } from "./hooks/FormStore";


export type FormContent = {
    age: number
    name: string
    email: string
    weather: string
}

export function App() {
    return (
        <div className="h-1 grow flex flex-col">
            <div className="h-1 grow flex flex-col">
                <Form/>
            </div>
            <Footer></Footer>
        </div>
    )
}
function Footer() {
    //const { form } = useFormContext()
    const { form } = useFormStore()
    useEffect(() => {
        if (form.weather == "slippery") {
            toast("Aufpassen ist Glatt", {
                duration: 5_000,
            })
        }
    }, [form.weather])
    return (
        <div className="bg-slate-300 h-8">Footer / Wetter {form.weather}</div>
    )
}
export function Form() {
    //const {form, setForm } = useFormContext()
    const {form, setForm } = useFormStore()

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
                showSearch={false}
                style="wide"
                value={form.weather}
                onValueChange={(v) => setForm({ ...form, weather: v })}
            ></ComboBox>
            <Toaster />
        </div>
    )
}





