"use client"

import { useState } from "react"
import { SoftCard } from "@/components/soft-card"
import { ClipboardList, LayoutDashboard, Cake as Cupcake, Users, Settings, Bell, Star } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

export default function AnalyticsPage() {
  const [activeNav, setActiveNav] = useState("analytics")

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
    { id: "customers", label: "Customers", icon: Users, href: "/admin/customers" },
    { id: "settings", label: "Settings", icon: Settings, href: "/admin/settings" },
  ]

  // Weekly revenue data
  const revenueData = [
    { day: "Mon", revenue: 1240 },
    { day: "Tue", revenue: 1580 },
    { day: "Wed", revenue: 1320 },
    { day: "Thu", revenue: 1890 },
    { day: "Fri", revenue: 2150 },
    { day: "Sat", revenue: 2680 },
    { day: "Sun", revenue: 2340 },
  ]

  // Best selling flavors
  const bestSellers = [
    { name: "Strawberry", value: 285, color: "#FF6B8A" },
    { name: "Matcha", value: 220, color: "#8BC34A" },
    { name: "Classic", value: 195, color: "#8B4513" },
    { name: "Mango", value: 165, color: "#FFD93D" },
    { name: "Blueberry", value: 140, color: "#9575CD" },
    { name: "Oreo", value: 125, color: "#4A4A4A" },
  ]

  // Customer reviews
  const reviews = [
    {
      id: 1,
      customer: "Sarah Kim",
      rating: 5,
      comment: "The strawberry tiramisu is absolutely divine! Perfectly balanced sweetness and so fresh!",
      date: "2 days ago",
    },
    {
      id: 2,
      customer: "Mike Chen",
      rating: 5,
      comment: "Best matcha dessert I've ever had. The presentation is adorable too!",
      date: "3 days ago",
    },
    {
      id: 3,
      customer: "Emma Johnson",
      rating: 4,
      comment: "Love the classic tiramisu! Would love to see more seasonal flavors.",
      date: "5 days ago",
    },
    {
      id: 4,
      customer: "David Lee",
      rating: 5,
      comment: "The packaging is so cute and the taste is even better. Highly recommend!",
      date: "1 week ago",
    },
  ]

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#FF91A4",
    },
  }

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
            <h1 className="text-2xl font-bold text-text-brown">{getGreeting()}</h1>
            <p className="text-sm text-text-brown/60">Analytics and insights for your business</p>
          </div>
          <button className="relative p-3 rounded-full hover:bg-pink-50 transition-all duration-300 hover:animate-[wiggle_0.5s_ease-in-out]">
            <Bell className="w-6 h-6 text-text-brown" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-pink rounded-full"></span>
          </button>
        </header>

        {/* Analytics Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Sales Chart */}
            <SoftCard className="col-span-1 lg:col-span-2">
              <h3 className="text-lg font-bold text-text-brown mb-6">Weekly Revenue</h3>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <LineChart data={revenueData}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF91A4" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#FF91A4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#FFC0CB" opacity={0.3} />
                  <XAxis dataKey="day" stroke="#8B4513" fontSize={12} />
                  <YAxis stroke="#8B4513" fontSize={12} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#FF91A4"
                    strokeWidth={3}
                    fill="url(#revenueGradient)"
                    dot={{ fill: "#FF91A4", r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ChartContainer>
            </SoftCard>

            {/* Best Sellers Pie Chart */}
            <SoftCard>
              <h3 className="text-lg font-bold text-text-brown mb-6">Best Selling Flavors</h3>
              <div className="h-[300px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={bestSellers}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {bestSellers.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {bestSellers.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-text-brown">
                      {item.name}: <span className="font-semibold">{item.value}</span>
                    </span>
                  </div>
                ))}
              </div>
            </SoftCard>

            {/* Customer Feedback */}
            <SoftCard>
              <h3 className="text-lg font-bold text-text-brown mb-6">Recent Customer Reviews</h3>
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {reviews.map((review) => (
                  <div key={review.id} className="p-4 bg-white rounded-2xl">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-text-brown text-sm">{review.customer}</p>
                        <div className="flex gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-text-brown/50">{review.date}</span>
                    </div>
                    <p className="text-sm text-text-brown/70 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </SoftCard>
          </div>
        </main>
      </div>
    </div>
  )
}
