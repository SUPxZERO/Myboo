"use client"

import { useState } from "react"
import { SoftCard } from "@/components/soft-card"
import {
  ClipboardList,
  LayoutDashboard,
  Cake as Cupcake,
  Users,
  Settings,
  Plus,
  Edit,
  Trash2,
  Bell,
  X,
  TrendingUp,
  Search,
  Package,
  FolderOpen,
} from "lucide-react"
import Image from "next/image"

type Variant = {
  flavor: string
  price: number
  stock: number
  inStock: boolean
  color: string
  emoji: string
}

type Product = {
  id: number
  name: string
  description: string
  category: string
  image: string
  variants: Variant[]
  totalSold?: number
}

type Category = {
  id: string
  name: string
  emoji: string
  color: string
}

export default function AdminMenuPage() {
  const [activeNav, setActiveNav] = useState("menu")
  const [showAddModal, setShowAddModal] = useState(false)
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)

  const [categories, setCategories] = useState<Category[]>([
    { id: "tiramisu", name: "Tiramisu", emoji: "🍰", color: "#FFB6C1" },
    { id: "drinks", name: "Drinks", emoji: "🥤", color: "#87CEEB" },
    { id: "desserts", name: "Desserts", emoji: "🍮", color: "#FFDAB9" },
  ])

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Classic Tiramisu Box",
      description: "Our signature tiramisu with Italian mascarpone",
      category: "tiramisu",
      image: "/images/8b68f7a3-75f9-40b2-828f-c36de617f3f7.jpg",
      totalSold: 285,
      variants: [
        { flavor: "Strawberry", price: 12.99, stock: 15, inStock: true, color: "#FF6B8A", emoji: "🍓" },
        { flavor: "Mango", price: 12.99, stock: 8, inStock: true, color: "#FFD93D", emoji: "🥭" },
        { flavor: "Matcha", price: 13.99, stock: 12, inStock: true, color: "#8BC34A", emoji: "🍵" },
        { flavor: "Oreo", price: 13.99, stock: 5, inStock: true, color: "#4A4A4A", emoji: "🍪" },
        { flavor: "Classic", price: 11.99, stock: 20, inStock: true, color: "#8B4513", emoji: "☕" },
        { flavor: "Blueberry", price: 12.99, stock: 2, inStock: true, color: "#9575CD", emoji: "🫐" },
      ],
    },
  ])

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "tiramisu",
    variants: [] as Variant[],
  })

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good Morning, Boss!"
    if (hour < 18) return "Good Afternoon, Boss!"
    return "Good Evening, Boss!"
  }

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { id: "orders", label: "Orders", icon: ClipboardList, href: "/admin/orders" },
    { id: "menu", label: "Menu Management", icon: Cupcake, href: "/admin/menu" },
    { id: "analytics", label: "Analytics", icon: TrendingUp, href: "/admin/analytics" },
    { id: "customers", label: "Customers", icon: Users, href: "/admin/customers" },
    { id: "settings", label: "Settings", icon: Settings, href: "/admin/settings" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const getCategoryById = (id: string) => categories.find((c) => c.id === id)

  const toggleStock = (productId: number, variantIndex: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? {
              ...product,
              variants: product.variants.map((v, i) => (i === variantIndex ? { ...v, inStock: !v.inStock } : v)),
            }
          : product,
      ),
    )
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      category: product.category,
      variants: [...product.variants],
    })
    setShowAddModal(true)
  }

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category)
    setShowCategoryModal(true)
  }

  const addVariantRow = () => {
    setFormData({
      ...formData,
      variants: [
        ...formData.variants,
        { flavor: "", price: 0, stock: 0, inStock: true, color: "#FF6B8A", emoji: "🍰" },
      ],
    })
  }

  const removeVariantRow = (index: number) => {
    setFormData({
      ...formData,
      variants: formData.variants.filter((_, i) => i !== index),
    })
  }

  const handleAddCategory = () => {
    const newCategory: Category = {
      id: editingCategory?.id || `cat-${Date.now()}`,
      name: (document.getElementById("categoryName") as HTMLInputElement)?.value || "",
      emoji: (document.getElementById("categoryEmoji") as HTMLInputElement)?.value || "📦",
      color: (document.getElementById("categoryColor") as HTMLInputElement)?.value || "#FFB6C1",
    }

    if (editingCategory) {
      setCategories((prev) => prev.map((cat) => (cat.id === editingCategory.id ? newCategory : cat)))
    } else {
      setCategories((prev) => [...prev, newCategory])
    }

    setShowCategoryModal(false)
    setEditingCategory(null)
  }

  const handleDeleteCategory = (id: string) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories((prev) => prev.filter((cat) => cat.id !== id))
      // Move products to first category
      if (categories.length > 1) {
        setProducts((prev) => prev.map((p) => (p.category === id ? { ...p, category: categories[0].id } : p)))
      }
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-bg-primary">
      {/* Sidebar */}
      <aside className="w-64 bg-[#FFF0F5] border-r border-pink-200 flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center">
              <Cupcake className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-text-brown text-lg">My Boo</h2>
              <p className="text-xs text-text-brown/60">Admin Panel</p>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeNav === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-brand-pink text-white shadow-lg shadow-pink-300/30"
                      : "text-text-brown hover:bg-pink-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{item.label}</span>
                </a>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-pink-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-text-brown">{getGreeting()}</h1>
            <p className="text-sm text-text-brown/60">Manage your menu and categories</p>
          </div>
          <button className="relative p-3 rounded-full hover:bg-pink-50 transition-all duration-300 hover:animate-[wiggle_0.5s_ease-in-out]">
            <Bell className="w-6 h-6 text-text-brown" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-pink rounded-full"></span>
          </button>
        </header>

        {/* Menu Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <SoftCard className="bg-gradient-to-br from-pink-50 to-pink-100/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-pink/20 rounded-2xl">
                  <FolderOpen className="w-6 h-6 text-brand-pink" />
                </div>
                <div>
                  <p className="text-sm text-text-brown/60">Categories</p>
                  <p className="text-2xl font-bold text-text-brown">{categories.length}</p>
                </div>
              </div>
            </SoftCard>

            <SoftCard className="bg-gradient-to-br from-purple-50 to-purple-100/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-400/20 rounded-2xl">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-text-brown/60">Total Products</p>
                  <p className="text-2xl font-bold text-text-brown">{products.length}</p>
                </div>
              </div>
            </SoftCard>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-text-brown">Categories</h2>
              <button
                onClick={() => {
                  setEditingCategory(null)
                  setShowCategoryModal(true)
                }}
                className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-300/30 text-sm"
              >
                <Plus className="w-4 h-4" />
                Add Category
              </button>
            </div>

            <div className="flex gap-3 flex-wrap">
              {categories.map((category) => (
                <SoftCard
                  key={category.id}
                  className="group relative overflow-hidden hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <div className="flex items-center gap-3 px-4 py-3">
                    <span className="text-2xl">{category.emoji}</span>
                    <div>
                      <p className="font-bold text-text-brown">{category.name}</p>
                      <p className="text-xs text-text-brown/60">
                        {products.filter((p) => p.category === category.id).length} items
                      </p>
                    </div>
                    <div className="ml-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleEditCategory(category)}
                        className="p-2 rounded-lg hover:bg-white/50 transition-colors"
                      >
                        <Edit className="w-3 h-3 text-text-brown" />
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(category.id)}
                        className="p-2 rounded-lg hover:bg-white/50 transition-colors"
                      >
                        <Trash2 className="w-3 h-3 text-red-500" />
                      </button>
                    </div>
                  </div>
                </SoftCard>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-brown/40" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-pink-200 focus:border-brand-pink outline-none transition-colors"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto">
              <button
                onClick={() => setCategoryFilter("all")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  categoryFilter === "all"
                    ? "bg-brand-pink text-white shadow-lg shadow-pink-300/30"
                    : "bg-white text-text-brown border-2 border-pink-200 hover:bg-pink-50"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setCategoryFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                    categoryFilter === category.id
                      ? "bg-brand-pink text-white shadow-lg shadow-pink-300/30"
                      : "bg-white text-text-brown border-2 border-pink-200 hover:bg-pink-50"
                  }`}
                >
                  <span>{category.emoji}</span>
                  {category.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setEditingProduct(null)
                setFormData({ name: "", description: "", category: categories[0]?.id || "", variants: [] })
                setShowAddModal(true)
              }}
              className="flex items-center gap-2 px-6 py-3 bg-brand-pink text-white rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-300/30 whitespace-nowrap"
            >
              <Plus className="w-5 h-5" />
              Add Product
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProducts.map((product) => {
              const category = getCategoryById(product.category)
              return (
                <SoftCard
                  key={product.id}
                  className="overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex gap-4">
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-pink-50">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-text-brown">{product.name}</h3>
                          <p className="text-xs text-text-brown/60 line-clamp-1">{product.description}</p>
                          {category && (
                            <div className="flex items-center gap-1 mt-1">
                              <span className="text-xs">{category.emoji}</span>
                              <span className="text-xs text-text-brown/60">{category.name}</span>
                              <span className="text-xs text-brand-pink font-semibold ml-2">
                                {product.totalSold} sold
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditProduct(product)}
                            className="p-2 rounded-lg hover:bg-pink-100 transition-colors"
                          >
                            <Edit className="w-4 h-4 text-text-brown" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-red-100 transition-colors">
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2 mt-3">
                        {product.variants.map((variant, index) => (
                          <div
                            key={variant.flavor}
                            className="flex items-center justify-between p-2 bg-white rounded-lg"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: variant.color }}></div>
                              <span className="text-xs">{variant.emoji}</span>
                              <span className="text-sm font-medium text-text-brown">{variant.flavor}</span>
                              <span className="text-xs text-text-brown/40">Stock: {variant.stock}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-bold text-text-brown">${variant.price.toFixed(2)}</span>
                              <button
                                onClick={() => toggleStock(product.id, index)}
                                className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                                  variant.inStock ? "bg-brand-pink" : "bg-gray-300"
                                }`}
                              >
                                <div
                                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                                    variant.inStock ? "translate-x-6" : ""
                                  }`}
                                ></div>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SoftCard>
              )
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-text-brown/20 mx-auto mb-4" />
              <p className="text-text-brown/60">No products found</p>
            </div>
          )}
        </main>
      </div>

      {showCategoryModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-brown">
                {editingCategory ? "Edit Category" : "Add Category"}
              </h2>
              <button
                onClick={() => {
                  setShowCategoryModal(false)
                  setEditingCategory(null)
                }}
                className="p-2 rounded-full hover:bg-pink-100 transition-colors"
              >
                <X className="w-6 h-6 text-text-brown" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text-brown mb-2">Category Name</label>
                <input
                  id="categoryName"
                  type="text"
                  placeholder="e.g., Tiramisu"
                  defaultValue={editingCategory?.name}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-brand-pink outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-brown mb-2">Emoji</label>
                <input
                  id="categoryEmoji"
                  type="text"
                  placeholder="🍰"
                  defaultValue={editingCategory?.emoji}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-brand-pink outline-none transition-colors text-2xl text-center"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-brown mb-2">Color</label>
                <input
                  id="categoryColor"
                  type="color"
                  defaultValue={editingCategory?.color || "#FFB6C1"}
                  className="w-full h-12 rounded-2xl border-2 border-pink-200 cursor-pointer"
                />
              </div>

              <button
                onClick={handleAddCategory}
                className="w-full py-3 bg-brand-pink text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-300/30"
              >
                {editingCategory ? "Update Category" : "Add Category"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-brown">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false)
                  setEditingProduct(null)
                }}
                className="p-2 rounded-full hover:bg-pink-100 transition-colors"
              >
                <X className="w-6 h-6 text-text-brown" />
              </button>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                setShowAddModal(false)
                setEditingProduct(null)
              }}
            >
              <div>
                <label className="block text-sm font-semibold text-text-brown mb-2">Product Name</label>
                <input
                  type="text"
                  placeholder="e.g., Classic Tiramisu Box"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-brand-pink outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-brown mb-2">Description</label>
                <textarea
                  placeholder="Brief description of the product"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-brand-pink outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-brown mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-brand-pink outline-none transition-colors bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.emoji} {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="border-2 border-pink-200 rounded-2xl p-6 bg-pink-50/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-text-brown">Flavor Variants</h3>
                  <button
                    type="button"
                    onClick={addVariantRow}
                    className="px-4 py-2 bg-brand-pink text-white rounded-full text-sm font-medium hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Variant
                  </button>
                </div>

                <div className="space-y-3">
                  {formData.variants.map((variant, idx) => (
                    <div key={idx} className="flex gap-2 items-center bg-white p-3 rounded-xl">
                      <input
                        type="text"
                        value={variant.flavor}
                        onChange={(e) => {
                          const newVariants = [...formData.variants]
                          newVariants[idx].flavor = e.target.value
                          setFormData({ ...formData, variants: newVariants })
                        }}
                        placeholder="Flavor name"
                        className="flex-1 px-3 py-2 rounded-xl border-2 border-pink-200 focus:border-brand-pink outline-none transition-colors text-sm"
                      />
                      <input
                        type="text"
                        value={variant.emoji}
                        onChange={(e) => {
                          const newVariants = [...formData.variants]
                          newVariants[idx].emoji = e.target.value
                          setFormData({ ...formData, variants: newVariants })
                        }}
                        placeholder="🍰"
                        className="w-12 px-2 py-2 rounded-xl border-2 border-pink-200 focus:border-brand-pink outline-none transition-colors text-sm text-center"
                      />
                      <input
                        type="color"
                        value={variant.color}
                        onChange={(e) => {
                          const newVariants = [...formData.variants]
                          newVariants[idx].color = e.target.value
                          setFormData({ ...formData, variants: newVariants })
                        }}
                        className="w-12 h-10 rounded-xl border-2 border-pink-200 cursor-pointer"
                      />
                      <input
                        type="number"
                        step="0.01"
                        value={variant.price || ""}
                        onChange={(e) => {
                          const newVariants = [...formData.variants]
                          newVariants[idx].price = Number.parseFloat(e.target.value)
                          setFormData({ ...formData, variants: newVariants })
                        }}
                        placeholder="Price"
                        className="w-20 px-3 py-2 rounded-xl border-2 border-pink-200 focus:border-brand-pink outline-none transition-colors text-sm"
                      />
                      <input
                        type="number"
                        value={variant.stock || ""}
                        onChange={(e) => {
                          const newVariants = [...formData.variants]
                          newVariants[idx].stock = Number.parseInt(e.target.value)
                          setFormData({ ...formData, variants: newVariants })
                        }}
                        placeholder="Stock"
                        className="w-20 px-3 py-2 rounded-xl border-2 border-pink-200 focus:border-brand-pink outline-none transition-colors text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeVariantRow(idx)}
                        className="p-2 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  ))}

                  {formData.variants.length === 0 && (
                    <p className="text-sm text-text-brown/40 text-center py-4">No variants added yet</p>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false)
                    setEditingProduct(null)
                  }}
                  className="flex-1 py-3 border-2 border-pink-200 text-text-brown rounded-full font-semibold hover:bg-pink-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-brand-pink text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-300/30"
                >
                  {editingProduct ? "Update Product" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
