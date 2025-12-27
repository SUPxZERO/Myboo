import { BottomNav } from "@/components/home/bottom-nav"
import { Head, Link } from "@inertiajs/react"
import { Home, Menu, ShoppingCart, User } from "lucide-react"
import { ReactNode } from "react"

interface CustomerLayoutProps {
    children: ReactNode
    title?: string
}

export default function CustomerLayout({ children, title = "My Boo ✨" }: CustomerLayoutProps) {
    return (
        <div className="min-h-screen pb-32 bg-bg-primary font-sans">
            <Head title={title} />

            {/* Header - Responsive */}
            <header className="sticky top-0 z-40 bg-bg-primary/95 backdrop-blur-sm px-6 py-4 border-b border-pink-100/50 lg:border-none transition-all duration-300">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Left Side: Logo & Main Nav */}
                    <div className="flex items-center gap-8 lg:gap-12">
                        {/* Logo */}
                        <Link href="/" className="shrink-0">
                            <img
                                src="/images/logo.png"
                                alt="My Boo Logo"
                                className="h-12 lg:h-14 w-auto drop-shadow-md hover:scale-105 transition-transform duration-300 rounded-full ring-2 ring-white/50"
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-8 bg-white/50 px-6 py-2 rounded-full border border-pink-100/50 shadow-sm">
                            <Link href="/dashboard" className="flex items-center gap-2 text-text-brown/80 hover:text-brand-pink transition-colors font-medium text-sm uppercase tracking-wide">
                                <Home className="w-4 h-4 mb-0.5" />
                                Home
                            </Link>
                            <Link href="/menu" className="flex items-center gap-2 text-text-brown/80 hover:text-brand-pink transition-colors font-medium text-sm uppercase tracking-wide">
                                <Menu className="w-4 h-4 mb-0.5" />
                                Menu
                            </Link>
                        </nav>
                    </div>

                    {/* Right Side: Actions */}
                    <div className="flex items-center gap-4 lg:gap-6">
                        <nav className="hidden lg:flex items-center gap-6">
                            <Link href="/cart" className="relative group text-text-brown hover:text-brand-pink transition-colors">
                                <ShoppingCart className="w-6 h-6" />
                                <span className="absolute -top-2 -right-2 bg-brand-pink text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    0
                                </span>
                            </Link>
                            <Link href="/profile" className="text-text-brown hover:text-brand-pink transition-colors">
                                <User className="w-6 h-6" />
                            </Link>
                        </nav>

                        {/* Flower decorative button */}
                        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all text-brand-pink border border-pink-100">
                            <span className="text-xl">🌸</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 space-y-8 lg:space-y-12">
                {children}
            </main>

            {/* Bottom Navigation (Mobile Only) */}
            <BottomNav />
        </div>
    )
}
