import { JellyButton } from "@/components/ui/jelly-button"
import { Head, Link, usePage } from "@inertiajs/react"
import AppLogoIcon from "@/components/app-logo-icon"
import { Sparkles } from "lucide-react"
import { type SharedData } from "@/types"

export default function Welcome() {
    const { auth } = usePage<SharedData>().props

    return (
        <div className="min-h-screen bg-bg-primary font-sans flex flex-col relative overflow-hidden">
            <Head title="Welcome to My Boo ✨" />

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-light/30 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-peach/30 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
            </div>

            {/* Header */}
            <header className="relative z-10 w-full max-w-md mx-auto p-6 flex justify-between items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm animate-bounce-in">
                    <AppLogoIcon className="w-8 h-8" />
                </div>
                <nav className="flex items-center gap-4">
                    {auth.user ? (
                        <Link href="/dashboard">
                            <JellyButton size="sm" variant="outline">Dashboard</JellyButton>
                        </Link>
                    ) : (
                        <>
                            <Link href="/login">
                                <span className="font-bold text-text-brown hover:text-brand-pink transition-colors">Log in</span>
                            </Link>
                            <Link href="/register">
                                <JellyButton size="sm">Register</JellyButton>
                            </Link>
                        </>
                    )}
                </nav>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 pb-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-20">

                {/* Left Column (Desktop): Text & CTA */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:space-y-10 flex-1 order-2 lg:order-1">
                    {/* Hero Text */}
                    <div className="space-y-4 mb-6 sm:mb-8 md:mb-10 lg:mb-0">
                        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black text-text-brown uppercase tracking-wide leading-tight">
                            Hi <span className="text-brand-pink">Boo!</span>
                        </h1>
                        <p className="text-lg lg:text-2xl text-text-brown/70 leading-relaxed max-w-[300px] lg:max-w-xl mx-auto lg:mx-0">
                            Your daily dose of sweetness is just a click away.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md lg:max-w-none animate-slide-up">
                        <Link href="/dashboard" className="w-full sm:w-auto">
                            <JellyButton size="lg" className="w-full sm:w-48 text-lg py-4 sm:py-5 md:py-6 shadow-xl shadow-brand-pink/30">
                                Order Now 🛍️
                            </JellyButton>
                        </Link>
                        <Link href="/menu" className="w-full sm:w-auto">
                            <JellyButton variant="secondary" size="lg" className="w-full sm:w-48 text-lg py-4 sm:py-5 md:py-6">
                                View Menu 📋
                            </JellyButton>
                        </Link>
                    </div>

                    {/* Footer decorations (Desktop moved here) */}
                    <div className="mt-8 flex gap-6 text-4xl opacity-50">
                        <span className="animate-wiggle">🍓</span>
                        <span className="animate-wiggle delay-100">🍪</span>
                        <span className="animate-wiggle delay-200">🍵</span>
                    </div>
                </div>

                {/* Right Column (Desktop): Image */}
                <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full max-w-md lg:max-w-none">
                    <div className="relative">
                        <div className="absolute inset-0 bg-rose-300 rounded-full blur-3xl opacity-20 animate-pulse-glow scale-150"></div>
                        <img
                            src="/images/logo.png"
                            alt="My Boo Logo"
                            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[500px] lg:h-[500px] rounded-full shadow-2xl border-4 lg:border-8 border-white animate-float object-cover"
                        />
                        <div className="absolute -bottom-2 -right-2 lg:bottom-8 lg:right-8 bg-white p-2 lg:p-4 rounded-full shadow-xl animate-bounce-in delay-700">
                            <Sparkles className="w-6 h-6 lg:w-10 lg:h-10 text-accent-yellow animate-sparkle" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
