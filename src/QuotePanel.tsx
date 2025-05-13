import { cache, use } from "react"

export type Quote = {
    id: number
    quote: string
    author: string
}

export async function getQuote(id: number) {
    console.log("Fetching quote from API...")
    const response = await fetch(`https://dummyjson.com/quotes/${id}`)
    return await response.json()
}

const getQuoteCached = cache(async (id: number) => {
    const response = await fetch(`https://dummyjson.com/quotes/${id}`)
    return await response.json()
})

export function QuoteRenderer({ quote }: { quote: Quote }) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="quote">{quote.quote}</p>
            <p className="author">- {quote.author}</p>
        </div>
    )
}

export function QuotePanel({ id }: { id: number }) {
    const quote = use(getQuoteCached(id))
    return <QuoteRenderer quote={quote} />
}

