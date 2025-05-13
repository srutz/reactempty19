
/* monkey-typing for Activity */
import * as AllOfReact from 'react';
export type ActivityProps = { children: AllOfReact.ReactNode, mode? : "visible" | "hidden" } & AllOfReact.ComponentProps<"div">
export type ActivityType = (props: ActivityProps) => AllOfReact.ReactNode
export const Activity = (AllOfReact as any).unstable_Activity as ActivityType


