import { useQuery } from "@tanstack/react-query";
import { useEffect, type ComponentProps, type ReactNode } from "react";
import { useNavigate, useParams } from "react-router";
import { cn } from "./lib/utils";

export interface Quote {
    id: number, quote: string, author: string
}
export interface QuotesResponse {
    total: number; skip: number; limit: number;
    quotes: Quote[]
}
const PAGE_SIZE = 100

export function QuotesList() {
    const { page = "1" } = useParams()
    const pageNumber = Number.parseInt(page)
    const { data, refetch } = useQuotes(pageNumber)
    const navigate = useNavigate()
    //console.log("data: ", data?.skip, data?.quotes.length)
    const pageCount = Math.ceil((data?.total??0) / PAGE_SIZE)
    useEffect(() => {
        console.log("user requested quotes", pageNumber)
    }, [pageNumber])
    return (
        <div className="grow flex flex-col gap-2">
            <div className="mt-2 self-center flex gap-2">
                <button disabled={pageNumber < 2} onClick={() => { navigate("/quotes/" + (pageNumber - 1)) }
                }>Prev</button>
                <button disabled={pageNumber >= pageCount} onClick={() => { navigate("/quotes/" + (pageNumber + 1)) }
                }>Next</button>
                <button onClick={() => refetch()}>Reload data</button> 
            </div>
            <div className="h-1 grow overflow-auto flex flex-col gap-1">
                {data?.quotes.map(q => (
                    <QuoteView key={q.id} quote={q} />
                ))}
            </div>
        </div>
    )
}

function useQuotes(pageNumber: number) {
    return useQuery({
        queryKey: ["key1", pageNumber ],
        placeholderData: d => d,
        queryFn: async () => {
            const skip = (pageNumber - 1) * PAGE_SIZE
            const limit = PAGE_SIZE
            const response = await fetch(
                "https://dummyjson.com/quotes?skip=" + skip + "&limit=" + limit)
            const data = await response.json()
            return data as QuotesResponse
        }
    })    
}

interface BoxProps extends ComponentProps<"div"> { className?: string, children?: ReactNode}


type MyProps = { age: number, name: string} & any
export function Box({ children, className, ...rest } : BoxProps ) {
    return (
        <div className={cn("p-2 mx-4 my-2 flex flex-col gap-2",
                "rounded-lg shadow-xl bg-slate-200", 
                className)}
                {...rest}>
            {children}
        </div>
    )
}

export function QuoteView(props: { quote: Quote }) {
    const { quote } = props
    return (
        <Box className="bg-neutral-300"

                title="Hans Hans HAns" style={{ opacity: "1"}}>
            <div>{quote.quote}</div>
            <div className="text-xs text-muted-foreground self-end">
                {quote.author}
            </div>
        </Box>
    )
}




