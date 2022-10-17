import { useState } from "react";
import DropMenu from "./components/DropMenu";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PerfectSolution from "./components/PerfectSolution";
import TeamChats from "./components/TeamChats";
import TopSection from "./components/TopSection";

function App() {
  const[nav, setNav] = useState(false)

  const handleChange = () => {
    setNav(!nav);
  };

  return (
    <div>
       <Navbar handleChange={handleChange}/>
       {nav && <DropMenu /> }
       <TopSection />
       <TeamChats />
       <PerfectSolution />
       <Footer />
    </div>
  );
}

export default App;
