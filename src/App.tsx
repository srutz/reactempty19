import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { useState } from "react"
import { useWindowSize } from "./hooks/useWindowSize"


export function App() {

    const [showSheet, setShowSheet] = useState(false)
    const { width, height} = useWindowSize()

    return (
        <div className="grow m-8 bg-green-400">
            <HelloSheet
                open={showSheet}
                onOpenChange={setShowSheet}
            />
            <div>Window size {width} x {height} </div>
            <button onClick={() => setShowSheet(!showSheet)}>Toggle Sheet</button>
        </div>
    )
}

type HelloSheetProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

function HelloSheet({ open, onOpenChange }: HelloSheetProps) {
    const { width, height} = useWindowSize()

    console.log("rerender sheet", open)

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        HELLO HELLO
                        <div>Window size {width} x {height} </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

