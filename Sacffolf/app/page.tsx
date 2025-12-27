import { BottomNav } from "@/components/bottom-nav"
import { HeroCarousel } from "@/components/hero-carousel"
import { CategoryPills } from "@/components/category-pills"
import { ProductCard } from "@/components/product-card"
import { Sparkles } from "lucide-react"
import Image from "next/image"

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

export default function HomePage() {
  return (
    <div className="min-h-screen pb-32 bg-gradient-to-b from-bg-primary via-rose-light to-bg-primary">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-bg-primary to-rose-light/50 backdrop-blur-lg border-b border-brand-pink/20 shadow-[0_8px_32px_rgba(255,105,180,0.1)]">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <div className="w-10 text-2xl animate-float">✨</div>
          <div className="flex items-center gap-2 animate-bounce-in">
            <Image
              src="/images/515058467-122138143442704889-4596321856528922397-n.jpg"
              alt="My Boo Logo"
              width={120}
              height={120}
              className="w-auto h-12 drop-shadow-lg"
            />
          </div>
          <button className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-pink/20 to-rose-medium/20 flex items-center justify-center hover:from-brand-pink/40 hover:to-rose-medium/40 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,105,180,0.4)]">
            <span className="text-2xl animate-wiggle">🌸</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 pt-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-black bg-gradient-to-r from-brand-pink via-rose-medium to-accent-purple bg-clip-text text-transparent flex items-center gap-3">
            Hi Boo! 💕
            <Sparkles className="w-8 h-8 text-accent-yellow animate-sparkle drop-shadow-lg" />
          </h1>
          <p className="text-lg font-medium bg-gradient-to-r from-text-brown to-rose-dark bg-clip-text text-transparent">What's your sweet craving today?</p>
        </div>

        <HeroCarousel />

        <CategoryPills />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black bg-gradient-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent flex items-center gap-2">
              🌟 Trending Now
            </h2>
            <button className="text-brand-pink text-sm font-bold hover:scale-110 hover:shadow-[0_0_15px_rgba(255,105,180,0.4)] transition-all duration-300 px-3 py-1 rounded-full bg-brand-pink/10 hover:bg-brand-pink/20">See all ✨</button>
          </div>

          <div className="grid grid-cols-2 gap-4">
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
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
