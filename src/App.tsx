import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"


export function App() {
    const [showSheet, setShowSheet] = useState(false)
    return (
        <div className="grow m-8 bg-green-400">
            <HelloSheet open={showSheet}></HelloSheet>
            <button onClick={() => setShowSheet(!showSheet)}>Toggle Sheet</button>
        </div>
    )
}

function HelloSheet({ open } : { open: boolean }) {
    return (
        <Sheet open={open}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

