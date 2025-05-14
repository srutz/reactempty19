import { ViewTransition } from "./TypedViewTransition"

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

export function QuoteRenderer({ quote }: { quote: Quote }) {
    return (
        <ViewTransition>
            <div className="self-center bg-white rounded-lg shadow-lg p-8">
                <p className="quote">{quote.quote}</p>
                <p className="author">- {quote.author}</p>
            </div>
        </ViewTransition>
    )
}

export function QuotePanel({ id }: { id: number }) {
    return (
        <ViewTransition>
            <div className="text-xl">Hello World</div>
        </ViewTransition>
    )
}

