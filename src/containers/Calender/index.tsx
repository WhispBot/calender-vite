import { useState } from "react";
import CalenderItem from "../../components/CalenderItem";
import useCalanderDays from "../../hooks/useCalanderDays";
import { IEvents } from "../../interfaces/global";

const Calender = () => {
    const [events, setEvents] = useState<IEvents[]>([]);

    const { days, setNav } = useCalanderDays(events);

    return (
        <div className="bg-gradient-to-tr from-purple-500 to-indigo-700 h-screen">
            <div className="grid grid-cols-7 grid-rows-6 h-screen gap-2 p-2">
                {days.map((day) => {
                    return <CalenderItem value={day} />;
                })}
            </div>
        </div>
    );
};

export default Calender;
