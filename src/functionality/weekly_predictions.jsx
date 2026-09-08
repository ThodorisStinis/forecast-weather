import { useEffect, useContext, useState } from "react";
import { ImportantValues } from "../assets/createdCon";
import ProvideIconsByCode from "./provideIcons";

function WeeklyPrediction() {
  const { lat, lon } = useContext(ImportantValues);
  const [dailyMaxTemp, setDailyMaxTemp] = useState([]);
  const [dailyMinTemp, setDailyMinTemp] = useState([]);
  const [weatherCode, setWeatherCode] = useState([]);

  function showInfo(whichDay) {
    const nextDay = new Date();

    nextDay.setDate(nextDay.getDate() + whichDay);

    const nextDayName = nextDay.toLocaleDateString("en-EN", {
      weekday: "long",
    });

    return (
      <>
        <div className="weekly-day">{nextDayName}</div>
        <div className="weekly-icon">
          {ProvideIconsByCode(weatherCode[whichDay])?.img}
        </div>
        <div className="weekly-max-temp">MAX: {dailyMaxTemp[whichDay]}°C</div>
        <div className="weekly-min-temp">MIN: {dailyMinTemp[whichDay]}°C</div>
        <div className="weekly-weather-describe">
          {ProvideIconsByCode(weatherCode[whichDay])?.name}
        </div>
      </>
    );
  }

  useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max&current=weather_code`,
      );

      const data = await response.json();

      setDailyMaxTemp(data.daily.temperature_2m_max);
      setDailyMinTemp(data.daily.temperature_2m_min);
      setWeatherCode(data.daily.weather_code);
    }
    fetchUrl();
  }, [lat, lon]);

  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((day) => {
        return (
          <div className={"day" + day} key={day}>
            {showInfo(day)}
          </div>
        );
      })}
    </>
  );
}

export default WeeklyPrediction;
