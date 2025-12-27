"use client"

import { useState } from "react"
import { ArrowLeft, Minus, Plus, Trash2, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { SoftCard } from "@/components/soft-card"
import { JellyButton } from "@/components/jelly-button"

type CartItem = {
  id: string
  name: string
  flavor: string
  flavorColor: string
  price: number
  quantity: number
  image: string
}

export default function CartPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Classic Tiramisu",
      flavor: "Original",
      flavorColor: "#8B4513",
      price: 45,
      quantity: 2,
      image: "/images/8b68f7a3-75f9-40b2-828f-c36de617f3f7.jpg",
    },
    {
      id: "2",
      name: "Matcha Tiramisu",
      flavor: "Matcha",
      flavorColor: "#90C674",
      price: 48,
      quantity: 1,
      image: "/images/fd251ee2-612c-40e6-ae6d-e287d7a5b216.jpg",
    },
  ])
  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = 15
  const total = subtotal + delivery

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pb-32 bg-linear-to-b from-bg-primary via-rose-light to-bg-primary">
        <header className="sticky top-0 z-40 bg-linear-to-r from-bg-primary to-rose-light/50 backdrop-blur-lg px-6 py-4 border-b border-brand-pink/20 shadow-[0_8px_32px_rgba(255,105,180,0.1)]">
          <div className="flex items-center justify-between">
            <button onClick={() => router.back()} className="p-2 hover:bg-brand-pink/20 hover:scale-110 rounded-full transition-all duration-300">
              <ArrowLeft className="w-6 h-6 text-brand-pink" />
            </button>
            <h1 className="text-2xl font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent">My Cart 🛍️</h1>
            <div className="w-10" />
          </div>
        </header>

        <div className="flex flex-col items-center justify-center px-6 pt-24">
          <div className="w-48 h-48 relative mb-6">
            <div className="absolute inset-0 bg-linear-to-br from-brand-pink/20 via-rose-light/30 to-accent-purple/10 rounded-full animate-pulse" />
            <div className="absolute inset-8 bg-linear-to-br from-cream to-rose-light/30 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(255,105,180,0.2)]">
              <span className="text-7xl animate-float">🍩</span>
            </div>
          </div>
          <h2 className="text-2xl font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent mb-3 text-center">Your cart is feeling lonely...</h2>
          <p className="text-text-brown/70 text-center mb-8 font-medium">Add some sweet treats to make it happy! 💕</p>
          <JellyButton onClick={() => router.push("/menu")} className="px-8 bg-linear-to-r from-brand-pink to-rose-medium hover:shadow-[0_10px_30px_rgba(255,105,180,0.3)]">
            Browse Menu ✨
          </JellyButton>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-32 bg-linear-to-b from-bg-primary via-rose-light to-bg-primary">
      <header className="sticky top-0 z-40 bg-linear-to-r from-bg-primary to-rose-light/50 backdrop-blur-lg px-6 py-4 border-b border-brand-pink/20 shadow-[0_8px_32px_rgba(255,105,180,0.1)]">
        <div className="flex items-center justify-between">
          <button onClick={() => router.back()} className="p-2 hover:bg-brand-pink/20 hover:scale-110 rounded-full transition-all duration-300">
            <ArrowLeft className="w-6 h-6 text-brand-pink" />
          </button>
          <h1 className="text-2xl font-black bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent">My Cart 🛍️</h1>
          <div className="w-10" />
        </div>
      </header>

      <div className="px-6 py-6 space-y-4">
        {cartItems.map((item) => (
          <SoftCard key={item.id} className="p-4">
            <div className="flex gap-4">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-text-brown mb-1 truncate">{item.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.flavorColor }} />
                  <span className="text-sm text-text-brown/60">{item.flavor}</span>
                </div>
                <p className="text-lg font-bold text-brand-pink">฿{item.price}</p>
              </div>

              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1.5 hover:bg-red-50 rounded-full transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>

                <div className="flex items-center gap-2 bg-white rounded-full p-1">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-7 h-7 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors flex items-center justify-center"
                  >
                    <Minus className="w-3.5 h-3.5 text-brand-pink" />
                  </button>
                  <span className="w-6 text-center font-semibold text-text-brown">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-7 h-7 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors flex items-center justify-center"
                  >
                    <Plus className="w-3.5 h-3.5 text-brand-pink" />
                  </button>
                </div>
              </div>
            </div>
          </SoftCard>
        ))}

        <SoftCard className="p-5 space-y-4">
          <h3 className="font-bold text-text-brown mb-3">Promo Code</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full border-2 border-pink-100 focus:border-brand-pink outline-none text-text-brown placeholder:text-text-brown/40"
            />
            <JellyButton className="px-6">Apply</JellyButton>
          </div>
        </SoftCard>

        <SoftCard className="p-5 space-y-3">
          <h3 className="font-bold text-text-brown mb-3">Order Summary</h3>
          <div className="flex justify-between text-text-brown/70">
            <span>Subtotal</span>
            <span>฿{subtotal}</span>
          </div>
          <div className="flex justify-between text-text-brown/70">
            <span>Delivery Fee</span>
            <span>฿{delivery}</span>
          </div>
          <div className="border-t-2 border-pink-100 pt-3 flex justify-between text-lg font-bold text-text-brown">
            <span>Total</span>
            <span className="text-brand-pink">฿{total}</span>
          </div>
        </SoftCard>
      </div>

      <div className="fixed bottom-24 left-0 right-0 px-6 pb-4 bg-linear-to-t from-bg-primary via-bg-primary to-transparent pt-8">
        <JellyButton
          onClick={() => {
            // Show sparkle animation
            alert("Order placed successfully! ✨")
          }}
          className="w-full py-4 text-lg shadow-[0_10px_30px_rgba(255,105,180,0.3)]"
        >
          <span className="flex items-center justify-center gap-2">
            Place Order
            <Sparkles className="w-5 h-5" />
          </span>
        </JellyButton>
      </div>
    </div>
  )
}
