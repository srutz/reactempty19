import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import { QuotesList } from './App.tsx'
import './index.css'
import { Menubar } from './Menubar.tsx'

const router = createBrowserRouter([
    {
        path: "/", element: <App></App>,
        children: [
            {
                path: "/", element: 
                    <div className="h-1 grow flex flex-col justify-center items-center>">
                        <div className="text-4xl self-center">Home</div>
                    </div>
            }, 
            {
                path: "/quotes/:page?", element: <QuotesList />
            },
            {
                path: "/about", element: 
                    <div className="h-1 grow flex flex-col justify-center items-center>">
                        <div className="text-4xl self-center">About</div>
                    </div>
            }, 
        ]
    },
])

const client = new QueryClient()
createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={client}>
        <RouterProvider router={router} />
    </QueryClientProvider>
)

function App() {
    return (
        <div className="h-1 grow flex flex-col">
            <Menubar></Menubar>
            <div className="h-1 grow flex flex-col">
                <Outlet></Outlet>
            </div>
        </div>
    )
}