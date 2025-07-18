import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Laptop,
  Home,
  GraduationCap,
  Briefcase,
  Heart,
  MapPin,
  Search,
  Star,
  Clock,
  Shield,
  Truck,
  Wind,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800">RentEasy</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-600 hover:text-green-600">
              Browse
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-600 hover:text-green-600"
            >
              How it Works
            </Link>
            <Link
              href="/list-items"
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
            🇵🇰 Serving Lahore, Karachi & Islamabad
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Rent What You Need,
            <span className="text-green-600"> When You Need It</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From laptops for students to wedding dresses for families - access
            everything temporarily without the big investment. Smart rentals for
            smart Pakistanis.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-3 p-2 bg-white rounded-xl shadow-lg border">
              <div className="flex-1 flex items-center space-x-3 px-4">
                <Search className="w-5 h-5 text-gray-400" />
                <Input
                  placeholder="What do you need to rent?"
                  className="border-0 focus-visible:ring-0 text-lg"
                />
              </div>
              <div className="flex items-center space-x-3 px-4">
                <MapPin className="w-5 h-5 text-gray-400" />
                <select className="border-0 bg-transparent text-gray-600 focus:outline-none">
                  <option>Lahore</option>
                  <option>Karachi</option>
                  <option>Islamabad</option>
                </select>
              </div>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 px-8"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">10K+</div>
              <div className="text-gray-600">Happy Renters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">5K+</div>
              <div className="text-gray-600">Items Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">3</div>
              <div className="text-gray-600">Major Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect For Every Pakistani
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re a student, freelancer, or planning a special
              event - we&apos;ve got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Students</CardTitle>
                <CardDescription>
                  Hostel life made easier with temporary tech and comfort items
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Laptops & tablets</div>
                  <div>• Air coolers & fans</div>
                  <div>• Study furniture</div>
                  <div>• Gaming consoles</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Freelancers</CardTitle>
                <CardDescription>
                  Professional tools without the big upfront investment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Cameras & equipment</div>
                  <div>• Professional tools</div>
                  <div>• Office furniture</div>
                  <div>• Presentation gear</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl">Families</CardTitle>
                <CardDescription>
                  Make your special events memorable without breaking the bank
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Wedding dresses</div>
                  <div>• Event decorations</div>
                  <div>• Party equipment</div>
                  <div>• Jewelry & accessories</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Urban Dwellers</CardTitle>
                <CardDescription>
                  Smart city living with the sharing economy mindset
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Home appliances</div>
                  <div>• Fitness equipment</div>
                  <div>• Travel gear</div>
                  <div>• Seasonal items</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Categories
            </h2>
            <p className="text-gray-600">
              Discover what&apo;s trending in rentals across Pakistan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href="/category/bridal-dresses">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                    <Heart className="w-10 h-10 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Bridal Dresses
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Beautiful wedding dresses for your special day
                  </p>
                  <div className="text-sm text-pink-600 font-medium">
                    500+ dresses available
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Starting from ₨5,000/day
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/category/air-conditioners">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <Wind className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Air Conditioners
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Stay cool during hot Pakistani summers
                  </p>
                  <div className="text-sm text-blue-600 font-medium">
                    300+ ACs available
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Starting from ₨1,200/day
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/category/laptops">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Laptop className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Laptops
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Perfect for students and professionals
                  </p>
                  <div className="text-sm text-green-600 font-medium">
                    800+ laptops available
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Starting from ₨1,500/day
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Rentals
            </h2>
            <p className="text-gray-600">Most popular items rented this week</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/lpt1-fixed.jpeg?height=200&width=300",
                title: 'MacBook Pro 13"',
                price: "₨2,500/day",
                rating: 4.8,
                location: "Lahore",
                category: "Electronics",
              },
              {
                image: "/dark.jpeg?height=200&width=300",
                title: "Wedding Lehenga",
                price: "₨8,000/day",
                rating: 4.9,
                location: "Karachi",
                category: "Fashion",
              },
              {
                image: "/camera.webp?height=200&width=300",
                title: "DSLR Camera Kit",
                price: "₨3,500/day",
                rating: 4.7,
                location: "Islamabad",
                category: "Photography",
              },
              {
                image: "/chillar.jpeg?height=200&width=300",
                title: "Air Cooler",
                price: "₨800/day",
                rating: 4.6,
                location: "Lahore",
                category: "Home",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-white text-gray-700">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-green-600">
                      {item.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why RentEasy?
            </h2>
            <p className="text-gray-600">Built for Pakistan, by Pakistanis</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Items</h3>
              <p className="text-gray-600">
                Every item is verified and quality-checked before listing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">
                Free pickup and delivery within city limits
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Duration</h3>
              <p className="text-gray-600">
                Rent for hours, days, weeks, or months
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Support</h3>
              <p className="text-gray-600">
                24/7 customer support in Urdu and English
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Renting Smart?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Pakistanis who are saving money and living smarter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-green-600">
              Browse Items
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              List Your Item
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">RentEasy</span>
              </div>
              <p className="text-gray-400 mb-4">
                Pakistan&apos;s first rental marketplace for smart, affordable
                living.
              </p>
              <div className="text-sm text-gray-400">🇵🇰 Made in Pakistan</div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Home & Living
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Photography
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Cities</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Lahore
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Karachi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Islamabad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Coming Soon...
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 RentEasy. All rights reserved. Empowering
              Pakistan&apos;s sharing economy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
