"use client"

import { useState } from "react"
import { SoftCard } from "@/components/soft-card"
import {
  ClipboardList,
  LayoutDashboard,
  Cake as Cupcake,
  Users,
  Settings,
  TrendingUp,
  Package,
  ShoppingBag,
  AlertTriangle,
  Bell,
} from "lucide-react"

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard")

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

  const stats = [
    {
      title: "Total Orders Today",
      value: "24",
      icon: ShoppingBag,
      gradient: "from-pink-100 to-pink-50",
    },
    {
      title: "Revenue",
      value: "$1,248",
      icon: TrendingUp,
      gradient: "from-yellow-100 to-yellow-50",
    },
    {
      title: "Pending Deliveries",
      value: "8",
      icon: Package,
      gradient: "from-purple-100 to-purple-50",
    },
    {
      title: "Low Stock Items",
      value: "3",
      icon: AlertTriangle,
      gradient: "from-orange-100 to-orange-50",
    },
  ]

  return (
    <div className="flex h-screen overflow-hidden bg-bg-primary">
      {/* Sidebar */}
      <aside className="w-64 bg-[#FFF0F5] border-r border-pink-200 flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center">
              <Cupcake className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-text-brown text-lg">My Boo</h2>
              <p className="text-xs text-text-brown/60">Admin Panel</p>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeNav === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-brand-pink text-white shadow-lg shadow-pink-300/30"
                      : "text-text-brown hover:bg-pink-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{item.label}</span>
                </a>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-pink-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-text-brown">{getGreeting()} ☕</h1>
            <p className="text-sm text-text-brown/60">Here's what's happening with your store today</p>
          </div>
          <button className="relative p-3 rounded-full hover:bg-pink-50 transition-all duration-300 hover:animate-[wiggle_0.5s_ease-in-out]">
            <Bell className="w-6 h-6 text-text-brown" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-pink rounded-full"></span>
          </button>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <SoftCard key={stat.title} className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-50`}></div>
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <Icon className="w-6 h-6 text-brand-pink" />
                      </div>
                    </div>
                    <h3 className="text-sm font-medium text-text-brown/70 mb-1">{stat.title}</h3>
                    <p className="text-3xl font-bold text-text-brown">{stat.value}</p>
                  </div>
                </SoftCard>
              )
            })}
          </div>

          {/* Recent Activity */}
          <SoftCard className="mb-6">
            <h3 className="text-lg font-bold text-text-brown mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                {
                  order: "#1234",
                  customer: "Sarah Kim",
                  items: "Strawberry Tiramisu x2",
                  time: "5 mins ago",
                },
                {
                  order: "#1233",
                  customer: "Mike Chen",
                  items: "Matcha Tiramisu, Mango Tiramisu",
                  time: "12 mins ago",
                },
                {
                  order: "#1232",
                  customer: "Emma Johnson",
                  items: "Classic Tiramisu x1",
                  time: "25 mins ago",
                },
              ].map((activity) => (
                <div key={activity.order} className="flex items-center justify-between p-4 bg-white rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-brand-pink" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-brown text-sm">Order {activity.order}</p>
                      <p className="text-xs text-text-brown/60">
                        {activity.customer} • {activity.items}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-text-brown/50">{activity.time}</span>
                </div>
              ))}
            </div>
          </SoftCard>
        </main>
      </div>
    </div>
  )
}
