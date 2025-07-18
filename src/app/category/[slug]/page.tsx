import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Search,
  MapPin,
  Star,
  Heart,
  Share2,
  Grid3X3,
  List,
  Laptop,
  Wind,
  HeartIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  featured?: boolean;

  // Optional fields by category
  size?: string;
  designer?: string;

  capacity?: string;
  type?: string;
  energyRating?: string;

  brand?: string;
  processor?: string;
  ram?: string;
  storage?: string;
};

// This would normally come from your database/API
const categoryData = {
  "bridal-dresses": {
    title: "Bridal Dresses",
    description: "Stunning wedding dresses for your perfect day",
    icon: HeartIcon,
    color: "pink",
    totalItems: 500,
  },
  "air-conditioners": {
    title: "Air Conditioners",
    description: "Stay cool during Pakistan's hot summers",
    icon: Wind,
    color: "blue",
    totalItems: 300,
  },
  laptops: {
    title: "Laptops",
    description: "Perfect for students, freelancers, and professionals",
    icon: Laptop,
    color: "green",
    totalItems: 800,
  },
};

// Sample products data - this would come from your database
const sampleProducts: Record<string, Product[]> = {
  "bridal-dresses": [
    {
      id: 1,
      title: "Royal Red Bridal Lehenga",
      price: "₨8,000/day",
      originalPrice: "₨12,000/day",
      rating: 4.9,
      reviews: 45,
      location: "DHA, Lahore",
      image: "/dark.jpeg?height=300&width=400",
      featured: true,
      size: "Medium",
      designer: "Sana Safinaz",
    },
    {
      id: 2,
      title: "Golden Embroidered Sharara",
      price: "₨6,500/day",
      rating: 4.8,
      reviews: 32,
      location: "Gulberg, Lahore",
      image: "/red-dress.jpeg?height=300&width=400",
      size: "Large",
      designer: "Maria B",
    },
    {
      id: 3,
      title: "Traditional Maroon Gharara",
      price: "₨7,200/day",
      rating: 4.7,
      reviews: 28,
      location: "Clifton, Karachi",
      image: "/sitara.webp?height=300&width=400",
      size: "Small",
      designer: "Elan",
    },
  ],
  "air-conditioners": [
    {
      id: 1,
      title: "Haier 1.5 Ton Inverter AC",
      price: "₨1,500/day",
      originalPrice: "₨2,000/day",
      rating: 4.8,
      reviews: 67,
      location: "DHA, Lahore",
      image: "/chillar.jpeg?height=300&width=400",
      featured: true,
      capacity: "1.5 Ton",
      type: "Inverter",
      energyRating: "5 Star",
    },
    {
      id: 2,
      title: "Gree 1 Ton Split AC",
      price: "₨1,200/day",
      rating: 4.6,
      reviews: 43,
      location: "Gulberg, Lahore",
      image: "/gree.jpeg?height=300&width=400",
      capacity: "1 Ton",
      type: "Split",
      energyRating: "3 Star",
    },
    {
      id: 3,
      title: "Dawlance 2 Ton Floor Standing",
      price: "₨2,200/day",
      rating: 4.7,
      reviews: 38,
      location: "Clifton, Karachi",
      image: "/ton.jpeg?height=300&width=400",
      capacity: "2 Ton",
      type: "Floor Standing",
      energyRating: "4 Star",
    },
  ],
  laptops: [
    {
      id: 1,
      title: 'MacBook Pro 13" M2',
      price: "₨2,500/day",
      originalPrice: "₨3,000/day",
      rating: 4.9,
      reviews: 127,
      location: "DHA, Lahore",
      image: "/lpt1-fixed.jpeg?height=300&width=400",
      featured: true,
      brand: "Apple",
      processor: "M2 Chip",
      ram: "8GB",
      storage: "256GB SSD",
    },
    {
      id: 2,
      title: "Dell XPS 13 (11th Gen)",
      price: "��1,800/day",
      rating: 4.7,
      reviews: 89,
      location: "Gulberg, Lahore",
      image: "/laptop2.jpeg?height=300&width=400",
      brand: "Dell",
      processor: "Intel i7",
      ram: "16GB",
      storage: "512GB SSD",
    },
    {
      id: 3,
      title: "HP Pavilion Gaming Laptop",
      price: "₨2,000/day",
      rating: 4.6,
      reviews: 76,
      location: "Clifton, Karachi",
      image: "/laptop3.jpeg?height=300&width=400",
      brand: "HP",
      processor: "AMD Ryzen 7",
      ram: "16GB",
      storage: "1TB SSD",
    },
  ],
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categoryData[slug as keyof typeof categoryData];
  const products = sampleProducts[slug as keyof typeof sampleProducts] || [];

  if (!category) {
    return <div>Category not found</div>;
  }

  const IconComponent = category.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
           <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="RentEasy Logo"
              width={60}
              height={60}
              className="w-20 h-20 rounded-lg object-cover"
            />
            
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-green-600">
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-600 hover:text-green-600"
            >
              How it Works
            </Link>
            <Link
              href="/list-item"
              className="text-gray-600 hover:text-green-600"
            >
              List Item
            </Link>
            <Link
              href="/support"
              className="text-gray-600 hover:text-green-600"
            >
              Support
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline">Sign In</Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 bg-white border-b">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">{category.title}</span>
        </div>
      </div>

      {/* Category Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <div
              className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center mr-4`}
            >
              <IconComponent className={`w-8 h-8 text-${category.color}-600`} />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {category.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {category.description}
              </p>
              <div className="text-sm text-gray-500">
                {category.totalItems}+ items available across Pakistan
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" className="text-green-600">
                    Clear All
                  </Button>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-2 block">
                    Search
                  </Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder={`Search ${category.title.toLowerCase()}...`}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">
                    Price Range (per day)
                  </Label>
                  <div className="px-2">
                    <Slider
                      defaultValue={[1000, 5000]}
                      max={10000}
                      step={100}
                      className="mb-4"
                    />
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>₨1,000</span>
                      <span>₨10,000</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">
                    Location
                  </Label>
                  <div className="space-y-2">
                    {["Lahore", "Karachi", "Islamabad"].map((city) => (
                      <div key={city} className="flex items-center space-x-2">
                        <Checkbox id={city} />
                        <Label htmlFor={city} className="text-sm">
                          {city}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category-specific filters */}
                {slug === "bridal-dresses" && (
                  <>
                    <div className="mb-6">
                      <Label className="text-sm font-medium mb-3 block">
                        Size
                      </Label>
                      <div className="space-y-2">
                        {["Small", "Medium", "Large", "Extra Large"].map(
                          (size) => (
                            <div
                              key={size}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox id={size} />
                              <Label htmlFor={size} className="text-sm">
                                {size}
                              </Label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="mb-6">
                      <Label className="text-sm font-medium mb-3 block">
                        Designer
                      </Label>
                      <div className="space-y-2">
                        {[
                          "Sana Safinaz",
                          "Maria B",
                          "HSY",
                          "Elan",
                          "Faraz Manan",
                        ].map((designer) => (
                          <div
                            key={designer}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={designer} />
                            <Label htmlFor={designer} className="text-sm">
                              {designer}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {slug === "air-conditioners" && (
                  <>
                    <div className="mb-6">
                      <Label className="text-sm font-medium mb-3 block">
                        Capacity
                      </Label>
                      <div className="space-y-2">
                        {["1 Ton", "1.5 Ton", "2 Ton", "2.5 Ton"].map(
                          (capacity) => (
                            <div
                              key={capacity}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox id={capacity} />
                              <Label htmlFor={capacity} className="text-sm">
                                {capacity}
                              </Label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="mb-6">
                      <Label className="text-sm font-medium mb-3 block">
                        Type
                      </Label>
                      <div className="space-y-2">
                        {["Split", "Window", "Inverter", "Floor Standing"].map(
                          (type) => (
                            <div
                              key={type}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox id={type} />
                              <Label htmlFor={type} className="text-sm">
                                {type}
                              </Label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </>
                )}

                {slug === "laptops" && (
                  <>
                    <div className="mb-6">
                      <Label className="text-sm font-medium mb-3 block">
                        Brand
                      </Label>
                      <div className="space-y-2">
                        {["Apple", "Dell", "HP", "Lenovo", "ASUS"].map(
                          (brand) => (
                            <div
                              key={brand}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox id={brand} />
                              <Label htmlFor={brand} className="text-sm">
                                {brand}
                              </Label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="mb-6">
                      <Label className="text-sm font-medium mb-3 block">
                        RAM
                      </Label>
                      <div className="space-y-2">
                        {["8GB", "16GB", "32GB"].map((ram) => (
                          <div
                            key={ram}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={ram} />
                            <Label htmlFor={ram} className="text-sm">
                              {ram}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Rating */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">
                    Rating
                  </Label>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <Label
                          htmlFor={`rating-${rating}`}
                          className="text-sm flex items-center"
                        >
                          {rating}+{" "}
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 ml-1" />
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and View Options */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {products.length} items found
                </span>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Select defaultValue="popular">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card
                  key={product?.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative">
                    <Image
                      src={product?.image || "/placeholder.svg"}
                      alt={"Product Image"}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product?.featured && (
                      <Badge className="absolute top-2 left-2 bg-green-600 text-white">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/80 hover:bg-white p-2"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/80 hover:bg-white p-2"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="mb-2">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                        {product?.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-green-600">
                            {product?.price}
                          </span>
                          {product?.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {product?.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {product?.rating}
                          </span>
                          <span className="text-sm text-gray-500">
                            ({product?.reviews})
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {product.location}
                    </div>

                    {/* Category-specific details */}
                    <div className="text-xs text-gray-600 mb-3">
                      {slug === "bridal-dresses" && (
                        <div className="flex items-center justify-between">
                          <span>Size: {product.size}</span>
                          <span>By {product.designer}</span>
                        </div>
                      )}
                      {slug === "air-conditioners" && (
                        <div className="flex items-center justify-between">
                          <span>{product.capacity}</span>
                          <span>{product.type}</span>
                        </div>
                      )}
                      {slug === "laptops" && (
                        <div className="flex items-center justify-between">
                          <span>{product.brand}</span>
                          <span>{product.ram} RAM</span>
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        Rent Now
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-transparent"
                      >
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="bg-transparent">
                Load More Items
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
