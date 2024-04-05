import NavBar from "./components/NavBar";
import Tabs from "./components/Tabs";
import Timer from "./components/Timer";
import Motos from "./components/Motos";

import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const dob = new Date("2002-06-27");
  return (
    <>
      <NavBar />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "home" ? (
        <>
          <Timer dob={dob} />
        </>
      ) : (
        <Motos />
      )}
    </>
  );
}

export default App;
