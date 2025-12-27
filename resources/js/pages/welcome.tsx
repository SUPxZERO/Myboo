import { JellyButton } from "@/components/ui/jelly-button"
import { Head, Link, usePage } from "@inertiajs/react"
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
                    <span className="text-2xl">🧁</span>
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
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pb-20 max-w-md mx-auto">

                {/* Logo Image */}
                <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-rose-300 rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
                    <img
                        src="/images/515058467-122138143442704889-4596321856528922397-n.jpg"
                        alt="My Boo Logo"
                        className="relative w-48 h-48 rounded-full shadow-xl border-4 border-white animate-float object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md animate-bounce-in delay-700">
                        <Sparkles className="w-6 h-6 text-accent-yellow animate-sparkle" />
                    </div>
                </div>

                {/* Hero Text */}
                <div className="space-y-4 mb-10">
                    <h1 className="text-4xl font-black text-text-brown uppercase tracking-wide">
                        Hi <span className="text-brand-pink">Boo!</span>
                    </h1>
                    <p className="text-lg text-text-brown/70 leading-relaxed max-w-[300px] mx-auto">
                        Your daily dose of sweetness is just a click away.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-4 w-full px-8 animate-slide-up">
                    <Link href="/dashboard" className="w-full">
                        <JellyButton className="w-full text-lg py-6 shadow-xl shadow-brand-pink/30">
                            Order Now 🛍️
                        </JellyButton>
                    </Link>
                    <Link href="/menu" className="w-full">
                        <JellyButton variant="secondary" className="w-full text-lg py-6">
                            View Menu 📋
                        </JellyButton>
                    </Link>
                </div>

                {/* Footer decorations */}
                <div className="mt-12 flex gap-4 text-3xl opacity-50">
                    <span className="animate-wiggle">🍓</span>
                    <span className="animate-wiggle delay-100">🍪</span>
                    <span className="animate-wiggle delay-200">🍵</span>
                </div>
            </main>
        </div>
    )
}
