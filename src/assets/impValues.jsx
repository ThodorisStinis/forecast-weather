import { useState } from "react";
import { ImportantValues } from "./createdCon";

export function MainProvider({ children }) {
  const [lat, setLat] = useState(40.6407);
  const [lon, setLon] = useState(22.9349);
  const [cityForSearching, setCityForSearching] = useState("");
  const [searchedCity, setSearchedCity] = useState("Thessaloniki");

  return (
    <ImportantValues.Provider
      value={{
        lat,
        setLat,
        lon,
        setLon,
        cityForSearching,
        setCityForSearching,
        searchedCity,
        setSearchedCity,
      }}
    >
      {children}
    </ImportantValues.Provider>
  );
}
