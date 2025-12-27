"use client"

import { Home, BookOpen, ShoppingCart, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"

type NavItem = "home" | "menu" | "cart" | "profile"

export function BottomNav() {
  const pathname = usePathname()
  const router = useRouter()

  const getActiveFromPath = (): NavItem => {
    if (pathname === "/") return "home"
    if (pathname.startsWith("/menu")) return "menu"
    if (pathname.startsWith("/cart")) return "cart"
    if (pathname.startsWith("/profile")) return "profile"
    return "home"
  }

  const active = getActiveFromPath()

  const navItems = [
    { id: "home" as NavItem, icon: Home, label: "Home", path: "/", emoji: "🏠" },
    { id: "menu" as NavItem, icon: BookOpen, label: "Menu", path: "/menu", emoji: "📖" },
    { id: "cart" as NavItem, icon: ShoppingCart, label: "Cart", path: "/cart", emoji: "🛍️" },
    { id: "profile" as NavItem, icon: User, label: "Profile", path: "/profile", emoji: "💫" },
  ]

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
      <div className="bg-linear-to-b from-cream to-rose-light/50 backdrop-blur-xl rounded-[35px] shadow-[0_15px_50px_rgba(255,105,180,0.25)] border border-white/60 px-6 py-4 border-gradient-to-r from-brand-pink/30 via-cream to-rose-medium/30">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = active === item.id

            return (
              <button
                key={item.id}
                onClick={() => router.push(item.path)}
                className={cn(
                  "flex flex-col items-center gap-1 transition-all duration-300 p-2.5 rounded-2xl relative group",
                  isActive ? "bg-linear-to-br from-brand-pink/25 to-rose-medium/15 scale-110" : "hover:bg-brand-pink/10 hover:scale-105",
                )}
              >
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl bg-brand-pink/5 animate-pulse-glow" />
                )}
                <span className="text-xl">{item.emoji}</span>
                <Icon
                  className={cn(
                    "w-6 h-6 transition-all duration-300",
                    isActive ? "text-brand-pink fill-brand-pink stroke-[2.5]" : "text-text-brown/60 group-hover:text-brand-pink/80",
                  )}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span
                  className={cn(
                    "text-xs font-bold transition-all duration-300",
                    isActive ? "text-brand-pink scale-110" : "text-text-brown/60 group-hover:text-brand-pink/80",
                  )}
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
