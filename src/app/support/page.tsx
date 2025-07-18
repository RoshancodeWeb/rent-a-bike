import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Phone, Mail, Clock, Shield, CreditCard, Truck, User, Search, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SupportPage() {
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
            <Link href="/list-item" className="text-gray-600 hover:text-green-600">
              List Item
            </Link>
            <Link href="/support" className="text-green-600 font-medium">
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
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
            🇵🇰 24/7 Support in Urdu & English
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How Can We Help You?</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get instant help with rentals, payments, or any questions. Our Pakistani support team is here for you.
          </p>

          {/* Search Help */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg border">
              <Search className="w-5 h-5 text-gray-400" />
              <Input placeholder="Search for help articles..." className="border-0 focus-visible:ring-0 text-lg" />
              <Button className="bg-green-600 hover:bg-green-700">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600">Choose the best way to reach us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Get instant help from our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Available 24/7
                  </div>
                  <div>Average response: 2 minutes</div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>Speak directly with our Pakistani team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="font-medium">+92-300-RENTESY</div>
                  <div>Daily: 8 AM - 12 AM</div>
                  <div>Urdu & English support</div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Send us detailed questions or feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div>support@renteasy.pk</div>
                  <div>Response within 4 hours</div>
                  <div>Detailed solutions provided</div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Help Topics</h2>
            <p className="text-gray-600">Find quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Account & Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>How to verify my account</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Update profile information</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Change password</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Delete account</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Payments & Billing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Payment methods accepted</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Refund policy</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Security deposits</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Payment failed</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Delivery & Pickup</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Delivery areas</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Delivery charges</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Schedule pickup</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Late return policy</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Safety & Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Damage protection</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Report damaged item</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Safety guidelines</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                    <span>Report user</span>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600">Can&apos;t find what you&apos;re looking for? Send us a detailed message.</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+92 300 1234567" />
                    </div>
                    <div>
                      <Label htmlFor="category">Issue Category *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="account">Account Issues</SelectItem>
                          <SelectItem value="payment">Payment Problems</SelectItem>
                          <SelectItem value="rental">Rental Issues</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="Brief description of your issue" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide detailed information about your issue or question..."
                      rows={6}
                    />
                  </div>

                  <div>
                    <Label htmlFor="priority">Priority Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - General inquiry</SelectItem>
                        <SelectItem value="medium">Medium - Need help soon</SelectItem>
                        <SelectItem value="high">High - Urgent issue</SelectItem>
                        <SelectItem value="critical">Critical - Service disruption</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We typically respond within 4 hours during business hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-red-900 mb-4">Emergency Support</h2>
            <p className="text-red-700 mb-6">
              For urgent issues like theft, safety concerns, or emergency situations during rentals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Hotline: +92-300-URGENT
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
              >
                Report Safety Issue
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
