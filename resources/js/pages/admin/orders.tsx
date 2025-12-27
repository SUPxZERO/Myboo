import { SoftCard } from "@/components/ui/soft-card"
import AdminLayout from "@/layouts/admin-layout"
import {
    CheckCircle,
    Clock,
    Package,
    Search,
    Truck,
    X,
} from "lucide-react"
import { useState } from "react"

type OrderStatus = "new" | "preparing" | "ready" | "completed"

interface OrderItem {
    name: string
    flavor?: string
    quantity: number
}

interface Order {
    id: string
    customer: string
    items: OrderItem[]
    time: string
    status: OrderStatus
    address: string
    phone: string
    total: number
}

const flavorColors: Record<string, { bg: string; text: string; border: string }> = {
    Strawberry: { bg: "bg-red-100", text: "text-red-700", border: "border-red-300" },
    Mango: { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-300" },
    Matcha: { bg: "bg-green-100", text: "text-green-700", border: "border-green-300" },
    Oreo: { bg: "bg-gray-800", text: "text-white", border: "border-gray-900" },
    Classic: { bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-300" },
    Blueberry: { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-300" },
}

export default function OrdersPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [filterStatus, setFilterStatus] = useState<OrderStatus | "all">("all")
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

    const [orders, setOrders] = useState<Order[]>([
        {
            id: "#1234",
            customer: "Sarah Kim",
            items: [{ name: "Tiramisu", flavor: "Strawberry", quantity: 2 }],
            time: "5 mins ago",
            status: "new",
            address: "123 Sweet St, Dessert City",
            phone: "(555) 123-4567",
            total: 32.0,
        },
        {
            id: "#1233",
            customer: "Mike Chen",
            items: [
                { name: "Tiramisu", flavor: "Matcha", quantity: 1 },
                { name: "Tiramisu", flavor: "Mango", quantity: 1 },
            ],
            time: "12 mins ago",
            status: "preparing",
            address: "456 Flavor Ave, Cake Town",
            phone: "(555) 234-5678",
            total: 30.0,
        },
        {
            id: "#1232",
            customer: "Emma Johnson",
            items: [{ name: "Tiramisu", flavor: "Classic", quantity: 1 }],
            time: "25 mins ago",
            status: "ready",
            address: "789 Bake Blvd, Pastry Park",
            phone: "(555) 345-6789",
            total: 15.0,
        },
        {
            id: "#1231",
            customer: "David Lee",
            items: [
                { name: "Tiramisu", flavor: "Oreo", quantity: 2 },
                { name: "Tiramisu", flavor: "Blueberry", quantity: 1 },
            ],
            time: "45 mins ago",
            status: "completed",
            address: "321 Chocolate Lane",
            phone: "(555) 456-7890",
            total: 45.0,
        },
    ])

    const statusConfig: Record<OrderStatus, { label: string; icon: any; color: string }> = {
        new: { label: "New Order", icon: Package, color: "bg-pink-500" },
        preparing: { label: "Preparing", icon: Clock, color: "bg-yellow-500" },
        ready: { label: "Ready", icon: CheckCircle, color: "bg-green-500" },
        completed: { label: "Completed", icon: Truck, color: "bg-gray-500" },
    }

    const filteredOrders = orders.filter((order) => {
        const matchesSearch =
            order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesStatus = filterStatus === "all" || order.status === filterStatus
        return matchesSearch && matchesStatus
    })

    const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
        setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
        if (selectedOrder?.id === orderId) {
            setSelectedOrder({ ...selectedOrder, status: newStatus })
        }
    }

    return (
        <AdminLayout title="Orders">
            <div className="space-y-6">
                {/* Header & Filters */}
                <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
                    <h1 className="text-2xl font-bold text-text-brown">Order Management</h1>

                    {/* Search and Filters */}
                    <div className="flex flex-1 max-w-2xl gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-brown/40" />
                            <input
                                type="text"
                                placeholder="Search by order # or customer name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-pink-200 focus:border-brand-pink focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="flex gap-2 bg-white rounded-full p-1 border-2 border-pink-200 overflow-x-auto">
                            {(["all", "new", "preparing", "ready", "completed"] as const).map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setFilterStatus(status)}
                                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${filterStatus === status
                                        ? "bg-brand-pink text-white shadow-md shadow-pink-300/30"
                                        : "bg-transparent text-text-brown hover:bg-pink-50"
                                        }`}
                                >
                                    {status === "all" ? "All" : statusConfig[status].label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Orders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredOrders.map((order) => {
                        const StatusIcon = statusConfig[order.status].icon
                        return (
                            <SoftCard
                                key={order.id}
                                className="cursor-pointer hover:shadow-xl transition-shadow"
                                onClick={() => setSelectedOrder(order)}
                            >
                                {/* Order Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full ${statusConfig[order.status].color}`}></div>
                                        <div>
                                            <h3 className="font-bold text-text-brown">{order.id}</h3>
                                            <p className="text-xs text-text-brown/60">{order.time}</p>
                                        </div>
                                    </div>
                                    <StatusIcon className="w-5 h-5 text-text-brown/60" />
                                </div>

                                {/* Customer */}
                                <p className="text-sm font-semibold text-text-brown mb-3">{order.customer}</p>

                                {/* Items with Flavor Tags */}
                                <div className="space-y-2 mb-4">
                                    {order.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-text-brown">{item.name}</span>
                                                {item.flavor && (
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs font-semibold border ${flavorColors[item.flavor].bg
                                                            } ${flavorColors[item.flavor].text} ${flavorColors[item.flavor].border}`}
                                                    >
                                                        {item.flavor}
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-sm text-text-brown/60">x{item.quantity}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Total */}
                                <div className="pt-3 border-t border-pink-200">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-text-brown">Total</span>
                                        <span className="text-lg font-bold text-brand-pink">${order.total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </SoftCard>
                        )
                    })}
                </div>
            </div>

            {/* Order Detail Modal */}
            {selectedOrder && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-8 z-50">
                    <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-text-brown">Order Details {selectedOrder.id}</h2>
                            <button
                                onClick={() => setSelectedOrder(null)}
                                className="p-2 hover:bg-pink-100 rounded-full transition-colors cursor-pointer"
                            >
                                <X className="w-6 h-6 text-text-brown" />
                            </button>
                        </div>

                        {/* Customer Info */}
                        <SoftCard className="mb-6">
                            <h3 className="font-bold text-text-brown mb-3">Customer Information</h3>
                            <div className="space-y-2 text-sm">
                                <p>
                                    <span className="font-semibold">Name:</span> {selectedOrder.customer}
                                </p>
                                <p>
                                    <span className="font-semibold">Phone:</span> {selectedOrder.phone}
                                </p>
                                <p>
                                    <span className="font-semibold">Address:</span> {selectedOrder.address}
                                </p>
                            </div>
                        </SoftCard>

                        {/* Order Items */}
                        <SoftCard className="mb-6">
                            <h3 className="font-bold text-text-brown mb-3">Order Items</h3>
                            <div className="space-y-3">
                                {selectedOrder.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-xl">
                                        <div className="flex items-center gap-3">
                                            <span className="font-medium text-text-brown">{item.name}</span>
                                            {item.flavor && (
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${flavorColors[item.flavor].bg
                                                        } ${flavorColors[item.flavor].text} ${flavorColors[item.flavor].border}`}
                                                >
                                                    {item.flavor}
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-text-brown/60">x{item.quantity}</span>
                                    </div>
                                ))}
                            </div>
                        </SoftCard>

                        {/* Status Update Buttons */}
                        <div className="space-y-3">
                            <h3 className="font-bold text-text-brown mb-3">Update Status</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {(["new", "preparing", "ready", "completed"] as OrderStatus[]).map((status) => {
                                    const StatusIcon = statusConfig[status].icon
                                    const isCurrentStatus = selectedOrder.status === status
                                    return (
                                        <button
                                            key={status}
                                            onClick={() => updateOrderStatus(selectedOrder.id, status)}
                                            disabled={isCurrentStatus}
                                            className={`flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm transition-all cursor-pointer ${isCurrentStatus
                                                ? "bg-brand-pink text-white shadow-lg shadow-pink-300/30"
                                                : "bg-pink-100 text-text-brown hover:bg-pink-200"
                                                }`}
                                        >
                                            <StatusIcon className="w-5 h-5" />
                                            {statusConfig[status].label}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    )
}
