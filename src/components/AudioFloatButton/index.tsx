"use client";
import { useState, useEffect, useRef } from "react";

export default function AudioFloatButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToast, setShowToast] = useState(true);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener("play", playAudio);
    audio.addEventListener("pause", pauseAudio);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  }, []);

  const playAudio = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <audio
        ref={audioRef}
        className="hidden"
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/audio/bgm.mp3`}
        autoPlay={true}
        loop={true}
      />
      <button
        onClick={togglePlay}
        className="bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
        aria-label={isPlaying ? "음악 정지" : "음악 재생"}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      {showToast && (
        <div className="duration-500 ease-in-out animate-fade-in">
          <span>🎵 배경음악이 있어요</span>
          <button
            onClick={playAudio}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            재생
          </button>
        </div>
      )}
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
