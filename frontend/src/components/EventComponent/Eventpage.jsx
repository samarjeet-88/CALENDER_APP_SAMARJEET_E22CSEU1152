import React, { useEffect, useState } from "react";
import Event from "./Event";
import { useEventContext } from "../../context/EventContext";

function Eventpage() {
  // const [events, setEvents] = useState([{title:"gym",description:"going to gym"}]);

  const {events,selectedDate}=useEventContext();

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      {events.length === 0 ? (
        <h1 className="text-white font-bold text-2xl">No events to display</h1>
      ) : (
        <div className="flex flex-col gap-4">
          {events.map((event,id) => (
            <Event
              key={event._id}
              title={event.title}
              description={event.description}
              event={event}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Eventpage;
