"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface SoftCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function SoftCard({ children, className, onClick }: SoftCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-linear-to-br from-cream via-cream to-rose-light/40 rounded-[25px] p-4",
        "shadow-[0_8px_30px_rgba(255,105,180,0.15)]",
        "border border-brand-pink/10",
        "transition-all duration-300",
        "hover:shadow-[0_15px_50px_rgba(255,105,180,0.25)]",
        "hover:translate-y-[-3px]",
        onClick && "cursor-pointer hover:border-brand-pink/20",
        className,
      )}
    >
      {children}
    </div>
  )
}
