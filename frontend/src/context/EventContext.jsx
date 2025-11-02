// src/context/EventContext.jsx
import { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [events, setEvents] = useState([]);

  const fetchEvents = async (date) => {
    try {
      const res = await fetch(`http://localhost:8000/api?date=${date}`);
      const data = await res.json();

      if (data.Events) setEvents(data.Events);
      else setEvents([]);
    } catch (err) {
      console.error("Failed to fetch events", err);
      setEvents([]);
    }
  };

  return (
    <EventContext.Provider value={{ selectedDate, setSelectedDate, events, setEvents, fetchEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => useContext(EventContext);
