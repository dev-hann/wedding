import React from "react";

export interface HeaderTextProps {
  groomName: string;
  brideName: string;
  date: number;
  location: string;
}

export default function HeaderText({
  groomName,
  brideName,
  date,
  location,
}: HeaderTextProps) {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-light tracking-wide flex items-center justify-center">
        <div className="text-center">
          {groomName}
          <div className="text-sm text-gray-500">신랑</div>
        </div>
        <span className="mx-2 text-red-500">♥</span>
        <div className="text-center">
          {brideName}
          <div className="text-sm text-gray-500">신부</div>
        </div>
      </h1>
      <div className="pt-4">
        <p className="text-lg font-light mb-3">{formatDate(date)}</p>
        <div className="w-12 h-px bg-gray-300 mx-auto mb-3"></div>
        <p className="text-lg font-medium">{location}</p>
      </div>
    </div>
  );
}

// 날짜 포맷 함수 추가
const formatDate = (timestamp: number) => {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(timestamp));
};
