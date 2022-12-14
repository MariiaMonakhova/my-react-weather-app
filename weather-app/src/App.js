import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Seoul" />
      </div>
      <p className="source-link">
        This app is coded by Mariia Monakhova and is{" "}
        <a href="https://github.com/MariiaMonakhova/my-react-weather-app">
          open-sourced
        </a>
      </p>
    </div>
  );
}
