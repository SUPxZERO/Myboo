"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, Heart, Minus, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { JellyButton } from "@/components/jelly-button"
import { FlavorSelector } from "@/components/flavor-selector"
import { SoftCard } from "@/components/soft-card"

const products = [
  {
    id: "1",
    name: "Classic Tiramisu",
    description: "Rich layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
    price: 8.99,
    image: "/images/8b68f7a3-75f9-40b2-828f-c36de617f3f7.jpg",
    flavors: ["classic", "oreo"],
  },
  {
    id: "2",
    name: "Strawberry Dream",
    description: "Fresh strawberries layered with creamy mascarpone and delicate cake.",
    price: 9.99,
    image: "/images/5e9293d9-9e2c-496a-b2d7-424673cfb692.jpg",
    flavors: ["strawberry", "berry"],
  },
  {
    id: "3",
    name: "Matcha Heaven",
    description: "Premium Japanese matcha infused into every layer for authentic green tea flavor.",
    price: 9.99,
    image: "/images/fd251ee2-612c-40e6-ae6d-e287d7a5b216.jpg",
    flavors: ["matcha"],
  },
  {
    id: "4",
    name: "Mango Paradise",
    description: "Tropical mango puree and fresh fruit chunks create a sunny dessert experience.",
    price: 9.99,
    image: "/images/403fe48a-a37e-4998-94f7-c7103b6f6eae.jpg",
    flavors: ["mango"],
  },
]

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [selectedFlavor, setSelectedFlavor] = useState<string>("classic")
  const [isFavorite, setIsFavorite] = useState(false)

  const product = products.find((p) => p.id === params.id) || products[0]

  const handleAddToCart = () => {
    console.log("[v0] Adding to cart:", { product: product.name, flavor: selectedFlavor, quantity })
    // TODO: Implement cart logic
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-bg-primary via-rose-light to-bg-primary pb-32">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-linear-to-r from-bg-primary to-rose-light/50 backdrop-blur-lg border-b border-brand-pink/20 shadow-[0_8px_32px_rgba(255,105,180,0.1)]">
        <div className="px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 bg-linear-to-br from-cream to-rose-light rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg active:scale-95 transition-all duration-300 border border-brand-pink/20"
          >
            <ChevronLeft className="w-6 h-6 text-brand-pink" />
          </button>
          <h1 className="text-lg font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent">Product Details ✨</h1>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-10 h-10 bg-linear-to-br from-cream to-rose-light rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg active:scale-95 transition-all duration-300 border border-brand-pink/20"
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${isFavorite ? "fill-brand-pink text-brand-pink scale-125 animate-heart-beat" : "text-brand-pink/60 hover:text-brand-pink"}`}
            />
          </button>
        </div>
      </div>

      {/* Main Image */}
      <div className="px-6 py-6">
        <div className="relative aspect-square bg-linear-to-br from-brand-pink/15 via-rose-light/20 to-accent-yellow/15 rounded-[35px] overflow-hidden shadow-[0_15px_50px_rgba(255,105,180,0.25)] border border-brand-pink/20 animate-bounce-in">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </div>
      </div>

      {/* Product Info */}
      <div className="px-6 space-y-6">
        {/* Title & Price */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-3xl font-black bg-linear-to-r from-text-brown to-rose-dark bg-clip-text text-transparent flex-1">{product.name}</h2>
            <div className="text-3xl font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent">${product.price.toFixed(2)}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-accent-yellow text-lg animate-sparkle" style={{ animationDelay: `${i * 0.1}s` }}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-brand-pink/80 text-sm font-bold">(127 reviews)</span>
          </div>
        </div>

        {/* Description */}
        <SoftCard className="p-5 bg-linear-to-br from-cream to-rose-light/30 border border-brand-pink/10 shadow-[0_8px_25px_rgba(255,105,180,0.1)]">
          <h3 className="text-sm font-bold text-brand-pink mb-2 uppercase tracking-wide">About this treat</h3>
          <p className="text-text-brown/80 text-sm leading-relaxed font-medium">{product.description}</p>
        </SoftCard>

        {/* Flavor Selection */}
        <div>
          <h3 className="text-lg font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent mb-3">Choose Your Flavor 🎨</h3>
          <FlavorSelector
            availableFlavors={product.flavors}
            selectedFlavor={selectedFlavor}
            onFlavorChange={setSelectedFlavor}
          />
        </div>

        {/* Quantity Selector */}
        <div>
          <h3 className="text-lg font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent mb-3">Quantity 🎁</h3>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="w-12 h-12 bg-linear-to-br from-cream to-rose-light rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg active:scale-95 transition-all duration-300 shadow-md disabled:opacity-40 disabled:hover:scale-100 border border-brand-pink/20"
            >
              <Minus className="w-5 h-5 text-brand-pink" />
            </button>
            <div className="flex-1 text-center">
              <span className="text-3xl font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent">{quantity}</span>
            </div>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-12 h-12 bg-linear-to-br from-brand-pink to-rose-medium rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_10px_30px_rgba(255,105,180,0.4)] active:scale-95 transition-all duration-300 shadow-lg text-white border border-brand-pink/40"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-linear-to-t from-bg-primary via-bg-primary to-transparent pt-6 pb-8 px-6">
        <JellyButton onClick={handleAddToCart} size="lg" className="w-full text-lg bg-linear-to-r from-brand-pink to-rose-medium hover:shadow-[0_15px_40px_rgba(255,105,180,0.3)]">
          Add to Basket 💖 ✨
        </JellyButton>
      </div>
    </div>
  )
}
