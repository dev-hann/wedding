import React from "react";

export interface HeaderTextProps {
  groomName: string;
  brideName: string;
  date: number;
  location: string | null;
  isDetailHide: boolean;
}

export default function HeaderText({
  groomName,
  brideName,
  date,
  location,
  isDetailHide,
}: HeaderTextProps) {
  return (
    <div className="text-center">
      <h1 className="text-2xl md:text-4xl font-medium tracking-wide flex items-center justify-center space-x-3">
        <div>
          <p className="text-gray-800">{groomName}</p>
          <p className="text-xs text-gray-500 mt-1">신랑</p>
        </div>
        <span className="text-pink-500 text-xl md:text-2xl">♥</span>
        <div>
          <p className="text-gray-800">{brideName}</p>
          <p className="text-xs text-gray-500 mt-1">신부</p>
        </div>
      </h1>

      <div className="mt-6">
        <p className="text-base md:text-lg text-gray-700">
          {formatDate(date, isDetailHide)}
        </p>
        <div className="w-10 h-px bg-gray-300 mx-auto my-2" />
        <p className="text-base md:text-lg font-medium text-gray-800">
          {location}
        </p>
      </div>
    </div>
  );
}

const formatDate = (timestamp: number, isDetailHide: boolean) => {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: !isDetailHide ? "short" : undefined,
    hour: !isDetailHide ? "2-digit" : undefined,
    minute: !isDetailHide ? "2-digit" : undefined,
  }).format(new Date(timestamp));
};
