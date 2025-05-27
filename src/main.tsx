import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { App } from './App.tsx'
import './index.css'

const router = createBrowserRouter([
    {
        path: "/", element: <div>Homepage</div>
    },
    {
        path: "/quotes/:page?", element: <App></App>
    }
])

const client = new QueryClient()
createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={client}>
        <RouterProvider router={router} />
    </QueryClientProvider>
)
