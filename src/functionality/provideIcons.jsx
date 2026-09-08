import sunIcon from "../icons/sunny.png";
import cloudIcon from "../icons/cloudy.png";
import rainIcon from "../icons/rain.png";
import snowIcon from "../icons/snow.png";
import thunderIcon from "../icons/thunderstorm.png";
// import windIcon from "../icons/wing.png";

function ProvideIconsByCode(weatherCode) {
  if ([0, 1, 2, 3].includes(weatherCode)) {
    return {
      img: <img src={sunIcon} alt="Sun" className="images img" />,
      name: "Sunny",
    };
  } else if ([45, 48].includes(weatherCode)) {
    return {
      img: <img src={cloudIcon} alt="Clouds" className="images img" />,
      name: "Clouds",
    };
  } else if ([51, 53, 55, 56, 57, 80, 81, 82].includes(weatherCode)) {
    return {
      img: <img src={rainIcon} alt="Rain" className="images img" />,
      name: "Rain",
    };
  } else if ([61, 63, 65, 66, 67, 71, 73, 75, 77].includes(weatherCode)) {
    return {
      img: <img src={snowIcon} alt="Snow" className="images img" />,
      name: "Snow",
    };
  } else if ([85, 86, 95, 96, 99].includes(weatherCode)) {
    return {
      img: <img src={thunderIcon} alt="Thunderstorm" className="images img" />,
      name: "Thunders",
    };
  }
}

export default ProvideIconsByCode;
