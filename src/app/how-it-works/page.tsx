import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MessageCircle, CreditCard, Truck, Shield, Clock, CheckCircle, Users, Star, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header - Same as homepage */}
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
            <Link href="/how-it-works" className="text-green-600 font-medium">
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

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Simple • Safe • Smart</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How RentEasy Works</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Renting and lending made simple for everyone in Pakistan. Follow these easy steps to start your rental
            journey.
          </p>
        </div>
      </section>

      {/* For Renters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Renters</h2>
            <p className="text-gray-600">Get what you need in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <Search className="w-8 h-8 text-blue-600" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Search & Browse</h3>
              <p className="text-gray-600 mb-4">
                Find the perfect item from thousands of verified listings in Lahore, Karachi, and Islamabad.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Filter by location & price</li>
                <li>• Read reviews & ratings</li>
                <li>• View detailed photos</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <MessageCircle className="w-8 h-8 text-green-600" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect & Confirm</h3>
              <p className="text-gray-600 mb-4">
                Chat with the owner, ask questions, and confirm availability for your desired dates.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Direct messaging</li>
                <li>• Instant availability check</li>
                <li>• Negotiate terms</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <CreditCard className="w-8 h-8 text-purple-600" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Book & Pay</h3>
              <p className="text-gray-600 mb-4">
                Secure your rental with our safe payment system. Pay online or cash on delivery.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Multiple payment options</li>
                <li>• Secure transactions</li>
                <li>• Instant confirmation</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <Truck className="w-8 h-8 text-orange-600" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Receive & Enjoy</h3>
              <p className="text-gray-600 mb-4">
                Get free delivery to your doorstep and enjoy your rental. Return when done!
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Free pickup & delivery</li>
                <li>• Quality guaranteed</li>
                <li>• Easy returns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Lenders */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Item Owners</h2>
            <p className="text-gray-600">Turn your unused items into income</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>List Your Item</CardTitle>
                <CardDescription>Upload photos, set your price, and describe your item in minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Professional photo tips</li>
                  <li>• Smart pricing suggestions</li>
                  <li>• Instant verification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Connect with Renters</CardTitle>
                <CardDescription>Receive booking requests and chat with potential renters</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Verified renter profiles</li>
                  <li>• Secure messaging</li>
                  <li>• Flexible scheduling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Earn Money</CardTitle>
                <CardDescription>Get paid securely and track your earnings through our dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Weekly payouts</li>
                  <li>• Earnings analytics</li>
                  <li>• Tax documentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety & Trust</h2>
            <p className="text-gray-600">Your security is our priority</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Verified Users</h3>
              <p className="text-sm text-gray-600">All users verified with CNIC and phone number</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Quality Checked</h3>
              <p className="text-sm text-gray-600">Every item inspected before first rental</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Review System</h3>
              <p className="text-sm text-gray-600">Transparent ratings for renters and owners</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Round-the-clock customer assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What if the item gets damaged during my rental?",
                a: "We have comprehensive damage protection. Minor wear is expected, but significant damage is covered by our insurance policy. You'll only pay a small deductible.",
              },
              {
                q: "How do I know the item will be available when I need it?",
                a: "Our real-time availability system ensures accurate booking. Once confirmed, the item is reserved exclusively for you during your rental period.",
              },
              {
                q: "Can I extend my rental period?",
                a: "Yes! You can request extensions through the app. If the item is available, you can extend at the same daily rate.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept JazzCash, EasyPaisa, bank transfers, and cash on delivery. All online payments are secured with 256-bit encryption.",
              },
              {
                q: "Do you deliver to all areas in the city?",
                a: "We deliver within city limits of Lahore, Karachi, and Islamabad. Some remote areas may have additional delivery charges.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of smart Pakistanis who are renting instead of buying
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-green-600">
              Start Renting
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
    </div>
  )
}
