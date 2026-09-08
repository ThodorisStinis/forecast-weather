import "./styles/temperature-now.css";
import "./styles/input.css";
import "./styles/general.css";
import "./styles/place-information.css";
import "./styles/more-predictions.css";
import "./styles/weekly.css";
import TemperatureNow from "./functionality/temperature_Now";
import InputManager from "./functionality/input_functionality";
import PlaceAndDateInformation from "./functionality/place_information";
import MorePredictions from "./functionality/morePredictions";
import WeeklyPrediction from "./functionality/weekly_predictions";

function App() {
  return (
    <div className="starter-container">
      {/* ---------------------------------------------------- */}
      <div className="heading-container">
        <h1 className="heading">Weather App</h1>
      </div>
      <div className="input-container">
        <InputManager />
      </div>
      {/* ---------------------------------------------------- */}

      <div className="todays-container">
        <div className="place-information">
          <PlaceAndDateInformation />
        </div>
        <div className="more-predictions">
          <MorePredictions />
        </div>
        <div className="temperature-now-container">
          <TemperatureNow />
        </div>
      </div>

      {/* ---------------------------------------------------- */}

      <div className="weekly-container">
        <WeeklyPrediction />
      </div>
    </div>
  );
}

export default App;
