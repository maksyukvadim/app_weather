import Rx from "rxjs";
import SearchReducer$ from "./SearchReducer";
import CounterReducer$ from "./CounterReducer";

const reducer$ = Rx.Observable.merge(
  CounterReducer$.map(reducer => ["counter", reducer]),
  SearchReducer$.map(reducer => ["search", reducer])
);

export default reducer$;
