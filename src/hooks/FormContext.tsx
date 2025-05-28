import { createContext, ReactNode, useContext } from "react";
import { FormContent } from "../App";
import { useStateWithLocalStorage } from "./StateWithContext";

type FormContextPayload = {
    form: FormContent,
    setForm: (form: FormContent) => void
}

const FormContext = createContext<FormContextPayload | null>
    (null)

export function FormContextProvider({ children }
: { children: ReactNode }) {
    const [form, setForm] = useStateWithLocalStorage<FormContent>("input-form", {
        age: 0,
        name: "",
        email: "",
        weather: ""
    })
    return (
        <FormContext.Provider value={{ form, setForm}}>
            {children}
        </FormContext.Provider>
    )
}

export function useFormContext() {
    const c = useContext(FormContext)
    if (!c) 
        throw "no provider for formcontext"
    return c
}
