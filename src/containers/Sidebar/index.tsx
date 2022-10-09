import { FC } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { INav } from "../../interfaces/global";

interface props {
    nav: INav;
}

const Sidebar: FC<props> = ({ nav: { nav, setNav, month, year } }) => {
    return (
        <div className="bg-neutral-800 text-white">
            <div className="flex justify-between items-center p-2">
                <button
                    onClick={() => setNav(nav - 1)}
                    className="hover:bg-neutral-500 rounded-md"
                >
                    <BiChevronLeft className="text-4xl" />
                </button>
                <div className="flex gap-3">
                    <span className="text-1xl">{month}</span>
                    <span className="text-1xl">{year}</span>
                </div>

                <button
                    onClick={() => setNav(nav + 1)}
                    className="hover:bg-neutral-500 rounded-md"
                >
                    <BiChevronRight className="text-4xl" />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
