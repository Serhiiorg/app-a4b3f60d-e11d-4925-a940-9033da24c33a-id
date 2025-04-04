"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function Hero({
  title = "Discover the Magic of Reading",
  subtitle = "Our interactive digital books bring stories to life with engaging animations, read-along features, and educational content designed to inspire a lifelong love of reading in children ages 3-12.",
  primaryCTA = "Explore Our Library",
  secondaryCTA = "Learn More",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-primary-200"></div>
        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-secondary-200"></div>
        <div className="absolute top-1/2 left-1/3 h-24 w-24 rounded-full bg-accent-200"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:gap-12">
          {/* Hero content */}
          <div className="mb-12 max-w-xl text-center lg:mb-0 lg:text-left">
            <motion.h1
              className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="mb-8 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                onClick={onPrimaryClick}
                className="group flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-sans font-semibold text-primary-foreground transition-all hover:bg-primary-600"
              >
                <BookOpen size={20} />
                <span>{primaryCTA}</span>
                <ArrowRight
                  size={18}
                  className="ml-1 transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={onSecondaryClick}
                className="rounded-lg border-2 border-secondary bg-transparent px-6 py-3 font-sans font-semibold text-secondary-foreground transition-all hover:bg-secondary hover:text-white"
              >
                {secondaryCTA}
              </button>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            className="relative h-[300px] w-full max-w-md lg:h-[400px] lg:max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1022&q=80"
              alt="Children enjoying reading colorful books"
              fill
              className="rounded-xl object-cover shadow-lg"
              priority
            />
            <div className="absolute -bottom-4 -right-4 hidden rounded-lg bg-white p-4 shadow-lg md:block">
              <div className="flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                  <BookOpen size={20} />
                </span>
                <div>
                  <p className="font-sans text-sm font-bold">500+ Books</p>
                  <p className="text-xs text-muted-foreground">For all ages</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
