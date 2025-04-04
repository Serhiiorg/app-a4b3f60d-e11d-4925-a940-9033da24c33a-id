"use client";
import React from "react";
import { Book, Menu, X } from "lucide-react";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CTA } from "@/components/cta";
import { motion } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center gap-2">
            <Book size={32} className="text-primary" />
            <span className="font-sans text-xl font-bold text-foreground">
              StoryWonder
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <a
                  href="#"
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans font-medium rounded-full px-5 py-2 bg-primary text-white hover:bg-primary-600 transition-colors"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-6 shadow-md">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="block py-2 font-sans text-foreground hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 font-sans text-foreground hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="block py-2 font-sans text-foreground hover:text-primary"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 font-sans text-foreground hover:text-primary"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 font-sans text-foreground hover:text-primary"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block mt-2 text-center font-sans font-medium rounded-full px-5 py-2 bg-primary text-white hover:bg-primary-600"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Us Section */}
        <section id="about" className="bg-card py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-8">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 font-sans text-3xl font-bold text-foreground md:text-4xl">
                Our Mission
              </h2>

              <p className="mb-6 text-lg text-muted-foreground">
                At StoryWonder, we believe every child deserves access to
                captivating stories that spark imagination and foster a lifelong
                love of reading.
              </p>

              <p className="mb-6 text-lg text-muted-foreground">
                Founded by a team of educators, children's authors, and
                technology specialists, we're dedicated to creating digital
                books that blend entertainment with educational value. Our
                interactive stories engage young readers while developing
                crucial literacy skills.
              </p>

              <p className="text-lg text-muted-foreground">
                We partner with talented illustrators and storytellers worldwide
                to bring diverse perspectives and cultural richness to our
                growing library, ensuring children from all backgrounds see
                themselves reflected in the stories they read.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features">
          <Features />
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-8">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4 font-sans text-3xl font-bold text-foreground md:text-4xl">
                What Parents & Teachers Say
              </h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial Cards - Coming Soon */}
              <div className="col-span-full py-12 text-center text-muted-foreground">
                Testimonials coming soon!
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <footer className="bg-foreground py-12 text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Book size={32} className="text-white" />
              <span className="font-sans text-xl font-bold">StoryWonder</span>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <div>
                <h4 className="mb-3 font-sans font-semibold">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="opacity-75 hover:opacity-100">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="opacity-75 hover:opacity-100">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="opacity-75 hover:opacity-100">
                      Library
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-sans font-semibold">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="opacity-75 hover:opacity-100">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="opacity-75 hover:opacity-100">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="opacity-75 hover:opacity-100">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-sans font-semibold">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="opacity-75 hover:opacity-100">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="opacity-75 hover:opacity-100">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="opacity-75 hover:opacity-100">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} StoryWonder. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
