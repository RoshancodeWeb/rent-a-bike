import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Upload, Camera, DollarSign, MapPin, Calendar, Shield, TrendingUp, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ListItemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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
            <Link href="/how-it-works" className="text-gray-600 hover:text-green-600">
              How it Works
            </Link>
            <Link href="/list-item" className="text-green-600 font-medium">
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

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">💰 Start Earning Today</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">List Your Item & Start Earning</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Turn your unused items into a steady income stream. From electronics to wedding dresses, list anything and
            start earning money in Pakistan&apos;s growing rental economy.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">₨15K+</div>
              <div className="text-gray-600">Avg Monthly Earnings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">85%</div>
              <div className="text-gray-600">Items Get Rented</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">24hrs</div>
              <div className="text-gray-600">Avg Time to First Rental</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">4.8★</div>
              <div className="text-gray-600">Owner Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">List Your Item</CardTitle>
                    <CardDescription>
                      Fill out the details below to get your item listed and start earning
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Basic Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        Basic Information
                      </h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="title">Item Title *</Label>
                          <Input id="title" placeholder="e.g., MacBook Pro 13-inch" />
                        </div>
                        <div>
                          <Label htmlFor="category">Category *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="electronics">Electronics</SelectItem>
                              <SelectItem value="fashion">Fashion & Clothing</SelectItem>
                              <SelectItem value="photography">Photography</SelectItem>
                              <SelectItem value="home">Home & Living</SelectItem>
                              <SelectItem value="tools">Tools & Equipment</SelectItem>
                              <SelectItem value="vehicles">Vehicles</SelectItem>
                              <SelectItem value="sports">Sports & Fitness</SelectItem>
                              <SelectItem value="books">Books & Education</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="description">Description *</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe your item in detail. Include brand, model, condition, and any special features..."
                          rows={4}
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="condition">Condition *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select condition" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">Brand New</SelectItem>
                              <SelectItem value="excellent">Excellent</SelectItem>
                              <SelectItem value="good">Good</SelectItem>
                              <SelectItem value="fair">Fair</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="brand">Brand</Label>
                          <Input id="brand" placeholder="e.g., Apple, Samsung" />
                        </div>
                        <div>
                          <Label htmlFor="model">Model</Label>
                          <Input id="model" placeholder="e.g., iPhone 14 Pro" />
                        </div>
                      </div>
                    </div>

                    {/* Photos */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Camera className="w-5 h-5 text-green-600 mr-2" />
                        Photos
                      </h3>

                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Drag and drop your photos here, or click to browse</p>
                        <p className="text-sm text-gray-500">
                          Upload up to 10 photos. First photo will be the main image.
                        </p>
                        <Button variant="outline" className="mt-4 bg-transparent">
                          Choose Photos
                        </Button>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">📸 Photo Tips for Better Rentals:</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Use natural lighting and clean backgrounds</li>
                          <li>• Show the item from multiple angles</li>
                          <li>• Include any accessories or original packaging</li>
                          <li>• Highlight any unique features or flaws</li>
                        </ul>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                        Pricing
                      </h3>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="daily-rate">Daily Rate (₨) *</Label>
                          <Input id="daily-rate" type="number" placeholder="500" />
                        </div>
                        <div>
                          <Label htmlFor="weekly-rate">Weekly Rate (₨)</Label>
                          <Input id="weekly-rate" type="number" placeholder="3000" />
                        </div>
                        <div>
                          <Label htmlFor="monthly-rate">Monthly Rate (₨)</Label>
                          <Input id="monthly-rate" type="number" placeholder="10000" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="security-deposit">Security Deposit (₨)</Label>
                          <Input id="security-deposit" type="number" placeholder="2000" />
                          <p className="text-sm text-gray-500 mt-1">Refundable amount to cover potential damages</p>
                        </div>
                        <div>
                          <Label htmlFor="replacement-value">Replacement Value (₨) *</Label>
                          <Input id="replacement-value" type="number" placeholder="50000" />
                          <p className="text-sm text-gray-500 mt-1">Current market value of the item</p>
                        </div>
                      </div>
                    </div>

                    {/* Location & Availability */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <MapPin className="w-5 h-5 text-green-600 mr-2" />
                        Location & Availability
                      </h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your city" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lahore">Lahore</SelectItem>
                              <SelectItem value="karachi">Karachi</SelectItem>
                              <SelectItem value="islamabad">Islamabad</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="area">Area/Neighborhood *</Label>
                          <Input id="area" placeholder="e.g., DHA, Gulberg, F-7" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="address">Full Address</Label>
                        <Textarea id="address" placeholder="Complete address for pickup/delivery" rows={2} />
                      </div>

                      <div className="space-y-3">
                        <Label>Delivery Options</Label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="pickup" />
                            <Label htmlFor="pickup">Renter can pickup from my location</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="delivery" />
                            <Label htmlFor="delivery">I can deliver within 10km (₨200 fee)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="courier" />
                            <Label htmlFor="courier">Use RentEasy courier service</Label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Rental Terms */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Calendar className="w-5 h-5 text-green-600 mr-2" />
                        Rental Terms
                      </h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="min-rental">Minimum Rental Period</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select minimum period" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-day">1 Day</SelectItem>
                              <SelectItem value="3-days">3 Days</SelectItem>
                              <SelectItem value="1-week">1 Week</SelectItem>
                              <SelectItem value="1-month">1 Month</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="max-rental">Maximum Rental Period</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select maximum period" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-week">1 Week</SelectItem>
                              <SelectItem value="1-month">1 Month</SelectItem>
                              <SelectItem value="3-months">3 Months</SelectItem>
                              <SelectItem value="6-months">6 Months</SelectItem>
                              <SelectItem value="no-limit">No Limit</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="special-instructions">Special Instructions</Label>
                        <Textarea
                          id="special-instructions"
                          placeholder="Any special care instructions, usage guidelines, or restrictions..."
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-6 border-t">
                      <div className="flex items-center space-x-2 mb-4">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{" "}
                          <Link href="#" className="text-green-600 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-green-600 hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="lg" className="bg-green-600 hover:bg-green-700 flex-1">
                          List My Item
                        </Button>
                        <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                          Save as Draft
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Earnings Calculator */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                      Earnings Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label>Daily Rate: ₨500</Label>
                        <div className="text-sm text-gray-500 mt-1">Potential monthly earnings:</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">10 days rented:</span>
                          <span className="font-medium">₨5,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">20 days rented:</span>
                          <span className="font-medium">₨10,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">30 days rented:</span>
                          <span className="font-medium text-green-600">₨15,000</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 pt-2 border-t">
                        *Estimates based on similar items in your area
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Tips */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="w-5 h-5 text-green-600 mr-2" />
                      Success Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Items with 5+ photos get 3x more bookings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Competitive pricing increases rental frequency</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Quick responses lead to higher ratings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Detailed descriptions build trust</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Support */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 text-green-600 mr-2" />
                      Need Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Our team is here to help you succeed. Get support with listing, pricing, or any questions.
                    </p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
