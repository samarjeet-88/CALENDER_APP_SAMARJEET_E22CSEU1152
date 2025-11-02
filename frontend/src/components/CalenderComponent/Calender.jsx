import React, { useState } from "react";
import CalenderDate from "./CalenderDate";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEventContext } from "../../context/EventContext";

function Calender() {
  const allMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  const { selectedDate, fetchEvents } = useEventContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: "", description: "" });

  const incrementMonth = () => {
    setDate((prev) => {
      const newMonth = (prev.month + 1) % 12;
      let newYear = prev.year;
      if (newMonth === 0) newYear += 1;
      return { year: newYear, month: newMonth };
    });
  };

  const decrementMonth = () => {
    setDate((prev) => {
      let newMonth = (prev.month - 1 + 12) % 12;
      let newYear = prev.year;
      if (prev.month === 0) newYear -= 1;
      return { year: newYear, month: newMonth };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedDate)
    const res = await fetch("http://localhost:8000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title:modalData.title,
        description:modalData.description,
        date:selectedDate
      }),
    });

    const data = await res.json();
    console.log("Create Event:", data);
    setIsModalOpen(false);
    fetchEvents(selectedDate);
  };

  return (
    <div className="flex flex-col w-full h-full p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 items-center">
          <h1 className="text-gray-800 text-lg font-medium">
            {allMonth[date.month]}
          </h1>
          <h1 className="text-gray-500 text-lg font-normal">{date.year}</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={decrementMonth}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={incrementMonth}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ArrowRightIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <CalenderDate year={date.year} month={date.month} />

      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center mt-6 p-3 bg-blue-600 text-white font-medium rounded-full shadow hover:shadow-lg transition-all w-full hover:cursor-pointer"
      >
        Create
      </button>

      {/* <button
        onClick={fetchAllEventsByDate}
        className="flex items-center justify-center mt-4 p-3 bg-green-600 text-white font-medium rounded-full shadow hover:shadow-lg transition-all w-full hover:cursor-pointer"
      >
        Show All Events
      </button> */}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-lg font-medium mb-4">Create Event</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Title"
                value={modalData.title}
                onChange={(e) =>
                  setModalData({ ...modalData, title: e.target.value })
                }
                className="border border-gray-300 rounded p-2"
                required
              />
              <textarea
                placeholder="Description"
                value={modalData.description}
                onChange={(e) =>
                  setModalData({ ...modalData, description: e.target.value })
                }
                className="border border-gray-300 rounded p-2"
                rows={3}
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 hover:cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:cursor-pointer"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calender;
