


/* monkey-typing for ViewTraisition */
import * as AllOfReact from 'react';
export type ViewTransitionProps = { children: AllOfReact.ReactNode } & AllOfReact.ComponentProps<"div">
export type ViewTransitionType = (props: ViewTransitionProps) => AllOfReact.ReactNode

export const ViewTransition = (AllOfReact as any).unstable_ViewTransition as ViewTransitionType


