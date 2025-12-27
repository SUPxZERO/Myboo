"use client"

import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface JellyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

const JellyButton = forwardRef<HTMLButtonElement, JellyButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "rounded-full font-black transition-all duration-200 active:scale-95 uppercase tracking-wider"

    const variants = {
      primary:
        "bg-gradient-to-r from-brand-pink to-rose-medium text-white shadow-lg shadow-brand-pink/40 hover:shadow-[0_15px_40px_rgba(255,105,180,0.4)] hover:scale-110 border border-white/30",
      secondary:
        "bg-gradient-to-r from-accent-yellow to-accent-peach text-text-brown shadow-lg shadow-accent-yellow/40 hover:shadow-[0_15px_40px_rgba(220,180,0,0.4)] hover:scale-110 border border-white/30",
      outline: "bg-transparent border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white hover:shadow-[0_10px_30px_rgba(255,105,180,0.3)]",
    }

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], "animate-bounce-in", className)}
        {...props}
      >
        {children}
      </button>
    )
  },
)

JellyButton.displayName = "JellyButton"

export { JellyButton }
