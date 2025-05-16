import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from "react"


export function App() {
    const [showSheet, setShowSheet] = useState(false)
    return (
        <div className="grow m-8 bg-green-400">
            <HelloSheet open={showSheet}></HelloSheet>
            <button onClick={() => setShowSheet(!showSheet)}>Toggle Sheet</button>
        </div>
    )
}

function HelloSheet({ open: initialOpen }: { open: boolean }) {
    const [ open, setOpen ] = useState(initialOpen)
    useEffect(() => { setOpen(initialOpen) }, [initialOpen])
    const handleOpenChange = (open_: boolean) => {
        setOpen(open_)
    }
    console.log("rerender sheet", initialOpen)
    return (
        <Sheet open={open} onOpenChange={handleOpenChange}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        HELLO HELLO
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

