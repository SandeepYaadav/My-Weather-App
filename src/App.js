import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import Temprature from "./components/SearchCity";
import Header from "./components/Header";
import SearchCity from "./components/SearchCity";

function App() {
  return (
    <>
    <Header/>
      <div className="bg-[#155e75] h-screen flex justify-center align-top">
        <div className="bg-blue-200 mt-40 w-1/5 h-1/3">
          <SearchCity />
        </div>
        <div className="bg-blue-400 mt-40 w-1/3 h-1/3">Details Component</div>
      </div>
    </>
  );
}

export default App;
