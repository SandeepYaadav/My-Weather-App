import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import Temprature from "./components/SearchCity";
import Header from "./components/Header";
import SearchCity from "./components/SearchCity";
import Highlights from "./components/Highlights";
import { useEffect, useState } from "react";

function App() {
  const apiKey = "576b496d5efe421c98f102216240706";
  const apiBaseURL = "https://api.weatherapi.com/v1/current.json?";
  const [city, setCity] = useState("New Delhi");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${apiBaseURL}&q=${city}&key=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not valid response found!!");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <>
      <Header />

      <div className="bg-[#155e75] h-screen flex justify-center align-top">
        <div className="bg-blue-200 mt-40 w-1/5 h-1/2">
          {data && (
            <SearchCity
              setCity={setCity}
              stats={{
                temp: data.current.temp_c,
                condition: data.current.condition.text,
                isDay: data.current.is_day,
                location: data.location.name,
                time: data.location.localtime,
              }}
            />
          )}
        </div>

        <div className=" mt-40 w-1/3 h-1/2 p-10 grid grid-cols-2 gap-2">
          <h2 className="text-slate-700 text-2xl col-span-2">
            Today's Highlights
          </h2>
          {data && (
            <>
              <Highlights 
                stats = {{
                  title : "Wind Status",
                  value : data.current.wind_mph,
                  unit : "mph",
                  direction: data.current.wind_dir
                }}/>
              <Highlights 
                stats = {{
                  title : "Humidity",
                  value : data.current.humidity,
                  unit : "%"
              }}/>
              <Highlights 
                stats = {{
                  title : "Visibility",
                  value : data.current.vis_miles,
                  unit : "miles"                  
              }}/>
              <Highlights 
                stats = {{
                  title : "Air Pressure",
                  value : data.current.pressure_mb,
                  unit : "mb"
              }}/>
            
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
