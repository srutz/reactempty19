import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { Fragment } from "react/jsx-runtime";

export interface Quote {
    id: number, quote: string, author: string
}
export interface QuotesResponse {
    total: number; skip: number; limit: number;
    quotes: Quote[]
}
export function App() {
    const { page = "1" } = useParams()
    const pageNumber = Number.parseInt(page)
    const { data } = useQuery({
        queryKey: ["key1",],
        queryFn: async () => {
            const PAGE_SIZE = 13
            const skip = (pageNumber - 1) * PAGE_SIZE
            const limit = PAGE_SIZE
            const response = await fetch(
                "https://dummyjson.com/quotes?skip=" + skip + "&limit=" + limit)
            const data = await response.json()
            return data as QuotesResponse
        }
    })
    return (
        <div className="grow flex flex-col gap-2">
            <div className="flex gap-2">
                <button onClick={
                    () => {
                        window.location.href = "/quotes/" + (pageNumber - 1)
                    }
                }>Prev</button>
                <button onClick={
                    () => {
                        window.location.href = "/quotes/" + (pageNumber + 1)
                    }
                }>Next</button>
            </div>
            <div className="h-1 grow m-8 bg-green-400 overflow-auto gap-x-2 grid grid-cols-[auto_1fr]">
                {data?.quotes.map(q => (
                    <Fragment key={q.id}>
                        <div className="gap-2 text-nowrap">{q.id}</div>
                        <div> {q.quote}</div>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}





