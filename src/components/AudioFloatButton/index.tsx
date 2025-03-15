"use client";
import { useState, useEffect, useRef } from "react";

export default function AudioFloatButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("오디오 재생 실패:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 오디오 요소 생성
    audioRef.current = new Audio(
      `${process.env.NEXT_PUBLIC_BASE_PATH}/audio/bgm.mp3`,
    );
    // 오디오 로드 완료 이벤트
    audioRef.current.addEventListener("canplaythrough", () => {
      console.log("오디오 로드 완료");
    });
    // 오디오 종료 이벤트
    audioRef.current.addEventListener("ended", () => {
      setIsPlaying(false);
    });
    // 컴포넌트가 언마운트될 때 오디오 정리
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className="bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none"
        aria-label={isPlaying ? "음악 정지" : "음악 재생"}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
