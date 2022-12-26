import Main from "./router/Main.jsx";
import ContextProvider from "./contexts/ContextProvider";
import "./App.css";

function App() {
  return (
    <div>
      <ContextProvider>
           <Main />
      </ContextProvider>
    </div>
  );
}

export default App;
