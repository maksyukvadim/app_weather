import Rx from "rxjs";
import SearchReducer$ from "./SearchReducer";
import CounterReducer$ from "./CounterReducer";
import WeatherReducer$ from "./WeatherReducer";

const reducer$ = Rx.Observable.merge(
  CounterReducer$.map(reducer => ["counter", reducer]),
  SearchReducer$.map(reducer => ["search", reducer]),
  WeatherReducer$.map(reducer => ["weather", reducer]),

);

export default reducer$;
