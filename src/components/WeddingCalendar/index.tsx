"use client";

import React from "react";
import Calendar from "react-calendar";

export default function WeddingCalendar() {
  const weddingDay = new Date(2025, 5, 28);

  return (
    <Calendar
      className=""
      calendarType="gregory"
      value={weddingDay}
      locale="ko"
      tileClassName={({ date }) => {
        if (date.toDateString() === weddingDay.toDateString()) {
          return "bg-red";
        }
        return "calendar-tile";
      }}
      showNavigation={false}
    />
  );
}
