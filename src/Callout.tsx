import * as motion from "motion/react-client"
import type { ReactNode } from "react"
import { useLocation } from "react-router"

export 
function Callout({ paths, children } : { paths: string[], children: ReactNode }) {
    const { pathname } = useLocation()
    if (!paths.includes(pathname))
        return undefined
    return (
        <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                className="m-1 h-[220px] w-[220px] absolute bottom-0 
            rounded-full bg-red-500 flex flex-col items-center justify-center">
                {children}
        </motion.div>
    )
}