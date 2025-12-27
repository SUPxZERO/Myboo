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

            {/* Header - Responsive with Sticky positioning */}
            <header className="sticky top-0 z-40 bg-bg-primary/95 backdrop-blur-sm px-6 py-4 border-b border-pink-100/50 lg:border-none">
                <div className="max-w-7xl mx-auto flex items-center justify-between relative">
                    {/* Desktop Logic: Left Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link href="/dashboard" className="flex items-center gap-2 text-text-brown hover:text-brand-pink transition-colors font-medium">
                            <Home className="w-5 h-5" />
                            Home
                        </Link>
                        <Link href="/menu" className="flex items-center gap-2 text-text-brown hover:text-brand-pink transition-colors font-medium">
                            <Menu className="w-5 h-5" />
                            Menu
                        </Link>
                    </nav>

                    {/* Logo centered on all screens */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link href="/dashboard">
                            <img
                                src="/images/logo-full.jpg"
                                alt="My Boo Logo"
                                className="h-14 lg:h-16 w-auto drop-shadow-md hover:scale-105 transition-transform duration-300 rounded-full"
                            />
                        </Link>
                    </div>

                    {/* Mobile Alignment Spacer (keeps logo centered) */}
                    <div className="lg:hidden w-10"></div>

                    {/* Desktop Logic: Right Nav / Flower Button */}
                    <div className="flex items-center gap-6">
                        <nav className="hidden lg:flex items-center gap-8">
                            <Link href="/cart" className="flex items-center gap-2 text-text-brown hover:text-brand-pink transition-colors font-medium">
                                <ShoppingCart className="w-5 h-5" />
                                Cart
                            </Link>
                            <Link href="/profile" className="flex items-center gap-2 text-text-brown hover:text-brand-pink transition-colors font-medium">
                                <User className="w-5 h-5" />
                                Profile
                            </Link>
                        </nav>

                        {/* Flower button on right (can be used for something else later, e.g., notifications) */}
                        <button className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                            <span className="text-3xl text-brand-pink">❀</span>
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
