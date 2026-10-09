import * as React from "react"
import { cn } from "@/lib/utils"

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-[2rem] bg-card p-7 shadow-[0_10px_40px_-12px_rgba(120,60,20,0.25)]", className)} {...props} />
}
