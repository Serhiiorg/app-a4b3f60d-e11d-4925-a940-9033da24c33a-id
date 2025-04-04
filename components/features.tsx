"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  BookType,
  Users,
  Download,
  BadgeHelp,
  Sparkles,
} from "lucide-react";
import { FeatureCard } from "@/components/featurecard";

interface FeaturesProps {
  title?: string;
  subtitle?: string;
}

export function Features({
  title = "Why Choose Our Digital Books",
  subtitle = "Our platform combines cutting-edge technology with expert educational content to create an engaging reading experience that children love and parents trust.",
}: FeaturesProps) {
  const features = [
    {
      icon: <BookOpen size={28} />,
      title: "Interactive Stories",
      description:
        "Stories come alive with animations, sound effects, and interactive elements that respond to touch, keeping children engaged and excited about reading.",
    },
    {
      icon: <BookType size={28} />,
      title: "Educational Content",
      description:
        "Each book is carefully crafted to support learning objectives appropriate for different age groups, helping children develop language and comprehension skills.",
    },
    {
      icon: <Users size={28} />,
      title: "Parent Controls",
      description:
        "Custom settings let parents monitor reading progress, set reading goals, and receive insights about their child's reading habits and comprehension.",
    },
    {
      icon: <Download size={28} />,
      title: "Offline Reading",
      description:
        "Download books to enjoy them without an internet connection – perfect for travel, bedtime reading, or anywhere WiFi isn't available.",
    },
    {
      icon: <BadgeHelp size={28} />,
      title: "Personalized Recommendations",
      description:
        "Our smart algorithm suggests books based on your child's age, interests, and reading level, helping them discover stories they'll love.",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Regular New Releases",
      description:
        "Our library grows every month with new titles across various genres, ensuring there's always something fresh and exciting to explore.",
    },
  ];

  return (
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
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
