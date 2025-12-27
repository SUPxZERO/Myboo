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
                            "relative p-4 rounded-[20px] transition-all duration-300 hover:scale-105 active:scale-95",
                            isSelected
                                ? "bg-cream shadow-[0_0_0_3px_rgb(255,105,180),0_8px_20px_rgba(255,105,180,0.3)] scale-105"
                                : "bg-cream shadow-md",
                        )}
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div
                                className={cn(
                                    "w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-300 bg-linear-to-br",
                                    flavor.gradient,
                                    isSelected && "animate-bounce-in",
                                )}
                            >
                                {flavor.icon}
                            </div>
                            <span
                                className={cn(
                                    "text-xs font-semibold transition-colors",
                                    isSelected ? "text-brand-pink" : "text-text-brown/70",
                                )}
                            >
                                {flavor.name}
                            </span>
                        </div>

                        {/* Sparkle effect when selected */}
                        {isSelected && (
                            <div className="absolute -top-1 -right-1">
                                <span className="text-xl animate-pulse">✨</span>
                            </div>
                        )}
                    </button>
                )
            })}
        </div>
    )
}
