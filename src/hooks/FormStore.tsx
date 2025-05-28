import { FormContent } from "@/App"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type FormStoreType = {
    form: FormContent
    setForm: (c: FormContent) => void
}

export const useFormStore = create(persist<FormStoreType>((set) => {
    return ({
        form: {
            age: 0,
            email: "",
            name: "",
            weather: "slippery"
        },
        setForm: (form: FormContent) => set({ form })
    })
}, {
    name: "form-key",
    storage: createJSONStorage(() => localStorage)
}))
