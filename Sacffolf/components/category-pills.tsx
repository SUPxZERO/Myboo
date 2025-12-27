"use client"

import { useState } from "react"

const categories = [
  { id: "all", label: "All", emoji: "✨" },
  { id: "tiramisu", label: "Tiramisu", emoji: "🍰" },
  { id: "coffee", label: "Coffee", emoji: "☕" },
  { id: "refreshers", label: "Refreshers", emoji: "🍓" },
]

export function CategoryPills() {
  const [selected, setSelected] = useState("all")

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelected(category.id)}
          className={
            selected === category.id
              ? "flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap font-bold text-sm transition-all duration-300 bg-linear-to-r from-brand-pink to-rose-medium text-white shadow-lg shadow-brand-pink/40 scale-110 border border-white/30"
              : "flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap font-bold text-sm transition-all duration-300 bg-linear-to-r from-cream to-rose-light/40 text-text-brown hover:from-brand-pink/20 hover:to-rose-medium/20 hover:shadow-lg hover:scale-105 border border-brand-pink/10"
          }
        >
          <span className="text-lg animate-bounce-in">{category.emoji}</span>
          <span>{category.label}</span>
        </button>
      ))}
    </div>
  )
}
