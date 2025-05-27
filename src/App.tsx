import { useEffect, useState } from "react"

type Quote = {
    id: number,
    quote: string,
    author: string
}

async function delay(delayMs: number) {
    return new Promise(resolve => setTimeout(resolve, delayMs))
}

function useQuotes() {
    const [loading, setLoading] = useState(false)
    const [quotes, setQuotes] = useState<Quote[]>([])
    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                const response = await fetch("https://dummyjson.com/quotes")
                const data = await response.json()
                await delay(10_000)
                setQuotes(data.quotes)
            } finally {
                setLoading(false)
            }
        })()
    } , [])
    return { quotes, loading }
}

export function App() {
    const { quotes, loading } = useQuotes()
    if (loading) {
        return <div>Loading ...</div>
    }
    return (
        <ul className="m-4 h-1 grow overflow-y-auto flex flex-col">
            {quotes.map((q) => {
                return (
                    <QuotePanel quote={q} key={q.id} />
                )
            })}
        </ul>
    )
}

function QuotePanel({ quote }: { quote: Quote}) {
    return (
        <div className="w-64 bg-slate-200 shadow-xl round-lg p-2 m-2 flex flex-col gap-2">
            <div>{quote.quote}</div>
            <div className="self-end text-xs text-gray-500">{quote.author}</div>
        </div>
    )
}

function useInterval(interval: number, func?: () => void) {
    const [dummy, setDummy] = useState(false)
    useEffect(() => {
        const id = setInterval(() => {
            setDummy(!dummy)
            if (func) func()
        }, interval)
        return () => clearInterval(id)
    }, [dummy])
    return new Date()
}


function Clock() {
    useInterval(100, () => console.log("hi"))
    return (<div>{new Date().toISOString()}</div>)
}


function Header({title} : { title: string}) {
    const size = useWindowSize()
    return (
        <div className="text-2xl">{size.height < 150 ? "" : title}</div>
    )
}

function useWindowSize() {
    const [size, setSize] = useState(
        { width: window.innerWidth, height: window.innerHeight })
    useEffect(() => {
        const ls = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener("resize", ls)
        return () => {
            window.removeEventListener("resize", ls)
        }
    }, [])
    return size
}


