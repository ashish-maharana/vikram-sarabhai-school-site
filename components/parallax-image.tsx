"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function ParallaxImage({ src, alt, width, height, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [12, -12]);

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl">
      <motion.div style={{ y }}>
        <Image src={src} alt={alt} width={width} height={height} className={className} />
      </motion.div>
    </div>
  );
}

