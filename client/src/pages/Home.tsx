import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Wrench, Droplets, Flame, Settings, AlertCircle, Star, MapPin, Clock } from "lucide-react";
import { useState } from "react";

/**
 * Murphy Services Plumbing Website
 * Design: Professional Trust & Action-Oriented
 * Colors: Navy Blue (#1e3a5f) + Orange (#ff6b35)
 * Typography: Poppins (headers) + Inter (body)
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert("Thank you for your inquiry! We'll contact you soon.");
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  const services = [
    {
      icon: Droplets,
      title: "Leak Repair",
      description: "Pipe leaks, faucet leaks, slab leaks",
    },
    {
      icon: Wrench,
      title: "Drain Cleaning",
      description: "Clogged sinks, shower drains, sewer line cleaning",
    },
    {
      icon: Flame,
      title: "Water Heater Services",
      description: "Repair, replacement, tankless installation",
    },
    {
      icon: Settings,
      title: "Fixture Installation",
      description: "Faucets, toilets, garbage disposals, shower fixtures",
    },
    {
      icon: AlertCircle,
      title: "Emergency Plumbing",
      description: "Burst pipes, flooding, urgent repairs",
    },
  ];

  const testimonials = [
    {
      name: "Robert",
      text: "Sean was great! He was very knowledgeable and affordable. Highly recommend!",
      rating: 5,
    },
    {
      name: "Lisa Flores",
      text: "My son had been taking care of my home while I was in the hospital when he noticed a large amount of water coming out of the bricks on the house. I got Sean's information from a neighbors post and called him. Within 20 minutes he was at my home and had our issue fixed and the pricing was reasonable. I strongly recommend Murphy Services.",
      rating: 5,
    },
  ];

  const serviceAreas = ["Prosper", "Frisco", "McKinney", "Celina", "Little Elm"];

  const hours = [
    { day: "Monday", time: "9 AM – 5 PM" },
    { day: "Tuesday", time: "Open 24 hours" },
    { day: "Wednesday", time: "9 AM – 8 PM" },
    { day: "Thursday", time: "Open 24 hours" },
    { day: "Friday", time: "Open 24 hours" },
    { day: "Saturday", time: "Open 24 hours" },
    { day: "Sunday", time: "Open 24 hours" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Banner */}
      <div className="emergency-banner">
        🚨 Need a plumber now? Call <a href="tel:(469) 323-1582" className="font-bold underline">(469) 323-1582</a>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663415443119/hnqKLB5mqyesGTxJR95ZND/hero-plumber-sink-TdjK4wsN2zwEkPPYLQ5T7J.webp')`,
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Reliable Plumbing Services in Prosper, TX
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Fast and professional plumbing repairs, drain cleaning, and emergency service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(469) 323-1582">
              <Button className="btn-accent text-lg px-8 py-6">Call Now (469) 323-1582</Button>
            </a>
            <Button className="btn-outline text-lg px-8 py-6" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="trust-badge text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-primary mb-2">5.0 Star Rated</h3>
              <p className="text-muted-foreground">Professional plumbing service</p>
            </div>
            <div className="trust-badge text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-primary mb-2">Local Experts</h3>
              <p className="text-muted-foreground">Serving Prosper & surrounding areas</p>
            </div>
            <div className="trust-badge text-center">
              <div className="text-5xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-primary mb-2">24/7 Emergency</h3>
              <p className="text-muted-foreground">Available when you need us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive plumbing solutions for homes and businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="service-card text-center">
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">About Murphy Services</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Murphy Services is a locally owned plumbing company serving Prosper, Texas and surrounding communities. The company focuses on fast service, honest pricing, and reliable plumbing repairs.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With a strong reputation and excellent customer reviews, Murphy Services works to provide dependable plumbing solutions for homes and businesses.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  <span className="text-lg">Serving Prosper, Frisco, McKinney, Celina, Little Elm</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent" />
                  <span className="text-lg">24/7 Emergency Service Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-accent" />
                  <span className="text-lg">5.0 Star Rated Service</span>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl overflow-hidden shadow-lg h-96"
              style={{
                backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663415443119/hnqKLB5mqyesGTxJR95ZND/hero-water-heater-k7QzsLooeqt7Xw8kPTeUtT.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Customer Reviews</h2>
            <p>What our satisfied customers say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-accent">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Service Areas</h2>
            <p>We proudly serve the following communities</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="font-semibold text-primary">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Business Hours</h2>
            <p>We're here when you need us</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hours.map((hour, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 border-b border-gray-200">
                  <span className="font-semibold text-primary">{hour.day}</span>
                  <span className="text-muted-foreground">{hour.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Get a Free Estimate</h2>
            <p className="text-center mb-8 text-white/90">Fill out the form below and we'll contact you shortly</p>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(123) 456-7890"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-white/20 border border-white/30 text-white placeholder:text-white/50 rounded-lg px-4 py-2"
                  required
                >
                  <option value="" className="text-gray-800">
                    Select a service
                  </option>
                  <option value="leak-repair" className="text-gray-800">
                    Leak Repair
                  </option>
                  <option value="drain-cleaning" className="text-gray-800">
                    Drain Cleaning
                  </option>
                  <option value="water-heater" className="text-gray-800">
                    Water Heater Services
                  </option>
                  <option value="fixture-installation" className="text-gray-800">
                    Fixture Installation
                  </option>
                  <option value="emergency" className="text-gray-800">
                    Emergency Plumbing
                  </option>
                  <option value="other" className="text-gray-800">
                    Other
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your plumbing issue"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  rows={4}
                />
              </div>
              <Button type="submit" className="btn-accent w-full text-lg font-semibold">
                Request Free Estimate
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-white/90 mb-2">Or call us directly:</p>
              <a href="tel:(469) 323-1582" className="text-2xl font-bold text-accent hover:underline">
                (469) 323-1582
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Murphy Services</h3>
              <p className="text-gray-400">Professional plumbing services in Prosper, TX</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">
                <a href="tel:(469) 323-1582" className="hover:text-accent transition-colors">
                  (469) 323-1582
                </a>
              </p>
              <p className="text-gray-400">Prosper, TX</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Murphy Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
