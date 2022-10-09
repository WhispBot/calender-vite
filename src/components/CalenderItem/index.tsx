import { FC } from "react";
import { IDay } from "../../interfaces/global";
import EventItem from "../EventItem";

interface props {
    value: IDay;
}

const CalenderItem: FC<props> = ({ value }) => {
    return (
        <div
            className={`bg-neutral-800 rounded-2xl p-4 relative select-none
                                ${value.padding ? "opacity-40" : "opacity-80"}`}
        >
            <h1
                className={`text-3xl  absolute right-3 top-3 ${
                    value.currentDay ? "text-teal-300 underline" : "text-white opacity-40"
                }`}
            >
                {Number(value.date.split("/")[0]) === 1
                    ? `${value.date.split("/")[1]}-${value.date.split("/")[0]}`
                    : value.date.split("/")[0]}
            </h1>

            {value.events.map((event) => {
                return <EventItem text={event.body} />;
            })}
        </div>
    );
};

export default CalenderItem;
