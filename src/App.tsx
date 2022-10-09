import { useState } from "react";
import Calender from "./containers/Calender";
import Sidebar from "./containers/Sidebar";
import useCalanderDays from "./hooks/useCalanderDays";
import { IEvents } from "./interfaces/global";

function App() {
    const [events, setEvents] = useState<IEvents[]>([]);

    const { days, nav } = useCalanderDays(events);

    return (
        <div className="grid grid-cols-[15rem_1fr]">
            <Sidebar nav={nav} />
            <Calender days={days} />
        </div>
    );
}

export default App;
