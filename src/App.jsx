import NavBar from "./components/NavBar";
import Timer from "./components/Timer";

function App() {
  const dob = new Date("2002-06-27");
  return (
    <>
      <NavBar />
      <Timer dob={dob} />
    </>
  );
}

export default App;
