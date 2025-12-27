import { CategoryPills } from "@/components/home/category-pills"
import { HeroCarousel } from "@/components/home/hero-carousel"
import { ProductCard } from "@/components/home/product-card"
import CustomerLayout from "@/layouts/customer-layout"
import { Link } from "@inertiajs/react"
import { Sparkles } from "lucide-react"

const trendingProducts = [
    {
        id: "1",
        name: "Classic Tiramisu",
        price: 8.99,
        image: "/images/8b68f7a3-75f9-40b2-828f-c36de617f3f7.jpg",
        flavorColor: "bg-flavor-classic",
    },
    {
        id: "2",
        name: "Strawberry Dream",
        price: 9.99,
        image: "/images/5e9293d9-9e2c-496a-b2d7-424673cfb692.jpg",
        flavorColor: "bg-flavor-strawberry",
    },
    {
        id: "3",
        name: "Matcha Heaven",
        price: 9.99,
        image: "/images/fd251ee2-612c-40e6-ae6d-e287d7a5b216.jpg",
        flavorColor: "bg-flavor-matcha",
    },
    {
        id: "4",
        name: "Mango Paradise",
        price: 9.99,
        image: "/images/403fe48a-a37e-4998-94f7-c7103b6f6eae.jpg",
        flavorColor: "bg-flavor-mango",
    },
    {
        id: "5",
        name: "Mixed Berry Bliss",
        price: 10.99,
        image: "/images/6f57e086-cede-4145-bfa0-96dfb93f4c6b.jpg",
        flavorColor: "bg-flavor-berry",
    },
    {
        id: "6",
        name: "Oreo Delight",
        price: 9.99,
        image: "/images/c617bd34-424d-4161-89aa-e66885e2ed1d.jpg",
        flavorColor: "bg-flavor-classic",
    },
]

export default function Dashboard() {
    return (
        <CustomerLayout title="My Boo ✨">
            {/* Greeting - Matches reference */}
            <div className="space-y-1 text-center lg:text-left max-w-5xl mx-auto w-full pt-2">
                <h1 className="text-3xl lg:text-5xl font-bold text-text-brown flex items-center justify-center lg:justify-start gap-2">
                    Hi Boo!
                    <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-accent-yellow animate-sparkle" />
                </h1>
                <p className="text-text-brown/60 text-lg lg:text-xl">What's your craving today?</p>
            </div>

            <HeroCarousel />

            <div className="max-w-5xl mx-auto w-full space-y-8">
                <CategoryPills />

                {/* Trending Section */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl lg:text-3xl font-bold text-text-brown">
                            Trending Now
                        </h2>
                        <button className="text-brand-pink text-sm lg:text-base font-semibold hover:underline cursor-pointer">
                            See all
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-8">
                        {trendingProducts.map((product) => (
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
                </div>
            </div>
        </CustomerLayout>
    )
}
