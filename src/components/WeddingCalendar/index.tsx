"use client";

import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./index.module.scss";

export interface WeddingCalendarProps {
  weddingDay: number;
}

export default function WeddingCalendar({
  weddingDay: weddingDate,
}: WeddingCalendarProps) {
  const weddingDay = new Date(weddingDate);
  return (
    <div className="flex justify-center">
      <div className={styles.calendarContainer}>
        <h2 className={styles.monthTitle}>2025년 5월</h2>
        <Calendar
          className={styles.weddingCalendar}
          activeStartDate={
            new Date(weddingDay.getFullYear(), weddingDay.getMonth(), 1)
          }
          showNeighboringMonth={false}
          calendarType="gregory"
          value={weddingDay}
          locale="ko"
          formatDay={(locale, date) => {
            return date.getDate().toString();
          }}
          tileClassName={({ date }) => {
            if (
              date.getDate() === weddingDay.getDate() &&
              date.getMonth() === weddingDay.getMonth() &&
              date.getFullYear() === weddingDay.getFullYear()
            ) {
              return styles.weddingDay;
            }
            if (date.getDay() === 6) {
              return styles.saturday;
            }
            if (date.getDay() === 0) {
              return styles.sunday;
            }
            return null;
          }}
          showNavigation={false}
        />
      </div>
    </div>
  );
}
