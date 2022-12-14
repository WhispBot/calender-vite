export interface IDay {
    day: string;
    date: string;
    currentDay?: boolean;
    padding?: boolean;
    events: IEvent[];
}

export interface IEvent {
    body: string;
    color: string;
}

export interface IEvents {
    date: string;
    events: IEvent[];
}

export interface INav {
    nav: number;
    setNav: React.Dispatch<React.SetStateAction<number>>;
    month: string;
    year: string;
}
