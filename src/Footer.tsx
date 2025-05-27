import { useLocation } from "react-router"



export function Footer() {
    const { pathname } = useLocation()
    return (
        <div className="bg-slate-300 flex justify-end pr-4">
            Showing {pathname}
        </div>
    )
}