"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Calendar() {
  const event = {
    title: "결혼식",
    date: "2025-05-15",
    className: "bg-pink-300",
  };

  return (
    <div className="max-w-[900px] mx-auto p-6 bg-white shadow-lg rounded-lg">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        locale="ko"
        height="auto"
        dayCellContent={(arg) => {
          const day = arg.date.getDay();
          let colorClass = "text-gray-700"; // 기본 색상 (평일)

          if (day === 0) colorClass = "text-red-500 font-bold"; // 일요일
          if (day === 6) colorClass = "text-blue-500 font-bold"; // 토요일

          return <span className={`${colorClass}`}>{arg.dayNumberText}</span>;
        }}
        events={[event]}
        eventContent={(eventInfo) => (
          <div
            className={`text-white font-semibold px-2 py-1 rounded-md bg-gradient-to-r ${eventInfo.event.classNames} hover:scale-105 transition-transform duration-200`}
          >
            {eventInfo.event.title}
          </div>
        )}
      />
    </div>
  );
}
