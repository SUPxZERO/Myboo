import { cn } from "@/lib/utils"
import { Link, usePage } from "@inertiajs/react"
import { Home, Menu, ShoppingCart, User } from "lucide-react"

type NavItem = "home" | "menu" | "cart" | "profile"

export function BottomNav() {
    const { url } = usePage()
    const pathname = url

    const getActiveFromPath = (): NavItem => {
        if (pathname === "/" || pathname === "/dashboard") return "home"
        if (pathname.startsWith("/menu")) return "menu"
        if (pathname.startsWith("/cart")) return "cart"
        if (pathname.startsWith("/profile")) return "profile"
        return "home"
    }

    const active = getActiveFromPath()

    const navItems = [
        { id: "home" as NavItem, icon: Home, label: "Home", path: "/dashboard" },
        { id: "menu" as NavItem, icon: Menu, label: "Menu", path: "/menu" },
        { id: "cart" as NavItem, icon: ShoppingCart, label: "Cart", path: "/cart" },
        { id: "profile" as NavItem, icon: User, label: "Profile", path: "/profile" },
    ]

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-sm lg:hidden">
            <div className="bg-cream/95 backdrop-blur-lg rounded-full shadow-lg border border-brand-pink/10 px-4 py-3">
                <div className="flex items-center justify-around">
                    {navItems.map((item) => {
                        const Icon = item.icon
                        const isActive = active === item.id

                        return (
                            <Link
                                key={item.id}
                                href={item.path}
                                className={cn(
                                    "flex flex-col items-center gap-1 transition-all duration-200 px-4 py-2 rounded-2xl",
                                    isActive
                                        ? "bg-brand-pink/15"
                                        : "hover:bg-brand-pink/5",
                                )}
                            >
                                <Icon
                                    className={cn(
                                        "w-5 h-5 transition-colors",
                                        isActive ? "text-brand-pink" : "text-text-brown/40",
                                    )}
                                    strokeWidth={isActive ? 2.5 : 2}
                                />
                                <span
                                    className={cn(
                                        "text-xs font-medium transition-colors",
                                        isActive ? "text-brand-pink" : "text-text-brown/40",
                                    )}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}
