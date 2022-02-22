import SubMain from "./components/SubMain";
import { DarkContextComponent } from "./contexts/DarkModeContext";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DarkContextComponent>
          <SubMain />
        </DarkContextComponent>
      </header>
    </div>
  );
}

export default App;
