import "./App.css";

import "./Reset.css";
import "./index.css";
import Header from "./components/Header/Header";
import Chat from "./components/Content/Chat/Chat";

function App() {
  return (
    <div className="page__wrapper">
      <Header />
      <Chat />
    </div>
  );
}

export default App;
