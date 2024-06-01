import "./App.css";
import { BrowserRequestMocker } from "./mocks/BrowserRequestMocker";

function App() {
  return (
    <BrowserRequestMocker>
      <div>
        <h1>App</h1>
      </div>
    </BrowserRequestMocker>
  );
}

export default App;
