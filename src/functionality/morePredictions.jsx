import { useEffect, useContext, useState } from "react";
import { ImportantValues } from "../assets/createdCon";

function MorePredictions() {
  const { lat, lon } = useContext(ImportantValues);
  const [precipation, setPrecipation] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=precipitation,relative_humidity_2m`,
      );
      const data = await response.json();

      setPrecipation(data.current.precipitation);
      setHumidity(data.current.relative_humidity_2m);
    }
    fetchUrl();
  }, [lat, lon]);

  return (
    <>
      <p>Precipation: {precipation} %</p>
      <p>Humidity: {humidity} %</p>
    </>
  );
}

export default MorePredictions;
