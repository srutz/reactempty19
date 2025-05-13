import { Suspense } from "react";
import { cn } from "./lib/utils";
import { QuotePanel } from "./QuotePanel";

export function App() {
    return (
        <div className={cn("bg-gray-100 h-1 grow flex flex-col justify-center")}>
            <Suspense fallback={<p>⌛Downloading data...</p>}>
                <QuotePanel id={1} />
            </Suspense>
        </div>
    )
}
