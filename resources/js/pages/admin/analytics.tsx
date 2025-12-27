import { SoftCard } from "@/components/ui/soft-card"
import AdminLayout from "@/layouts/admin-layout"
import { Star } from "lucide-react"

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

export default function AnalyticsPage() {
    const maxRevenue = Math.max(...revenueData.map((d) => d.revenue))

    return (
        <AdminLayout title="Analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Sales Chart Mockup */}
                <SoftCard className="col-span-1 lg:col-span-2">
                    <h3 className="text-lg font-bold text-text-brown mb-6">Weekly Revenue</h3>
                    <div className="h-[300px] w-full flex items-end justify-between px-4 pb-4 border-b border-pink-200 relative">
                        {/* Y-axis grid lines Mock */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-4">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-full h-px bg-pink-100" />
                            ))}
                        </div>

                        {revenueData.map((data, index) => {
                            const heightPercentage = (data.revenue / maxRevenue) * 200
                            return (
                                <div key={index} className="flex flex-col items-center gap-2 z-10 w-full group">
                                    <div className="relative w-full px-2 h-[200px] flex items-end justify-center">
                                        <div
                                            className="w-full bg-brand-pink/60 rounded-t-lg group-hover:bg-brand-pink transition-all duration-300"
                                            style={{ height: `${heightPercentage}px` }}
                                        ></div>
                                        {/* Tooltip */}
                                        <div className="absolute -top-10 bg-text-brown text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                            ${data.revenue}
                                        </div>
                                    </div>
                                    <span className="text-sm text-text-brown/70 font-medium">{data.day}</span>
                                </div>
                            )
                        })}
                    </div>
                </SoftCard>

                {/* Best Sellers Pie Chart Mockup */}
                <SoftCard>
                    <h3 className="text-lg font-bold text-text-brown mb-6">Best Selling Flavors</h3>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-64 h-64 rounded-full relative bg-gray-100 overflow-hidden flex items-center justify-center">
                            {/* CSS Conic Gradient Pie Chart */}
                            <div
                                className="w-full h-full"
                                style={{
                                    background: `conic-gradient(
                ${bestSellers[0].color} 0% 25%,
                ${bestSellers[1].color} 25% 45%,
                ${bestSellers[2].color} 45% 62%,
                ${bestSellers[3].color} 62% 77%,
                ${bestSellers[4].color} 77% 89%,
                ${bestSellers[5].color} 89% 100%
              )`,
                                }}
                            />
                            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                                <span className="text-text-brown font-bold text-xl">Top 6</span>
                            </div>
                        </div>
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
                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {reviews.map((review) => (
                            <div key={review.id} className="p-4 bg-white rounded-2xl border border-pink-50">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <p className="font-semibold text-text-brown text-sm">{review.customer}</p>
                                        <div className="flex gap-1 mt-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
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
        </AdminLayout>
    )
}
