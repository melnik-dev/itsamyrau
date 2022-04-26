import "./App.css";
import Header from "./components/Header";
import Choice from "./components/Choice";
import Chats from "./components/Chats";

function App() {
  return (
    <div className="page__wrapper">
      <Header />
      <div className="content__wrapper">
        <Choice />
        <Chats />
      </div>
    </div>
  );
}

export default App;
