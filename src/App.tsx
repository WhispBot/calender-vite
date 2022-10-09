import Calender from "./containers/Calender";
import Sidebar from "./containers/Sidebar";

function App() {
    return (
        <div className="grid grid-cols-[15rem_1fr]">
            <Sidebar />
            <Calender />
        </div>
    );
}

export default App;
