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
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => setSelected(category.id)}
                    className={
                        selected === category.id
                            ? "flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap font-semibold text-sm transition-all duration-200 bg-brand-pink text-white shadow-md cursor-pointer"
                            : "flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap font-semibold text-sm transition-all duration-200 bg-cream text-text-brown border border-brand-pink/20 hover:border-brand-pink/40 cursor-pointer"
                    }
                >
                    <span className="text-base">{category.emoji}</span>
                    <span>{category.label}</span>
                </button>
            ))}
        </div>
    )
}
