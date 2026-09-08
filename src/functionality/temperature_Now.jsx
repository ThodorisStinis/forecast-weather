import { useEffect, useContext, useState } from "react";
import { ImportantValues } from "../assets/createdCon";
import ProvideIconsByCode from "./provideIcons";

function TemperatureNow() {
  const { lat, lon } = useContext(ImportantValues);
  const [currentTemp, setCurrentTemp] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [weatherCode, setWeatherCode] = useState(null);

  useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,weather_code,wind_speed_10m`,
      );

      const data = await response.json();

      setCurrentTemp(data.current.temperature_2m);
      setWeatherCode(data.current.weather_code);
      setWindSpeed(data.current.wind_speed_10m);
    }
    fetchUrl();
  }, [lat, lon]);

  return (
    <>
      <div className="icon-area">{ProvideIconsByCode(weatherCode)?.img}</div>
      <div className="celsius-area">{currentTemp} °C</div>
      <div className="wind-area">Wind Speed: {windSpeed} %</div>
    </>
  );
}

export default TemperatureNow;
