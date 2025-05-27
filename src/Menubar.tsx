import { NavLink } from "react-router";

export function Menubar() {
    return (
        <div className="bg-slate-200 border-b border-gray-100 flex gap-4 
                py-2
                justify-center items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/quotes">Quotes</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}