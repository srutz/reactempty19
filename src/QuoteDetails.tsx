import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { QuoteView, type Quote } from "./App"

export function QuoteDetails() {
    const { id: idString } = useParams()
    const id = idString ? Number.parseInt(idString) : undefined
    const { data: quote } = useQuote(id)
    return (
        <div className="flex flex-col gap-2">
            <div className="text-4xl font-bold">Quote Details</div>
            {quote ? (
                <QuoteView quote={quote} />
            ) : (
                <div>...</div>
            )}
        </div>
    )
}

export function useQuote(id?: number) {
    return useQuery({
        queryKey: ["quotedetails", id],
        staleTime: 60_000,
        queryFn: async () => {
            const r = await fetch(
                //"https://www.dummyjson.com/quotes/" + encodeURIComponent(id||"-1")
                `https://www.dummyjson.com/quotes/${encodeURIComponent(id||"-1")}`
            )
            return  await r.json() as Quote
        }
    })
}