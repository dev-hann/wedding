"use client";
import { useState, useEffect } from "react";

export default function AudioFloatButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = new Audio(
      `${process.env.NEXT_PUBLIC_BASE_PATH}/audio/bgm.mp3`,
    );
    setAudio(audioElement);

    // 오디오가 끝나면 자동으로 재생 상태 변경
    audioElement.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audioElement.pause();
      setAudio(null);
    };
  }, []);

  const togglePlay = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => console.error("오디오 재생 실패:", error));
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className="bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
        aria-label={isPlaying ? "음악 정지" : "음악 재생"}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
}

// 아이콘 컴포넌트 분리
const PauseIcon = () => (
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
);

const PlayIcon = () => (
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
);
