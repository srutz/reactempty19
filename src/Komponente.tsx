import type { ComponentProps } from "react"


export function Komponente(props: ComponentProps<"div">) {
    const { ...rest} = props
    return (
        <div {...rest}>
            <h1>Meine Komponente</h1>
        </div>
    )
}