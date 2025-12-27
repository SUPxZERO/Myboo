"use client"

import { cn } from "@/lib/utils"

type FlavorType = "classic" | "strawberry" | "mango" | "matcha" | "oreo" | "berry"

interface Flavor {
  id: FlavorType
  name: string
  color: string
  icon: string
  gradient: string
}

const flavors: Flavor[] = [
  {
    id: "classic",
    name: "Classic",
    color: "bg-amber-800",
    icon: "☕",
    gradient: "from-amber-900 to-amber-700",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    color: "bg-pink-400",
    icon: "🍓",
    gradient: "from-pink-500 to-pink-300",
  },
  {
    id: "mango",
    name: "Mango",
    color: "bg-yellow-400",
    icon: "🥭",
    gradient: "from-yellow-500 to-yellow-300",
  },
  {
    id: "matcha",
    name: "Matcha",
    color: "bg-green-600",
    icon: "🍵",
    gradient: "from-green-700 to-green-500",
  },
  {
    id: "oreo",
    name: "Oreo",
    color: "bg-gray-800",
    icon: "🍪",
    gradient: "from-gray-900 to-gray-700",
  },
  {
    id: "berry",
    name: "Mixed Berry",
    color: "bg-red-500",
    icon: "🫐",
    gradient: "from-red-600 to-red-400",
  },
]

interface FlavorSelectorProps {
  availableFlavors: string[]
  selectedFlavor: string
  onFlavorChange: (flavor: string) => void
}

export function FlavorSelector({ availableFlavors, selectedFlavor, onFlavorChange }: FlavorSelectorProps) {
  const availableFlavorData = flavors.filter((f) => availableFlavors.includes(f.id))

  return (
    <div className="grid grid-cols-3 gap-3">
      {availableFlavorData.map((flavor) => {
        const isSelected = selectedFlavor === flavor.id

        return (
          <button
            key={flavor.id}
            onClick={() => onFlavorChange(flavor.id)}
            className={cn(
              "relative p-4 rounded-[20px] transition-all duration-300 hover:scale-105 active:scale-95 border-2",
              isSelected
                ? "bg-linear-to-br from-cream to-rose-light/50 shadow-[0_0_0_2px_transparent,0_12px_35px_rgba(255,105,180,0.3)] scale-110 border-brand-pink/60"
                : "bg-linear-to-br from-cream to-rose-light/30 shadow-md border-brand-pink/10 hover:border-brand-pink/40 hover:shadow-lg",
            )}
          >
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-300 bg-linear-to-br shadow-md border-2 border-white/50",
                  flavor.gradient,
                  isSelected && "animate-heart-beat scale-125",
                )}
              >
                {flavor.icon}
              </div>
              <span
                className={cn(
                  "text-xs font-bold transition-all duration-300 uppercase tracking-wider",
                  isSelected ? "text-brand-pink scale-110" : "text-text-brown/70 hover:text-brand-pink",
                )}
              >
                {flavor.name}
              </span>
            </div>

            {/* Sparkle effect when selected */}
            {isSelected && (
              <div className="absolute -top-1 -right-1 animate-sparkle">
                <span className="text-xl drop-shadow-lg">✨</span>
              </div>
            )}
          </button>
        )
      })}
    </div>
  )
}
