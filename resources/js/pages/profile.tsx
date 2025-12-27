import { SoftCard } from "@/components/ui/soft-card"
import CustomerLayout from "@/layouts/customer-layout"
import { Link } from "@inertiajs/react"
import { Bell, ChevronRight, CreditCard, Globe, Heart, LogOut, Package } from "lucide-react"
import { useState } from "react"

export default function ProfilePage() {
    const [favorites, setFavorites] = useState([
        {
            id: 1,
            name: "Classic Tiramisu",
            image: "/images/8b68f7a3-75f9-40b2-828f-c36de617f3f7.jpg",
            price: 12.99,
            flavor: "classic",
        },
        {
            id: 2,
            name: "Strawberry Bliss",
            image: "/images/5e9293d9-9e2c-496a-b2d7-424673cfb692.jpg",
            price: 13.99,
            flavor: "strawberry",
        },
        {
            id: 3,
            name: "Matcha Dream",
            image: "/images/fd251ee2-612c-40e6-ae6d-e287d7a5b216.jpg",
            price: 14.99,
            flavor: "matcha",
        },
    ])

    const orders = [
        {
            id: "ORD-2024-001",
            date: "Dec 20, 2024",
            items: 3,
            total: 42.97,
            status: "Delivered",
        },
        {
            id: "ORD-2024-002",
            date: "Dec 15, 2024",
            items: 2,
            total: 26.98,
            status: "Delivered",
        },
        {
            id: "ORD-2024-003",
            date: "Dec 10, 2024",
            items: 1,
            total: 12.99,
            status: "Delivered",
        },
    ]

    const settings = [
        { id: "notifications", icon: Bell, label: "Notifications", action: () => { } },
        { id: "language", icon: Globe, label: "Language", action: () => { } },
        { id: "payment", icon: CreditCard, label: "Payment Methods", action: () => { } },
        { id: "logout", icon: LogOut, label: "Log Out", action: () => { } },
    ]

    const flavorColors: Record<string, string> = {
        classic: "#8B4513",
        strawberry: "#FF69B4",
        mango: "#FFD700",
        matcha: "#90EE90",
        oreo: "#2F4F4F",
        blueberry: "#4169E1",
    }

    return (
        <CustomerLayout title="Profile 💕">
            {/* Header */}
            <div className="pt-2 pb-6 text-center">
                <h1 className="text-4xl font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent mb-2 flex items-center justify-center gap-2">
                    My Profile 💕
                </h1>
            </div>

            <div className="space-y-6">
                {/* Profile Card */}
                <SoftCard>
                    <div className="flex items-center gap-4 p-6">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-linear-to-br from-brand-pink/40 to-accent-yellow/40 flex items-center justify-center border-2 border-brand-pink/30 shadow-lg animate-bounce-in">
                            <span className="text-4xl animate-heart-beat">🍰</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-black text-text-brown mb-1">Sweet Tooth</h2>
                            <p className="text-sm text-brand-pink font-semibold">sweettooth@myboo.com</p>
                            <p className="text-sm text-brand-pink/80 font-medium">+1 (555) 123-4567</p>
                        </div>
                        <button className="text-brand-pink hover:scale-125 hover:rotate-90 transition-all duration-300 cursor-pointer">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </SoftCard>

                {/* Past Orders */}
                <div>
                    <div className="flex items-center justify-between mb-4 px-2">
                        <h3 className="text-lg font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent flex items-center gap-2">
                            <Package className="w-5 h-5 text-brand-pink" />
                            Past Orders
                        </h3>
                        <button className="text-brand-pink text-sm font-bold hover:scale-110 transition-transform px-3 py-1 rounded-full bg-brand-pink/10 hover:bg-brand-pink/20 cursor-pointer">View All ✨</button>
                    </div>
                    <div className="space-y-3">
                        {orders.map((order) => (
                            <SoftCard key={order.id} className="hover:scale-[1.02] transition-all cursor-pointer">
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-bold text-text-brown">{order.id}</span>
                                        <span className="text-xs bg-linear-to-r from-brand-pink/20 to-rose-medium/20 text-brand-pink px-3 py-1 rounded-full font-bold border border-brand-pink/30">
                                            {order.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-text-brown/70">
                                        <span className="font-medium">{order.date}</span>
                                        <span className="font-medium">{order.items} items</span>
                                        <span className="font-bold bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent">${order.total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </SoftCard>
                        ))}
                    </div>
                </div>

                {/* Favorites */}
                <div>
                    <div className="flex items-center justify-between mb-4 px-2">
                        <h3 className="text-lg font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent flex items-center gap-2">
                            <Heart className="w-5 h-5 text-brand-pink fill-brand-pink animate-heart-beat" />
                            My Favorites
                        </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {favorites.map((item) => (
                            <Link
                                key={item.id}
                                href={`/product/${item.id}`}
                            >
                                <SoftCard
                                    className="hover:scale-105 transition-all cursor-pointer"
                                >
                                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-2 border border-brand-pink/20">
                                        <img src={item.image || "/placeholder.svg"} alt={item.name} className="object-cover w-full h-full" />
                                        <button
                                            className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-125 hover:rotate-180 transition-all duration-300 border border-brand-pink/20 cursor-pointer"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                e.stopPropagation()
                                                setFavorites(favorites.filter((f) => f.id !== item.id))
                                            }}
                                        >
                                            <Heart className="w-4 h-4 text-brand-pink fill-brand-pink" />
                                        </button>
                                    </div>
                                    <div className="px-2 pb-2">
                                        <div className="flex items-center gap-1 mb-1">
                                            <div
                                                className="w-2 h-2 rounded-full shadow-sm"
                                                style={{ backgroundColor: flavorColors[item.flavor] || "#8B4513" }}
                                            />
                                            <p className="text-xs font-bold text-text-brown truncate">{item.name}</p>
                                        </div>
                                        <p className="text-sm font-bold bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent">${item.price.toFixed(2)}</p>
                                    </div>
                                </SoftCard>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Settings */}
                <div>
                    <h3 className="text-lg font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent mb-4 px-2">Settings</h3>
                    <SoftCard>
                        <div className="divide-y divide-brand-pink/10">
                            {settings.map((setting) => {
                                const Icon = setting.icon
                                return (
                                    <button
                                        key={setting.id}
                                        onClick={setting.action}
                                        className="w-full flex items-center justify-between p-4 hover:bg-brand-pink/10 hover:shadow-inner transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className="w-5 h-5 text-brand-pink" />
                                            <span className="font-bold text-text-brown">{setting.label}</span>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-brand-pink/60 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                )
                            })}
                        </div>
                    </SoftCard>
                </div>
            </div>
        </CustomerLayout>
    )
}
