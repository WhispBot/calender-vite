import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { IDay, IEvent, IEvents } from "../interfaces/global";

const isPaddingDay = (i: number, daysInMonth: number, start: number): boolean => {
    if (i <= start) {
        return true;
    } else if (i > daysInMonth + start) {
        return true;
    } else {
        return false;
    }
};

const hasEvents = (events: IEvents[], date: string): IEvent[] | null => {
    events.forEach((value) => {
        if (date === value.date) {
            return value.events;
        }
    });

    return null;
};

const isCurrentDay = (date: string) => {
    const toDay = dayjs().format("DD/MM");
    if (date === toDay) {
        return true;
    } else {
        return false;
    }
};

const useCalanderDays = (events: IEvents[] = []) => {
    const [days, setDays] = useState<IDay[]>([]);
    const [nav, setNav] = useState<number>(0);

    useEffect(() => {
        const currentMonth = dayjs().month();

        const dt = dayjs().set("month", currentMonth + nav);

        const month = dt.month();
        const year = dt.year();

        const firstDayOfMonth =
            Number(dayjs(`${dt.year()}-${dt.month() + 1}-${1}`).format("d")) - 1;
        const daysInMonth = dayjs(`${dt.year()}-${dt.month() + 1}-${1}`).daysInMonth();

        const temp: IDay[] = [];
        for (let i = 1; i <= 42; i++) {
            const date = dt.date(i - firstDayOfMonth);
            const dateFormat = date.format("DD/MM/YYYY");
            const dayString = date.format("dddd");
            temp.push({
                day: dayString,
                date: dateFormat,
                events: [],
                padding: isPaddingDay(i, daysInMonth, firstDayOfMonth),
                currentDay: isCurrentDay(date.format("DD/MM")),
            });

            //add events
            const eventList = hasEvents(events, dateFormat);
            if (eventList !== null) temp[i - 1].events = eventList;
        }

        setDays(temp);
    }, [nav, events]);

    return { days, setNav };
};

export default useCalanderDays;
