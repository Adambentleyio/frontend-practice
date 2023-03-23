import React, { useEffect } from "react";
import SeasonDisplay from "./SeasonDisplay";

// interface for state with object as longitude and latitude
interface IState {
  lat: number;
  lon: number;
}

type numberOrUndefined = number | undefined;

function App() {
  const [position, setPosition] = React.useState<IState | undefined>(undefined);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [weather, setWeather] = React.useState<numberOrUndefined>();

  let lat = position?.lat;
  let lon = position?.lon;

  useEffect(() => {
    const getCoords = async () => {
      await window.navigator.geolocation.getCurrentPosition((position) =>
        setPosition({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      );
    };

    const getWeather = async () => {
      await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data.current_weather.temperature);
        });
    };

    getCoords();
    getWeather();
  }, [lat, lon]);

  // useEffect(() => {
  //   if (lat && lon) {
  //     fetch(
  //       `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setWeather(data.current_weather.temperature);
  //       });
  //   }
  // }, [lat, lon]);

  return (
    <div className="App">
      <SeasonDisplay
        latitude={position?.lat}
        longitude={position?.lon}
        temperature={weather}
      />
    </div>
  );
}

export default App;
