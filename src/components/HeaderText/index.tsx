import React from "react";

export default function HeaderText({
  groomName = "윤여환",
  brideName = "송지영",
  date = "2023년 9월 23일, 토요일 오후 2시",
  location = "호텔 라온제나 2층 아모르홀",
}) {
  return (
    <div>
      <div>
        <h1 className="text-3xl md:text-4xl font-light mb-5 tracking-wider flex items-center justify-center">
          <div className="text-center">
            {groomName}
            <div className="text-sm">신랑</div>
          </div>
          <span className="mx-1">♥</span>
          <div className="text-center">
            {brideName}
            <div className="text-sm">신부</div>
          </div>
        </h1>
      </div>
      <div className="pt-4">
        <p className="text-lg font-light mb-3">{date}</p>
        <div className="w-12 h-px bg-gray-300 mx-auto mb-3"></div>
        <p className="text-lg font-medium">{location}</p>
      </div>
    </div>
  );
}
