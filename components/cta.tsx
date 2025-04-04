"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  offerText?: string;
  onButtonClick?: () => void;
}

export function CTA({
  title = "Start Your Child's Reading Adventure Today",
  description = "Our interactive digital books are designed to inspire a love of reading while developing essential literacy skills. Subscribe now to unlock our entire library of captivating stories.",
  buttonText = "Try for Free",
  offerText = "14-day free trial • No credit card required • Cancel anytime",
  onButtonClick = () => {},
}: CTAProps) {
  return (
    <section className="w-full bg-accent py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 p-8 shadow-lg md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative elements */}
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-white/10"></div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.h2
              className="mb-4 font-sans text-3xl font-bold text-white md:text-4xl lg:text-5xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {title}
            </motion.h2>

            <motion.p
              className="mb-8 text-base text-white/90 md:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <button
                onClick={onButtonClick}
                className="group mb-4 flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-sans font-bold text-accent-foreground shadow-lg transition-all hover:bg-opacity-90 hover:shadow-xl"
              >
                <Sparkles size={20} className="text-accent" />
                <span>{buttonText}</span>
                <ArrowRight
                  size={18}
                  className="ml-1 transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-sm text-white/80">{offerText}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
