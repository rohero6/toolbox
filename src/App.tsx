import "./App.css";
import { Ip } from "./components/ip";
import { Quyu } from "./components/quyu";
import { Timestamp } from "./components/timeStr";

function App() {

  return (
    <div className="flex-1 px-3 " >
      <Quyu></Quyu>
      <Timestamp></Timestamp>
      <Ip />
    </div>
  );
}

export default App;
