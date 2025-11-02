
import Calender from "./components/CalenderComponent/Calender";
import Eventpage from "./components/EventComponent/Eventpage";
import { EventProvider } from "./context/EventContext";


function App() {
  // console.log(new Date().getFullYear());

  return (
    <>
    <EventProvider>
      <div className="bg-black min-h-screen w-screen grid grid-cols-1 md:grid-cols-[20%_80%]">
        <div className="bg-red-500 flex flex-col">
          <Calender />
        </div>
        <div className="bg-gray-900 p-4 overflow-y-auto">
          <Eventpage />
        </div>
      </div>
    </EventProvider>
      
    </>
  );
}

export default App;
