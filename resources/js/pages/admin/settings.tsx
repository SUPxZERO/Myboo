import { SoftCard } from "@/components/ui/soft-card"
import AdminLayout from "@/layouts/admin-layout"
import {
    Bell,
    Globe,
    Lock,
    MessageCircle,
    Palette,
    Store,
    User,
} from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("general")
    const [storeName, setStoreName] = useState("My Boo")
    const [email, setEmail] = useState("admin@myboo.com")
    const [currency, setCurrency] = useState("USD")
    const [language, setLanguage] = useState("English")
    const [theme, setTheme] = useState("light")
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        orders: true,
        marketing: false,
    })

    const settingsTabs = [
        { id: "general", label: "General", icon: Store },
        { id: "account", label: "Account", icon: User },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "appearance", label: "Appearance", icon: Palette },
        { id: "security", label: "Security", icon: Lock },
    ]

    return (
        <AdminLayout title="Settings">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-text-brown">Settings</h2>
                <p className="text-sm text-text-brown/60">Manage your store preferences and account</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Settings Sidebar */}
                <SoftCard className="w-full lg:w-64 h-fit p-2">
                    <nav className="space-y-1">
                        {settingsTabs.map((tab) => {
                            const Icon = tab.icon
                            const isActive = activeTab === tab.id
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left cursor-pointer ${isActive ? "bg-pink-100 text-brand-pink font-semibold" : "text-text-brown hover:bg-pink-50"
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    {tab.label}
                                </button>
                            )
                        })}
                    </nav>
                </SoftCard>

                {/* Settings Content */}
                <div className="flex-1 space-y-6">
                    {activeTab === "general" && (
                        <div className="max-w-2xl space-y-6">
                            <SoftCard>
                                <h2 className="text-lg font-bold text-text-brown mb-6 flex items-center gap-2">
                                    <Store className="w-5 h-5 text-brand-pink" />
                                    Store Information
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-text-brown mb-2">Store Name</label>
                                        <input
                                            type="text"
                                            value={storeName}
                                            onChange={(e) => setStoreName(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-brand-pink focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-text-brown mb-2">Currency</label>
                                            <select
                                                value={currency}
                                                onChange={(e) => setCurrency(e.target.value)}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-brand-pink focus:outline-none transition-colors bg-white"
                                            >
                                                <option value="USD">USD ($)</option>
                                                <option value="EUR">EUR (€)</option>
                                                <option value="GBP">GBP (£)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-text-brown mb-2">Language</label>
                                            <select
                                                value={language}
                                                onChange={(e) => setLanguage(e.target.value)}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-brand-pink focus:outline-none transition-colors bg-white"
                                            >
                                                <option value="English">English</option>
                                                <option value="Spanish">Spanish</option>
                                                <option value="French">French</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </SoftCard>

                            <div className="flex justify-end">
                                <button className="px-6 py-3 bg-brand-pink text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-pink-300/30 cursor-pointer">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "account" && (
                        <div className="max-w-2xl space-y-6">
                            <SoftCard>
                                <h2 className="text-lg font-bold text-text-brown mb-6 flex items-center gap-2">
                                    <User className="w-5 h-5 text-brand-pink" />
                                    Profile Information
                                </h2>
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center text-4xl border-4 border-white shadow-lg">
                                        🍰
                                    </div>
                                    <div>
                                        <button className="px-4 py-2 border-2 border-pink-200 rounded-full text-sm font-semibold hover:bg-pink-50 transition-colors cursor-pointer">
                                            Change Avatar
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-text-brown mb-2">Email Address</label>
                                        <div className="relative">
                                            <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-brown/40" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-pink-100 focus:border-brand-pink focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SoftCard>
                            <div className="flex justify-end">
                                <button className="px-6 py-3 bg-brand-pink text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-pink-300/30 cursor-pointer">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "notifications" && (
                        <div className="max-w-2xl space-y-6">
                            <SoftCard>
                                <h2 className="text-lg font-bold text-text-brown mb-6 flex items-center gap-2">
                                    <Bell className="w-5 h-5 text-brand-pink" />
                                    Notification Preferences
                                </h2>
                                <div className="space-y-4 divide-y divide-pink-100">
                                    {[
                                        { id: "email", label: "Email Notifications", desc: "Receive daily summaries and alerts" },
                                        { id: "push", label: "Push Notifications", desc: "Get real-time updates on orders" },
                                        { id: "orders", label: "New Order Alerts", desc: "Notify when a new order arrives" },
                                        {
                                            id: "marketing",
                                            label: "Marketing Updates",
                                            desc: "Receive news about features and tips",
                                        },
                                    ].map((item) => (
                                        <div key={item.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                                            <div>
                                                <p className="font-semibold text-text-brown">{item.label}</p>
                                                <p className="text-sm text-text-brown/60">{item.desc}</p>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    setNotifications((prev) => ({
                                                        ...prev,
                                                        [item.id]: !prev[item.id as keyof typeof notifications],
                                                    }))
                                                }
                                                className={`relative w-12 h-7 rounded-full transition-colors duration-300 cursor-pointer ${notifications[item.id as keyof typeof notifications] ? "bg-brand-pink" : "bg-gray-300"
                                                    }`}
                                            >
                                                <div
                                                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${notifications[item.id as keyof typeof notifications] ? "translate-x-5" : ""
                                                        }`}
                                                />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </SoftCard>
                        </div>
                    )}

                    {activeTab === "appearance" && (
                        <div className="max-w-2xl space-y-6">
                            <SoftCard>
                                <h2 className="text-lg font-bold text-text-brown mb-6 flex items-center gap-2">
                                    <Palette className="w-5 h-5 text-brand-pink" />
                                    Theme Settings
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {["light", "dark"].map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setTheme(t)}
                                            className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${theme === t ? "border-brand-pink bg-pink-50" : "border-pink-100 hover:border-pink-200"
                                                }`}
                                        >
                                            <div className={`w-full h-24 rounded-lg mb-3 ${t === "light" ? "bg-white" : "bg-gray-800"}`}>
                                                <div className="w-full h-4 bg-brand-pink opacity-20 rounded-t-lg mb-2" />
                                                <div className="px-2 space-y-2">
                                                    <div
                                                        className={`w-3/4 h-2 rounded ${t === "light" ? "bg-gray-200" : "bg-gray-700"}`}
                                                    />
                                                    <div
                                                        className={`w-1/2 h-2 rounded ${t === "light" ? "bg-gray-200" : "bg-gray-700"}`}
                                                    />
                                                </div>
                                            </div>
                                            <p className="font-semibold text-text-brown capitalize">{t} Mode</p>
                                        </button>
                                    ))}
                                </div>
                            </SoftCard>

                            <SoftCard>
                                <h2 className="text-lg font-bold text-text-brown mb-6 flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-brand-pink" />
                                    Regional Settings
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-text-brown mb-2">Timezone</label>
                                        <select className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-brand-pink focus:outline-none transition-colors bg-white">
                                            <option>Pacific Time (PT)</option>
                                            <option>Eastern Time (ET)</option>
                                            <option value="Universal Time (UTC)">Universal Time (UTC)</option>
                                        </select>
                                    </div>
                                </div>
                            </SoftCard>

                            <div className="flex justify-end">
                                <button className="px-6 py-3 bg-brand-pink text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-pink-300/30 cursor-pointer">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    )
}
