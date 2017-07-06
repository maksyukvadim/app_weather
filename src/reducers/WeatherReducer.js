import Rx from "rxjs";
import { API_KEY_WEATHER } from '../constants';
import weatherActions from "../actions/weatherActions";

const initialState = {
    town: {}
};

const WeatherReducer$ = Rx.Observable
  .of(() => initialState)
  .merge(
    weatherActions.getWeather.flatMap((coords) => {
  return Rx.Observable
    .ajax({ url:`http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&APPID=${API_KEY_WEATHER} `, crossDomain: true })
    .retryWhen(err$ => [])
    .map(payload => state => ({...state, town: payload.response }))
})
  );

export default WeatherReducer$;
