
import React, { useEffect, useState } from "react";
import { useEventContext } from "../../context/EventContext";

function CalenderDate({ year, month }) {
  const allDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const [weeks, setWeek] = useState([]);
  const { selectedDate, setSelectedDate, fetchEvents } = useEventContext();

  const getAllDays = (year, month) => {
    const startDate = new Date(year, month, 1);
    const dayCount = new Date(year, month + 1, 0).getDate();
    const startDay = startDate.getDay();

    const weekArr = [];
    let currentWeek = new Array(startDay).fill(null);

    for (let day = 1; day <= dayCount; day++) {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weekArr.push(currentWeek);
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) currentWeek.push(null);
      weekArr.push(currentWeek);
    }

    setWeek(weekArr);
  };

  useEffect(() => {
    getAllDays(year, month);
  }, [year, month]);

  const today = new Date();

  const handleDateClick = (day) => {
    if (!day) return;

    const monthStr = String(month + 1).padStart(2, "0");
    const dayStr = String(day).padStart(2, "0");
    const dateStr = `${year}-${monthStr}-${dayStr}`;

    setSelectedDate(dateStr);
    fetchEvents(dateStr);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-center border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {allDays.map((day, idx) => (
              <th
                key={idx}
                className="px-2 py-1 text-gray-700 font-medium border border-gray-300"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, idx) => (
            <tr key={idx}>
              {week.map((day, i) => {
                if (!day) return <td key={i} className="bg-white border border-gray-300">&nbsp;</td>;

                const monthStr = String(month + 1).padStart(2, "0");
                const dayStr = String(day).padStart(2, "0");
                const cellDateStr = `${year}-${monthStr}-${dayStr}`;

                const isToday =
                  today.getFullYear() === year &&
                  today.getMonth() === month &&
                  today.getDate() === day;

                const isSelected = selectedDate === cellDateStr;

                return (
                  <td
                    key={i}
                    onClick={() => handleDateClick(day)}
                    className={`py-2 border border-gray-300 transition-colors duration-150 rounded-full text-center ${
                      isSelected
                        ? "bg-blue-500 text-white font-semibold"
                        : isToday
                        ? "bg-blue-700 text-white font-bold"
                        : "hover:bg-gray-100 cursor-pointer"
                    }`}
                  >
                    {day}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CalenderDate;
