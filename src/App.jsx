import { DisplaySection } from "./components/DisplaySection";
import { JumboTron } from "./components/JumboTron";
import { Nav } from "./components/Nav";
import { SoundSection } from "./components/SoundSection";

function App() {

  return (
    <div className="App">
      <Nav/>
      <JumboTron/> 
      <SoundSection/>
      <DisplaySection/>
    </div>
  );
}

export default App;
