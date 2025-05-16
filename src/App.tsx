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
            <HelloSheet open={showSheet} 
                onOpenChange={setShowSheet} 
            />
            <button onClick={() => setShowSheet(!showSheet)}>Toggle Sheet</button>
        </div>
    )
}

function HelloSheet({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
    console.log("rerender sheet", open)
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
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

