
import { useEffect, useState } from 'react'

export function useWindowSize() {
    const [size, setSize] = useState(() => {
        if (typeof window !== undefined) {
            return {
                width: window.innerWidth,
                height: window.innerHeight  
            }
        }
        return { width: -1, height: -1}
    })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return size
}