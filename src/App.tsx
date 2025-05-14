import { useState } from "react";
import { cn } from "./lib/utils";
import { QuotePanel } from "./QuotePanel";


export function App() {
    const [visible, setVisible] = useState(true)
    return (
        <div className={cn("bg-gray-100 h-1 grow flex flex-col justify-center")}>
            {visible && (
                <QuotePanel id={1} />
            )}
            <div className="self-center flex flex-col">
                <input placeholder="Type here..." className="bg-white border-2 border-gray-300 rounded-lg p-2" />
            </div>
            <div className="self-center flex">
                <button onClick={() => setVisible(!visible)}>Toggle Quote</button>
            </div>
        </div>
    )
}
