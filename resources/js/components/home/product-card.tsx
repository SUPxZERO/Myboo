import { Link } from "@inertiajs/react"
import { Plus } from "lucide-react"

interface ProductCardProps {
    id?: string
    name: string
    price: number
    image: string
    flavorColor?: string
}

export function ProductCard({ id, name, price, image, flavorColor }: ProductCardProps) {
    const cardContent = (
        <div className="bg-cream rounded-2xl overflow-hidden shadow-sm border border-brand-pink/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            {/* Image Container */}
            <div className="relative aspect-square p-3 bg-rose-light/30">
                <img
                    src={image || "/placeholder.svg"}
                    alt={name}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>

            {/* Product Info */}
            <div className="p-3 space-y-2">
                <div className="flex items-center gap-1.5">
                    {flavorColor && <div className={`w-2.5 h-2.5 rounded-full ${flavorColor}`} />}
                    <h3 className="font-semibold text-text-brown text-sm leading-tight truncate">{name}</h3>
                </div>
                <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-accent-yellow text-xs">★</span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                    <p className="text-base font-bold text-brand-pink">${price.toFixed(2)}</p>
                    <button
                        className="w-8 h-8 bg-brand-pink rounded-full flex items-center justify-center text-white hover:bg-rose-medium transition-colors shadow-sm cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                    >
                        <Plus className="w-4 h-4" />
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
