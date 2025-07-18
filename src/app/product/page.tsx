import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Star,
  MapPin,
  Calendar,
  Shield,
  Truck,
  MessageCircle,
  Heart,
  Share2,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-green-800">RentEasy</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-green-600">
              Home
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-green-600">
              How it Works
            </Link>
            <Link href="/list-item" className="text-gray-600 hover:text-green-600">
              List Item
            </Link>
            <Link href="/support" className="text-gray-600 hover:text-green-600">
              Support
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline">Sign In</Button>
            <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">
            Home
          </Link>
          <span>/</span>
          <Link href="#" className="hover:text-green-600">
            Electronics
          </Link>
          <span>/</span>
          <span className="text-gray-900">MacBook Pro 13-inch</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="MacBook Pro" fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white">Available</Badge>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button size="sm" variant="secondary" className="bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/80 hover:bg-white">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">1 / 8</div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex space-x-2 overflow-x-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded border-2 border-transparent hover:border-green-600 cursor-pointer"
                  >
                    <Image
                      src={`/placeholder.svg?height=80&width=80`}
                      alt={`Product image ${i}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">MacBook Pro 13-inch (M2, 2022)</h1>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9</span>
                    <span className="text-gray-500">(127 reviews)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>DHA Phase 5, Lahore</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Listed 2 weeks ago</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">₨2,500</div>
                      <div className="text-sm text-gray-500">per day</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">₨15,000</div>
                      <div className="text-sm text-gray-500">per week</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">₨50,000</div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center justify-between text-sm">
                    <span>Security Deposit:</span>
                    <span className="font-medium">₨10,000 (refundable)</span>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Description</h2>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    Brand new MacBook Pro 13-inch with M2 chip, perfect for students, freelancers, and professionals.
                    This laptop features 8GB unified memory, 256GB SSD storage, and up to 20 hours of battery life.
                  </p>
                  <p>
                    Ideal for coding, design work, video editing, and everyday tasks. Comes with original charger, box,
                    and all accessories. The laptop is in pristine condition and regularly maintained.
                  </p>
                  <p>
                    Perfect for students who need a reliable laptop for their studies or freelancers working on creative
                    projects. No smoking household, pet-free environment.
                  </p>
                </div>
              </div>

              {/* Specifications */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Specifications</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Brand:</span>
                      <span className="font-medium">Apple</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Model:</span>
                      <span className="font-medium">MacBook Pro 13&aquot; (2022)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processor:</span>
                      <span className="font-medium">Apple M2 Chip</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Memory:</span>
                      <span className="font-medium">8GB Unified Memory</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Storage:</span>
                      <span className="font-medium">256GB SSD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Display:</span>
                      <span className="font-medium">13.3&quot; Retina Display</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Condition:</span>
                      <span className="font-medium text-green-600">Excellent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year:</span>
                      <span className="font-medium">2022</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rental Terms */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Rental Terms</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-green-600 mr-2" />
                      <div>
                        <div className="font-medium">Minimum Rental</div>
                        <div className="text-sm text-gray-600">3 days</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-green-600 mr-2" />
                      <div>
                        <div className="font-medium">Maximum Rental</div>
                        <div className="text-sm text-gray-600">3 months</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Truck className="w-5 h-5 text-green-600 mr-2" />
                      <div>
                        <div className="font-medium">Delivery</div>
                        <div className="text-sm text-gray-600">Free within 10km</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-green-600 mr-2" />
                      <div>
                        <div className="font-medium">Insurance</div>
                        <div className="text-sm text-gray-600">Damage protection included</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">What&apo;s Included</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>MacBook Pro 13-inch</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Original MagSafe Charger</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>USB-C to Lightning Cable</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Original Box & Documentation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Laptop Sleeve (protective case)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Pre-installed Essential Software</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Reviews (127)</h2>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9 out of 5</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "Ahmad Hassan",
                      rating: 5,
                      date: "2 weeks ago",
                      comment:
                        "Excellent laptop! Perfect for my freelance work. Owner was very responsive and the laptop was exactly as described. Highly recommend!",
                      verified: true,
                    },
                    {
                      name: "Fatima Khan",
                      rating: 5,
                      date: "1 month ago",
                      comment:
                        "Needed this for my final year project. Great condition, fast delivery, and very reasonable price. Will definitely rent again!",
                      verified: true,
                    },
                    {
                      name: "Ali Raza",
                      rating: 4,
                      date: "2 months ago",
                      comment:
                        "Good laptop for the price. Battery life is amazing. Only minor issue was a small scratch on the back, but didn't affect performance.",
                      verified: true,
                    },
                  ].map((review, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarFallback>
                                {review.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">{review.name}</span>
                                {review.verified && (
                                  <Badge variant="secondary" className="text-xs">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    Verified
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span>{review.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  View All Reviews
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">
                  ₨2,500 <span className="text-base text-gray-500 font-normal">/ day</span>
                </CardTitle>
                <CardDescription>Available for immediate rental</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium">Rental Period</Label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <Input type="date" />
                      <Input type="date" />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Duration</Label>
                    <select className="w-full mt-1 p-2 border rounded-md">
                      <option>3 days - ₨7,500</option>
                      <option>1 week - ₨15,000</option>
                      <option>2 weeks - ₨28,000</option>
                      <option>1 month - ₨50,000</option>
                    </select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Rental (3 days)</span>
                    <span>₨7,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security deposit</span>
                    <span>₨10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>₨375</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>₨17,875</span>
                  </div>
                  <p className="text-xs text-gray-500">*Security deposit will be refunded after return</p>
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    Book Now
                  </Button>
                  <Button size="lg" variant="outline" className="w-full bg-transparent">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message Owner
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-500">
                  <Shield className="w-4 h-4 inline mr-1" />
                  Protected by RentEasy guarantee
                </div>
              </CardContent>
            </Card>

            {/* Owner Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Meet Your Host</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Muhammad Kamran</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>4.9 (89 reviews)</span>
                    </div>
                    <div className="text-sm text-gray-500">Member since 2022</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>Identity verified</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>Phone number verified</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>Email verified</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-green-600 mr-2" />
                    <span>Usually responds within 1 hour</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="text-sm text-gray-600">
                  <p>
                    &quot;I&apos;m a tech enthusiast who loves sharing quality gadgets with fellow Pakistanis. All my items are
                    well-maintained and come with complete accessories.&auot;
                  </p>
                </div>

                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  <User className="w-4 h-4 mr-2" />
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  Safety Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Always inspect the item before accepting delivery</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Take photos of the item&apos;s condition at pickup</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Keep all communication within the RentEasy platform</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Report any issues immediately to our support team</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Items */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Items You Might Like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/placeholder.svg?height=200&width=300",
                title: "MacBook Air M1",
                price: "₨2,000/day",
                rating: 4.7,
                location: "Gulberg, Lahore",
              },
              {
                image: "/placeholder.svg?height=200&width=300",
                title: "Dell XPS 13",
                price: "₨1,800/day",
                rating: 4.6,
                location: "DHA, Karachi",
              },
              {
                image: "/placeholder.svg?height=200&width=300",
                title: "HP Spectre x360",
                price: "₨1,500/day",
                rating: 4.5,
                location: "F-7, Islamabad",
              },
              {
                image: "/placeholder.svg?height=200&width=300",
                title: "Surface Laptop 4",
                price: "₨1,700/day",
                rating: 4.8,
                location: "Johar Town, Lahore",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-white text-gray-700">Electronics</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-green-600">{item.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{item.rating}</span>
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
        </section>
      </div>
    </div>
  )
}
