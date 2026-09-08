import { useContext } from "react";
import { ImportantValues } from "../assets/createdCon";

function PlaceAndDateInformation() {
  const { searchedCity } = useContext(ImportantValues);

  const today = new Date().toLocaleDateString("en-EN", {
    weekday: "long",
  });
  const month = new Date().toLocaleDateString("en-EN", {
    month: "long",
  });
  const day = new Date().getDate();
  const year = new Date().getFullYear();

  return (
    <>
      <div className="current-day">{today}</div>
      <div className="yearly-info">
        {month} {day}, {year}
      </div>
      <div className="searched-place">۩ {searchedCity}</div>
    </>
  );
}

export default PlaceAndDateInformation;
