import { SoftCard } from "@/components/ui/soft-card"
import AdminLayout from "@/layouts/admin-layout"
import {
    AlertTriangle,
    Package,
    ShoppingBag,
    TrendingUp,
} from "lucide-react"

export default function AdminDashboard() {
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
        <AdminLayout title="Dashboard">
            <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => {
                        const Icon = stat.icon
                        return (
                            <SoftCard key={stat.title} className="relative overflow-hidden">
                                <div className={`absolute inset-0 bg-linear-to-br ${stat.gradient} opacity-50`}></div>
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
                <SoftCard>
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
            </div>
        </AdminLayout>
    )
}
