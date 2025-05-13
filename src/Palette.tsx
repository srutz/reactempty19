
/* render x * y rectangles in a grid  and color them to make a nice rgb color palette */

import { cn } from "./lib/utils"


export function Palette({size, className} : { size: number, className?: string }) {
    const w = 16
    const h = 16
    return (
        <div style={{ gridTemplateColumns: "repeat(" + size + ", 1fr)"}}
            className={cn("self-center grid gap-1", 
                "w-[" + w * size + "px]", 
                "h-[" + h * size + "px]", 
                className)} >
            {Array.from({ length: size * size }, (_, i) => (
                <div
                    key={i}
                    style={{
                        width: `${w}px`,
                        height: `${h}px`,
                        backgroundColor: `hsl(${(i % size) * (360 / size)}, 100%, 50%)`,
                    }}
                />
            ))}
        </div>
    )
}