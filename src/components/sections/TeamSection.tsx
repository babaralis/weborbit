"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Founder & Strategy Lead",
    bio: "15+ years helping B2B brands turn websites into pipeline machines.",
    image: "/assets/images/img1.webp",
  },
  {
    name: "Jordan Chen",
    role: "Creative Director",
    bio: "Designs experiences that look stunning and convert visitors into customers.",
    image: "/assets/images/img2.webp",
  },
  {
    name: "Sam Patel",
    role: "Head of Development",
    bio: "Builds fast, accessible websites that work perfectly on every device.",
    image: "/assets/images/img3.webp",
  },
  {
    name: "Taylor Kim",
    role: "SEO & Analytics Lead",
    bio: "Turns data into actionable insights that drive measurable growth.",
    image: "/assets/images/img4.webp",
  },
  {
    name: "Morgan Davis",
    role: "Content Strategist",
    bio: "Crafts messaging that cuts through noise and resonates with your buyers.",
    image: "/assets/images/img5.webp",
  },
];

const stats = [
  { value: "7.8+", label: "Avg client satisfaction score /10" },
  { value: "30%", label: "Median uplift in key conversion metrics" },
  { value: "58%", label: "Of clients expand into ongoing programs" },
];

const parseStatValue = (value: string) => {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { number: 0, suffix: "" };

  return {
    number: parseFloat(match[1]),
    suffix: match[2] ?? "",
  };
};

type StatProps = {
  value: string;
  label: string;
};

const AnimatedStat: React.FC<StatProps> = ({ value, label }) => {
  const { number: target, suffix } = parseStatValue(value);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1500;
          const start = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const current = target * progress;
            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasAnimated, target]);

  const isInteger = Number.isInteger(target);
  const formatted = isInteger
    ? Math.round(displayValue).toString()
    : displayValue.toFixed(1);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {formatted}
        {suffix}
      </p>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export const TeamSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Meet the people behind{" "}
            <span className="text-primary">the projects.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A tight-knit team of strategists, designers, developers, and marketers who actually 
            care about your results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-foreground text-lg">{member.name}</h3>
              <p className="text-primary text-sm mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 bg-secondary rounded-2xl p-8 lg:p-12">
          {stats.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
