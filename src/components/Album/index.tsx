"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface AlbumProps {
  id: number;
  src: string;
  alt: string;
}

export default function Album() {
  const [images, setImages] = useState<AlbumProps[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const imgs: AlbumProps[] = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      src: `/images/gallery/${i}.jpeg`,
      alt: `웨딩 사진 ${i + 1}`,
    }));
    setImages(imgs);
  }, []);

  // 자동 슬라이드 타이머 설정
  useEffect(() => {
    if (images.length === 0) return;

    timerRef.current = setTimeout(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [selectedIndex, images]);

  const onSelectImage = (index: number) => {
    setSelectedIndex(index);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const selectedImage = images[selectedIndex];

  return (
    <section className="px-4 py-10">
      {/* 메인 이미지 뷰어 */}
      <div className="w-full aspect-[4/3] relative overflow-hidden rounded-xl shadow-md mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage?.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {selectedImage && (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 인디케이터 썸네일 리스트 */}
      <div className="flex justify-center gap-2 overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => onSelectImage(idx)}
            className={`relative w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 transition ${
              selectedIndex === idx
                ? "border-blue-400"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
