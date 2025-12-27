"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
  id?: string
  name: string
  price: number
  image: string
  flavorColor?: string
}

export function ProductCard({ id, name, price, image, flavorColor }: ProductCardProps) {
  const cardContent = (
    <div className="bg-linear-to-br from-cream via-cream to-rose-light/40 rounded-[25px] overflow-hidden shadow-[0_10px_35px_rgba(255,105,180,0.18)] hover:shadow-[0_15px_50px_rgba(255,105,180,0.28)] hover:translate-y-[-4px] transition-all duration-300 border border-brand-pink/15 hover:border-brand-pink/40 hover:scale-105">
      {/* Image Container */}
      <div className="relative aspect-square bg-linear-to-br from-brand-pink/12 via-rose-light/10 to-accent-yellow/12 p-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-2xl hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {flavorColor && <div className={`w-3 h-3 rounded-full shadow-sm ${flavorColor}`} />}
              <h3 className="font-bold text-text-brown leading-tight text-sm">{name}</h3>
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-accent-yellow text-xs animate-sparkle" style={{ animationDelay: `${i * 0.1}s` }}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold bg-linear-to-r from-brand-pink to-rose-medium bg-clip-text text-transparent">${price.toFixed(2)}</p>
          <button
            className="w-10 h-10 bg-linear-to-br from-brand-pink to-rose-medium rounded-full flex items-center justify-center text-white hover:scale-125 hover:shadow-[0_8px_25px_rgba(255,105,180,0.4)] active:scale-95 transition-all duration-300 shadow-lg border border-white/30"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )

  if (id) {
    return <Link href={`/product/${id}`}>{cardContent}</Link>
  }

  return cardContent
}
