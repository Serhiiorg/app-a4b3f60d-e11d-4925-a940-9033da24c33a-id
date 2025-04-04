"use client";
import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({
  icon,
  title = "Feature Title",
  description = "This is a description of the amazing feature that helps children learn and enjoy reading.",
}: FeatureCardProps) {
  return (
    <motion.div
      className="h-full rounded-lg bg-card p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>

      <h3 className="mb-3 font-sans text-xl font-bold text-foreground">
        {title}
      </h3>

      <p className="font-serif text-muted-foreground">{description}</p>
    </motion.div>
  );
}
