import { FC, useState } from "react";
import CalenderItem from "../../components/CalenderItem";
import useCalanderDays from "../../hooks/useCalanderDays";
import { IDay, IEvents } from "../../interfaces/global";

interface props {
    days: IDay[];
}

const Calender: FC<props> = ({ days }) => {
    return (
        <div className="bg-gradient-to-tr from-purple-500 to-indigo-700 h-screen">
            <div className="grid grid-cols-7 grid-rows-6 h-screen gap-2 p-2">
                {days.map((day, index) => {
                    return <CalenderItem key={index} value={day} />;
                })}
            </div>
        </div>
    );
};

export default Calender;
