import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

interface CarouselItem {
    id: string
    title: string
    image: string
    description: string
}

const carouselItems: CarouselItem[] = [
    {
        id: "1",
        title: "Classic Tiramisu",
        image: "/images/8b68f7a3-75f9-40b2-828f-c36de617f3f7.jpg",
        description: "Rich chocolate layers",
    },
    {
        id: "2",
        title: "Strawberry Dream",
        image: "/images/5e9293d9-9e2c-496a-b2d7-424673cfb692.jpg",
        description: "Fresh strawberry bliss",
    },
    {
        id: "3",
        title: "Mango Paradise",
        image: "/images/403fe48a-a37e-4998-94f7-c7103b6f6eae.jpg",
        description: "Tropical sunshine",
    },
]

export function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
        }, 4000)

        return () => clearInterval(timer)
    }, [])

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    }

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
    }

    return (
        <div className="relative overflow-hidden rounded-3xl bg-cream shadow-sm border border-brand-pink/10 w-full max-w-5xl mx-auto">
            <div className="relative h-56 md:h-80 w-full">
                {carouselItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`absolute inset-0 transition-all duration-500 ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                    >
                        <div className="relative h-full w-full flex items-center p-5 md:p-10 gap-5 md:gap-10 justify-center">
                            {/* Product Image */}
                            <div className="w-36 h-36 md:w-60 md:h-60 shrink-0 rounded-2xl overflow-hidden shadow-md">
                                <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Product Info */}
                            <div className="flex-1 space-y-2 md:space-y-4 max-w-md">
                                <h3 className="text-xl md:text-4xl font-bold text-text-brown">{item.title}</h3>
                                <p className="text-text-brown/60 text-sm md:text-xl">{item.description}</p>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i} className="text-accent-yellow text-sm md:text-lg">★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={goToPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
                <ChevronLeft className="w-5 h-5 text-text-brown/60" />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
                <ChevronRight className="w-5 h-5 text-text-brown/60" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? "bg-brand-pink w-5 h-2" : "bg-brand-pink/30 w-2 h-2"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
