import { useContext } from "react";
import { ImportantValues } from "../assets/createdCon";

function InputManager() {
  const {
    setLat,
    setLon,
    cityForSearching,
    setCityForSearching,
    setSearchedCity,
  } = useContext(ImportantValues);

  async function HandleNewInformation() {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityForSearching)}&count=1`,
    );

    const data = await response.json();

    setCityForSearching("");
    setLat(data.results[0].latitude);
    setLon(data.results[0].longitude);
    setSearchedCity(data.results[0].name);
  }

  return (
    <div className="created-input-container">
      <div>
        <input
          value={cityForSearching}
          type="text"
          className="input-field"
          placeholder="Search city...."
          onChange={(e) => setCityForSearching(e.target.value)}
        />
      </div>
      <div>
        <button className="search-button" onClick={HandleNewInformation}>
          🔍
        </button>
      </div>
    </div>
  );
}

export default InputManager;
