import { memo, useState, type MouseEvent } from "react";
import { cn } from "./lib/utils";
import { Palette } from "./Palette";

export function App() {
    const [pos, setPos ] = useState({x: -1, y: -1})
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const x = e.clientX
        const y = e.clientX
        setPos({ x, y })
    }
    return (
        <div className={cn("bg-gray-100 h-1 grow flex flex-col justify-center")}>
            <div className="self-center text-sm">Mouse Position {pos.x}, {pos.y}</div>
            <div className="self-center p-4 bg-white shadow-lg flex flex-col items-center justify-center"
                    onMouseLeave={() => setPos({ x: -1, y: -1})}
                    onMouseMove={handleMouseMove}>
                <Palette size={50} />
            </div>
        </div>
    )
}

const MemoPalette = memo(Palette)
