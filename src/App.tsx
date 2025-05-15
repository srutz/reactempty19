import { memo, startTransition, useEffect, useOptimistic, useState, useTransition, type MouseEvent } from "react";
import { cn } from "./lib/utils";
import { Palette } from "./Palette";


export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export type Quote = {
    id: number
    quote: string
    author: string
}

export function QuoteRenderer({ quote }: { quote?: Quote }) {
    if (!quote) {
        return undefined
    }
    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="quote">{quote.quote}</p>
            <p className="text-gray-500 text-sm">- {quote.author}</p>
        </div>
    )
}


export async function slowWebcall(id: number) {
    await delay(2_000)
    const r = await fetch("https://dummyjson.com/quotes/" + encodeURIComponent(id))
    return await r.json() as Quote
}

export function App() {
    const [id, setId] = useState(1)
    const [quote, setQuote] = useState<Quote>()
    const [optimisticQuote, setOptimisticQuote] = useOptimistic(
        quote,
        (_, newQuote) => {
            return newQuote as Quote
        }
    )
    const [isPending, startTransition] = useTransition()
    useEffect(() => {
        startTransition(async () => {
            setOptimisticQuote({
                id: -1,
                quote: "Loading quote. ..",
                author: "Loading author...",
            });
            const quote = await slowWebcall(id)
            setOptimisticQuote(quote)
            setQuote(quote)
        })
    }, [id])
    console.log("rendering", id, isPending, quote, optimisticQuote)
    return (
        <div className={cn("bg-gray-100 h-1 grow flex flex-col justify-center items-center")}>
            <QuoteRenderer quote={isPending ? optimisticQuote : quote} />
            <button onClick={() => setId(id + 1)} className="">Load Quote</button>
        </div>
    )
}

