import { useQuery } from "@tanstack/react-query";

export interface Quote {
    id: number,
    quote: string,
    author: string
}

export interface QuotesResponse {
    total: number; skip: number; limit: number;
    quotes: Quote[]
}

export function App() {
    const { data } = useQuery({
        queryKey: [ "key1" ],
        queryFn: async() => {
            const response = await fetch("https://dummyjson.com/quotes")
            const data = await response.json()
            return data as QuotesResponse
        } 
    })
    console.log("App", data)
    return (
        <div className="h-1 grow m-8 bg-green-400 overflow-auto flex flex-col">
            <pre className="text-sm">
                {JSON.stringify(data, null, 4)}
            </pre>
        </div>
    )
}





