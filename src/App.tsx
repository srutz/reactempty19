import { useState } from "react";
import { Palette } from "./Palette";

export function App() {
    const [coords, setCoords] = useState({x: -1, y: -1})
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setCoords({ x: e.clientX, y: e.clientY })
    }
    return (
        <div className="grow m-8 bg-green-400 flex flex-col gap-2" onMouseMove={handleMouseMove}>
            <div>Coords: {coords.x} x {coords.y}</div>
            <Palette size={100} />
        </div>
    )
}





