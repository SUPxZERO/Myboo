import { Head, Link, usePage } from "@inertiajs/react"
import {
    Bell,
    Cake as Cupcake,
    ClipboardList,
    LayoutDashboard,
    Menu as MenuIcon,
    Settings,
    TrendingUp,
    Users,
    X
} from "lucide-react"
import { ReactNode, useState } from "react"
import { cn } from "@/lib/utils"

interface AdminLayoutProps {
    children: ReactNode
    title?: string
}

export default function AdminLayout({ children, title = "Admin Panel" }: AdminLayoutProps) {
    const { url } = usePage()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const getGreeting = () => {
        const hour = new Date().getHours()
        if (hour < 12) return "Good Morning, Boss!"
        if (hour < 18) return "Good Afternoon, Boss!"
        return "Good Evening, Boss!"
    }

    const navItems = [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
        { id: "orders", label: "Orders", icon: ClipboardList, href: "/admin/orders" },
        { id: "menu", label: "Menu Management", icon: Cupcake, href: "/admin/menu" },
        { id: "analytics", label: "Analytics", icon: TrendingUp, href: "/admin/analytics" },
        { id: "customers", label: "Customers", icon: Users, href: "/admin/customers" },
        { id: "settings", label: "Settings", icon: Settings, href: "/admin/settings" },
    ]

    const isActive = (href: string) => {
        if (href === "/admin" && url === "/admin") return true
        if (href !== "/admin" && url.startsWith(href)) return true
        return false
    }

    return (
        <div className="flex h-screen overflow-hidden bg-bg-primary font-sans relative">
            <Head title={title} />

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={cn(
                "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#FFF0F5] border-r border-pink-200 flex-shrink-0 transition-transform duration-300 transform lg:transform-none lg:translate-x-0",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between gap-3 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center">
                                <Cupcake className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="font-bold text-text-brown text-lg">My Boo</h2>
                                <p className="text-xs text-text-brown/60">Admin Panel</p>
                            </div>
                        </div>
                        {/* Mobile Close Button */}
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="lg:hidden text-text-brown/60 hover:text-brand-pink"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="space-y-2 flex-1">
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const active = isActive(item.href)
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-300",
                                        active
                                            ? "bg-brand-pink text-white shadow-lg shadow-pink-300/30"
                                            : "text-text-brown hover:bg-pink-100"
                                    )}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium text-sm">{item.label}</span>
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden w-full">
                {/* Top Bar */}
                <header className="bg-white border-b border-pink-200 px-4 md:px-8 py-4 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-4">
                        {/* Mobile Toggle Button */}
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden p-2 -ml-2 text-text-brown hover:bg-pink-50 rounded-lg"
                        >
                            <MenuIcon className="w-6 h-6" />
                        </button>

                        <div>
                            <h1 className="text-xl md:text-2xl font-bold text-text-brown">{getGreeting()} ☕</h1>
                            <p className="text-xs md:text-sm text-text-brown/60 hidden md:block">Here's what's happening with your store today</p>
                        </div>
                    </div>

                    <button className="relative p-3 rounded-full hover:bg-pink-50 transition-all duration-300 hover:animate-[wiggle_0.5s_ease-in-out] cursor-pointer">
                        <Bell className="w-6 h-6 text-text-brown" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-brand-pink rounded-full"></span>
                    </button>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
