
import React, { useState } from "react";
import { useEventContext } from "../../context/EventContext";

function Event({ title, description, event }) {
  const { selectedDate, fetchEvents } = useEventContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateText, setUpdateText] = useState({ title, description });
  const handleUpdate = () => {
    setUpdateText({ title, description });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: event._id,
          title: updateText.title,
          description: updateText.description,
        }),
      });

      const data = await res.json();
      console.log("Updated Event:", data);
      setIsModalOpen(false);
      fetchEvents(selectedDate);
    } catch (error) {
      console.error("Failed to update event:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch("http://localhost:8000/api", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: event._id,
          date: selectedDate,
        }),
      });

      const data = await res.json();
      console.log("Deleted Event:", data);
      fetchEvents(selectedDate);
    } catch (error) {
      console.error("Failed to delete event:", error);
    }
  };

  return (
    <>
      <div className="relative bg-blue-50 border-l-4 border-blue-600 p-3 rounded-lg shadow-sm text-sm transition-shadow hover:shadow-md">
        <h3 className="font-semibold text-blue-800 mb-1 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-xs truncate">{description}</p>
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={handleUpdate}
            className="p-1 text-black hover:text-blue-600 font-bold hover:cursor-pointer"
          >
            UPDATE
          </button>
          <button
            onClick={handleDelete}
            className="p-1 text-red-600 hover:text-red-800 font-bold hover:cursor-pointer"
          >
            DELETE
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-lg font-medium mb-4">Update Event</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Title"
                value={updateText.title}
                onChange={(e) =>
                  setUpdateText({ ...updateText, title: e.target.value })
                }
                className="border border-gray-300 rounded p-2"
                required
              />
              <textarea
                placeholder="Description"
                value={updateText.description}
                onChange={(e) =>
                  setUpdateText({ ...updateText, description: e.target.value })
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Event;
