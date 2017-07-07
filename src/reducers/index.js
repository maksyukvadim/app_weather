import Rx from "rxjs";
import SearchReducer$ from "./SearchReducer";
import InitReducer$ from "./InitReducer";
import WeatherReducer$ from "./WeatherReducer";

const reducer$ = Rx.Observable.merge(
  InitReducer$.map(reducer => ["init", reducer]),
  SearchReducer$.map(reducer => ["search", reducer]),
  WeatherReducer$.map(reducer => ["weather", reducer]),
);

export default reducer$;
