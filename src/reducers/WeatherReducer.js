import Rx from "rxjs";
import { API_KEY_WEATHER } from '../constants';
import weatherActions from "../actions/weatherActions";
import { correctCoords } from '../utils';

const initialState = {
    town: {}
};

const WeatherReducer$ = Rx.Observable
  .of(() => initialState)
  .merge(
    weatherActions.getWeather.flatMap((coords) => {
      console.log(coords.lat.toFixed(2));
  return Rx.Observable
    .ajax({ url:`http://api.openweathermap.org/data/2.5/weather?lat=${correctCoords(coords.lat.toFixed(2))}&lon=${correctCoords(coords.lng.toFixed(1))}&APPID=${API_KEY_WEATHER} `, crossDomain: true })
    .retryWhen(err$ => [])
    .map(payload => state => ({...state, town: payload.response }))
})
  );

export default WeatherReducer$;
