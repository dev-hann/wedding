"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface AlbumProps {
  id: number;
  src: string;
  alt: string;
}

export default function Album() {
  const [images, setImages] = useState<AlbumProps[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const imgs: AlbumProps[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      src: `/images/gallery/${i}.jpeg`,
      alt: `웨딩 사진 ${i + 1}`,
    }));
    setImages(imgs);
  }, []);

  useEffect(() => {
    if (images.length === 0 || isModalOpen) return;

    timerRef.current = setTimeout(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [selectedIndex, images, isModalOpen]);

  const onSelectImage = (index: number) => {
    setSelectedIndex(index);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const selectedImage = images[selectedIndex];

  return (
    <section className="px-4 py-10">
      {/* 메인 이미지 뷰어 */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="w-full aspect-[4/3] relative overflow-hidden rounded-xl shadow-md mb-6 cursor-pointer"
      >
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

      {/* 썸네일 리스트 */}
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

      {/* 전체화면 모달 */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-full select-none pointer-events-none"
                    style={{
                      objectFit: "contain",
                      userSelect: "none",
                      touchAction: "none",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* 닫기 버튼 */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white"
              >
                <X size={24} />
              </button>

              {/* 좌우 버튼 */}
              <button
                onClick={() => {
                  setSelectedIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1,
                  );
                }}
                className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={() => {
                  setSelectedIndex((prev) => (prev + 1) % images.length);
                }}
                className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
