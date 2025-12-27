"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
    <div className="relative overflow-hidden rounded-[35px] bg-linear-to-br from-cream via-cream to-rose-light/40 shadow-[0_15px_50px_rgba(255,105,180,0.25)] border border-brand-pink/20">
      <div className="relative h-[240px] w-full">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative h-full w-full flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-linear-to-br from-brand-pink/12 via-transparent to-accent-yellow/12" />
              <div className="relative flex items-center gap-6 animate-bounce-in">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="w-32 h-32 object-cover rounded-3xl shadow-lg border-2 border-white hover:scale-110 transition-transform"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-black bg-linear-to-r from-text-brown to-rose-dark bg-clip-text text-transparent">{item.title}</h3>
                  <p className="text-text-brown/80 font-semibold text-sm">{item.description}</p>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-accent-yellow text-sm animate-sparkle" style={{ animationDelay: `${i * 0.1}s` }}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-linear-to-br from-brand-pink/80 to-rose-medium/80 rounded-full flex items-center justify-center shadow-lg hover:from-brand-pink hover:to-rose-medium hover:scale-110 transition-all duration-300 border border-white/30"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-linear-to-br from-brand-pink/80 to-rose-medium/80 rounded-full flex items-center justify-center shadow-lg hover:from-brand-pink hover:to-rose-medium hover:scale-110 transition-all duration-300 border border-white/30"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-linear-to-r from-brand-pink to-rose-medium w-6 h-2 shadow-lg" : "bg-brand-pink/40 hover:bg-brand-pink/60 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
