"use client"

import { useState } from "react"
import { SoftCard } from "@/components/soft-card"
import {
  Search,
  Mail,
  Phone,
  MapPin,
  Heart,
  ShoppingBag,
  TrendingUp,
  Filter,
  Calendar,
  Award,
  MessageCircle,
  DollarSign,
  LayoutDashboard,
  ClipboardList,
  Cake as Cupcake,
  Users,
  Settings,
} from "lucide-react"

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCustomer, setSelectedCustomer] = useState<number | null>(null)
  const [filterTier, setFilterTier] = useState<string>("All")
  const [sortBy, setSortBy] = useState<string>("recent")
  const [activeNav, setActiveNav] = useState("customers")

  const customers = [
    {
      id: 1,
      name: "Sarah Kim",
      email: "sarah.kim@email.com",
      phone: "+1 (555) 123-4567",
      address: "123 Sweet Street, Dessert District",
      avatar: "🍓",
      totalOrders: 24,
      totalSpent: 456.5,
      favoriteItems: ["Strawberry Tiramisu", "Mango Tiramisu"],
      lastOrder: "2 days ago",
      loyaltyTier: "Gold",
      recentOrders: [
        { id: "#1234", date: "2024-12-25", items: "Strawberry Tiramisu x2", total: 38.0 },
        { id: "#1198", date: "2024-12-20", items: "Mango Tiramisu x1", total: 19.0 },
        { id: "#1156", date: "2024-12-15", items: "Classic Tiramisu x3", total: 57.0 },
      ],
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      phone: "+1 (555) 234-5678",
      address: "456 Cocoa Avenue, Flavor Town",
      avatar: "🍵",
      totalOrders: 18,
      totalSpent: 342.0,
      favoriteItems: ["Matcha Tiramisu"],
      lastOrder: "1 week ago",
      loyaltyTier: "Silver",
      recentOrders: [
        { id: "#1233", date: "2024-12-20", items: "Matcha Tiramisu x1", total: 19.0 },
        { id: "#1187", date: "2024-12-12", items: "Matcha Tiramisu x2", total: 38.0 },
      ],
    },
    {
      id: 3,
      name: "Emma Johnson",
      email: "emma.j@email.com",
      phone: "+1 (555) 345-6789",
      address: "789 Vanilla Lane, Sweet City",
      avatar: "🍫",
      totalOrders: 32,
      totalSpent: 608.0,
      favoriteItems: ["Classic Tiramisu", "Oreo Tiramisu"],
      lastOrder: "3 days ago",
      loyaltyTier: "Platinum",
      recentOrders: [
        { id: "#1232", date: "2024-12-24", items: "Classic Tiramisu x1", total: 19.0 },
        { id: "#1210", date: "2024-12-18", items: "Oreo Tiramisu x2", total: 38.0 },
        { id: "#1189", date: "2024-12-10", items: "Classic Tiramisu x4", total: 76.0 },
      ],
    },
  ]

  const filteredCustomers = customers
    .filter(
      (customer) =>
        (customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterTier === "All" || customer.loyaltyTier === filterTier),
    )
    .sort((a, b) => {
      if (sortBy === "spent") return b.totalSpent - a.totalSpent
      if (sortBy === "orders") return b.totalOrders - a.totalOrders
      if (sortBy === "name") return a.name.localeCompare(b.name)
      return 0
    })

  const selectedCustomerData = customers.find((c) => c.id === selectedCustomer)

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Platinum":
        return "from-purple-400 to-purple-600"
      case "Gold":
        return "from-yellow-400 to-yellow-600"
      case "Silver":
        return "from-gray-400 to-gray-600"
      default:
        return "from-pink-400 to-pink-600"
    }
  }

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { id: "orders", label: "Orders", icon: ClipboardList, href: "/admin/orders" },
    { id: "menu", label: "Menu Management", icon: Cupcake, href: "/admin/menu" },
    { id: "analytics", label: "Analytics", icon: TrendingUp, href: "/admin/analytics" },
    { id: "customers", label: "Customers", icon: Users, href: "/admin/customers" },
    { id: "settings", label: "Settings", icon: Settings, href: "/admin/settings" },
  ]

  return (
    <div className="flex h-screen overflow-hidden bg-bg-primary">
      <aside className="w-64 bg-[#FFF0F5] border-r border-pink-200 flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <a href="/admin" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center">
                <Cupcake className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-text-brown text-lg">My Boo</h2>
                <p className="text-xs text-text-brown/60">Admin Panel</p>
              </div>
            </a>
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

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-pink-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-text-brown">Customer Management</h1>
              <p className="text-sm text-text-brown/60">
                {filteredCustomers.length} {filteredCustomers.length === 1 ? "customer" : "customers"} found
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-purple-100 rounded-xl">
                <p className="text-xs text-text-brown/60">Platinum</p>
                <p className="text-lg font-bold text-text-brown">
                  {customers.filter((c) => c.loyaltyTier === "Platinum").length}
                </p>
              </div>
              <div className="px-4 py-2 bg-yellow-100 rounded-xl">
                <p className="text-xs text-text-brown/60">Gold</p>
                <p className="text-lg font-bold text-text-brown">
                  {customers.filter((c) => c.loyaltyTier === "Gold").length}
                </p>
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded-xl">
                <p className="text-xs text-text-brown/60">Silver</p>
                <p className="text-lg font-bold text-text-brown">
                  {customers.filter((c) => c.loyaltyTier === "Silver").length}
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <SoftCard className="mb-4">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-brown/40" />
                  <input
                    type="text"
                    placeholder="Search customers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border-2 border-pink-100 focus:border-brand-pink focus:outline-none text-text-brown"
                  />
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-text-brown mb-2">
                      <Filter className="w-4 h-4" />
                      Loyalty Tier
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["All", "Platinum", "Gold", "Silver"].map((tier) => (
                        <button
                          key={tier}
                          onClick={() => setFilterTier(tier)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                            filterTier === tier
                              ? "bg-brand-pink text-white"
                              : "bg-pink-100 text-text-brown hover:bg-pink-200"
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-text-brown mb-2">
                      <TrendingUp className="w-4 h-4" />
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 bg-white rounded-xl border-2 border-pink-100 focus:border-brand-pink focus:outline-none text-text-brown text-sm"
                    >
                      <option value="recent">Recent Activity</option>
                      <option value="spent">Total Spent</option>
                      <option value="orders">Total Orders</option>
                      <option value="name">Name (A-Z)</option>
                    </select>
                  </div>
                </div>
              </SoftCard>

              <div className="space-y-3 max-h-[calc(100vh-400px)] overflow-y-auto">
                {filteredCustomers.map((customer) => (
                  <SoftCard
                    key={customer.id}
                    className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                      selectedCustomer === customer.id ? "ring-2 ring-brand-pink" : ""
                    }`}
                    onClick={() => setSelectedCustomer(customer.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                        {customer.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-text-brown truncate">{customer.name}</h3>
                        <p className="text-xs text-text-brown/60 truncate">{customer.email}</p>
                        <p className="text-xs text-text-brown/40">Last: {customer.lastOrder}</p>
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full bg-gradient-to-r ${getTierColor(customer.loyaltyTier)} text-white text-xs font-semibold whitespace-nowrap`}
                      >
                        {customer.loyaltyTier}
                      </div>
                    </div>
                  </SoftCard>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              {selectedCustomerData ? (
                <div className="space-y-6">
                  <SoftCard>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-4xl">
                          {selectedCustomerData.avatar}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-text-brown mb-1">{selectedCustomerData.name}</h2>
                          <div
                            className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${getTierColor(selectedCustomerData.loyaltyTier)} text-white text-sm font-semibold`}
                          >
                            <Award className="w-4 h-4 inline mr-1" />
                            {selectedCustomerData.loyaltyTier} Member
                          </div>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-brand-pink text-white rounded-xl hover:bg-pink-600 transition-all duration-300 flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Contact
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl">
                        <Mail className="w-5 h-5 text-brand-pink" />
                        <div>
                          <p className="text-xs text-text-brown/60">Email</p>
                          <p className="text-sm font-medium text-text-brown">{selectedCustomerData.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl">
                        <Phone className="w-5 h-5 text-brand-pink" />
                        <div>
                          <p className="text-xs text-text-brown/60">Phone</p>
                          <p className="text-sm font-medium text-text-brown">{selectedCustomerData.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-xl mb-4">
                      <MapPin className="w-5 h-5 text-brand-pink mt-0.5" />
                      <div>
                        <p className="text-xs text-text-brown/60">Delivery Address</p>
                        <p className="text-sm font-medium text-text-brown">{selectedCustomerData.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-text-brown/60">
                      <Calendar className="w-4 h-4" />
                      Last order: {selectedCustomerData.lastOrder}
                    </div>
                  </SoftCard>

                  <div className="grid grid-cols-3 gap-4">
                    <SoftCard className="text-center hover:scale-105 transition-transform duration-300">
                      <ShoppingBag className="w-8 h-8 text-brand-pink mx-auto mb-2" />
                      <p className="text-2xl font-bold text-text-brown">{selectedCustomerData.totalOrders}</p>
                      <p className="text-xs text-text-brown/60">Total Orders</p>
                    </SoftCard>
                    <SoftCard className="text-center hover:scale-105 transition-transform duration-300">
                      <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-text-brown">
                        ${selectedCustomerData.totalSpent.toFixed(2)}
                      </p>
                      <p className="text-xs text-text-brown/60">Total Spent</p>
                      <p className="text-xs text-text-brown/40 mt-1">
                        Avg: ${(selectedCustomerData.totalSpent / selectedCustomerData.totalOrders).toFixed(2)}
                      </p>
                    </SoftCard>
                    <SoftCard className="text-center hover:scale-105 transition-transform duration-300">
                      <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-text-brown">{selectedCustomerData.favoriteItems.length}</p>
                      <p className="text-xs text-text-brown/60">Favorites</p>
                    </SoftCard>
                  </div>

                  <SoftCard>
                    <h3 className="text-lg font-bold text-text-brown mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-brand-pink" />
                      Favorite Items
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCustomerData.favoriteItems.map((item) => (
                        <div
                          key={item}
                          className="px-4 py-2 bg-pink-100 rounded-full text-sm font-medium text-text-brown hover:bg-pink-200 transition-colors duration-300"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </SoftCard>

                  <SoftCard>
                    <h3 className="text-lg font-bold text-text-brown mb-4 flex items-center gap-2">
                      <ClipboardList className="w-5 h-5 text-brand-pink" />
                      Order History
                    </h3>
                    <div className="space-y-3">
                      {selectedCustomerData.recentOrders.map((order) => (
                        <div
                          key={order.id}
                          className="flex items-center justify-between p-4 bg-white rounded-xl hover:bg-pink-50 transition-colors duration-300 cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                              <ShoppingBag className="w-5 h-5 text-brand-pink" />
                            </div>
                            <div>
                              <p className="font-semibold text-text-brown">{order.id}</p>
                              <p className="text-sm text-text-brown/60">{order.items}</p>
                              <p className="text-xs text-text-brown/40 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {order.date}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-text-brown">${order.total.toFixed(2)}</p>
                            <button className="text-xs text-brand-pink hover:underline mt-1">View Details</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SoftCard>
                </div>
              ) : (
                <SoftCard className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👥</div>
                    <p className="text-lg font-semibold text-text-brown mb-2">Select a Customer</p>
                    <p className="text-sm text-text-brown/60">Choose a customer from the list to view their details</p>
                  </div>
                </SoftCard>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
