import { ProductCard } from "@/components/home/product-card"
import { SoftCard } from "@/components/ui/soft-card"
import CustomerLayout from "@/layouts/customer-layout"
import { Search, SlidersHorizontal } from "lucide-react"

const products = [
    {
        id: "1",
        name: "Classic Tiramisu",
        category: "tiramisu",
        price: 8.99,
        image: "/images/8b68f7a3-75f9-40b2-828f-c36de617f3f7.jpg",
        flavorColor: "bg-amber-800",
    },
    {
        id: "2",
        name: "Strawberry Bliss",
        category: "tiramisu",
        price: 9.99,
        image: "/images/5e9293d9-9e2c-496a-b2d7-424673cfb692.jpg",
        flavorColor: "bg-pink-400",
    },
    {
        id: "4",
        name: "Mango Paradise",
        category: "tiramisu",
        price: 9.99,
        image: "/images/403fe48a-a37e-4998-94f7-c7103b6f6eae.jpg",
        flavorColor: "bg-yellow-400",
    },
    {
        id: "3",
        name: "Matcha Dream",
        category: "tiramisu",
        price: 9.99,
        image: "/images/fd251ee2-612c-40e6-ae6d-e287d7a5b216.jpg",
        flavorColor: "bg-green-600",
    },
    {
        id: "5",
        name: "Mixed Berry Love",
        category: "tiramisu",
        price: 10.99,
        image: "/images/6f57e086-cede-4145-bfa0-96dfb93f4c6b.jpg",
        flavorColor: "bg-red-500",
    },
    {
        id: "6",
        name: "Oreo Heaven",
        category: "tiramisu",
        price: 9.99,
        image: "/images/c617bd34-424d-4161-89aa-e66885e2ed1d.jpg",
        flavorColor: "bg-gray-800",
    },
]

export default function MenuPage() {
    return (
        <CustomerLayout title="Menu ✨">
            {/* Header Section */}
            <div className="pt-2 pb-6">
                <h1 className="text-3xl font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent mb-4 flex items-center gap-2">
                    Full Menu ✨
                </h1>

                {/* Search Bar */}
                <div className="flex gap-3">
                    <div className="flex-1 bg-white rounded-full px-5 py-3 flex items-center gap-3 shadow-md border border-brand-pink/10">
                        <Search className="w-5 h-5 text-brand-pink/70" />
                        <input
                            type="text"
                            placeholder="Search for treats... 🔍"
                            className="flex-1 bg-transparent outline-none text-text-brown placeholder:text-text-brown/50 font-medium"
                        />
                    </div>
                    <button className="w-12 h-12 bg-linear-to-br from-brand-pink to-rose-medium rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer">
                        <SlidersHorizontal className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
                {/* Tiramisu Section */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent flex items-center gap-2">
                            Tiramisu Treasures
                            <span className="text-3xl animate-bounce-in">🍰</span>
                        </h2>
                        <span className="text-sm font-bold bg-brand-pink/10 px-3 py-1 rounded-full text-brand-pink">{products.length} items</span>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                flavorColor={product.flavorColor}
                            />
                        ))}
                    </div>
                </section>

                {/* Coming Soon Section */}
                <section>
                    <h2 className="text-2xl font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent mb-4 flex items-center gap-2">
                        Coffee & Drinks
                        <span className="text-3xl animate-float">☕</span>
                    </h2>

                    <SoftCard className="p-8 text-center">
                        <div className="text-6xl mb-3 animate-sparkle inline-block">✨</div>
                        <p className="text-xl font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent mb-2">Coming Soon!</p>
                        <p className="text-text-brown/70 text-sm font-semibold">We're brewing something special for you 💕</p>
                    </SoftCard>
                </section>
            </div>
        </CustomerLayout>
    )
}
