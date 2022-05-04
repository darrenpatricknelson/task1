import WindDirection from './WindDirection';

export default function WeatherResults(props) {
  const data = props.data;
  return (
    <div className="container">
      <div className="top">
        {/* this will contain the input from the user */}
        <div className="location">
          <h3>
            {data.name}, {data.sys.country}
          </h3>
        </div>
        {/* this will contain the output from the api */}
        <div className="temp">
          <h1>{Math.round(data.main.temp)}°C</h1>
        </div>
        {/* this will contain more descriptive information */}
        <div className="description">
          <p>
            {/* the main description about the weather like = cloudy */}
            {data.weather[0].main},{' '}
            {/* Extra bits of information like = broken clouds */}
            {data.weather[0].description}
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p>
            {/* What the weather feels like but not the actual weather */}
            Feels like {Math.round(data.main.feels_like)}°C.
          </p>
        </div>
        <div className="humidity">
          {/* humidity levels */}
          <p>The humidity is {data.main.humidity}%</p>
        </div>
        <div className="wind">
          <p>
            {/* the wind speed  */}
            Wind speed: {data.wind.speed.toFixed(1)} m/s
          </p>
          <p>
            Wind direction:{' '}
            {/* I've created a component that will dynamically display the wind direction as well as an icon that will rotate in the direction the wind is blowing */}
            <WindDirection degree={data.wind.deg} />
          </p>
        </div>
      </div>
    </div>
  );
}
