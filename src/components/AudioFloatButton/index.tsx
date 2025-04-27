"use client";

import { useState, useEffect, useRef } from "react";

export default function AudioFloatButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryAutoPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("자동재생 실패, 토스트 보여주기 "+error);
        setShowToast(true);

        setTimeout(() => {
          const toastElement = document.querySelector(".toast-slide");
          if (toastElement) {
            toastElement.classList.remove("animate-slide-down");
            toastElement.classList.add("animate-slide-up");
            setTimeout(() => {
              setShowToast(false);
            }, 500); // 올라가는 애니메이션 끝나고 토스트 제거
          }
        }, 2000); // 내려와서 2초 있다가 다시 올라감
      }
    };

    tryAutoPlay();

    return () => {
      // 정리할 타이머가 있으면 여기에
    };
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
    <>
      {/* 토스트 알림 */}
      {showToast && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
          <div className="toast-slide animate-slide-down bg-black text-white text-sm px-4 py-2 rounded-b-md shadow-md mt-2">
            🎵 배경음악이 있어요!
          </div>
        </div>
      )}

      {/* 오디오 버튼 */}
      <div className="fixed top-6 right-6 z-40">
        <audio
          ref={audioRef}
          className="hidden"
          src={`/audio/bgm.mp3`}
          loop
        />
        <button
          onClick={togglePlay}
          className="bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
          aria-label={isPlaying ? "음악 정지" : "음악 재생"}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </>
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
