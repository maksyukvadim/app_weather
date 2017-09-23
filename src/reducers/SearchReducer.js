import Rx from "rxjs";
import searchActions from "../actions/searchActions";
import { API_KEY_GOOGLE_MAP } from '../constants';
const initialState = {
    towns: [],
    townInSearch:''
};

const SearchReducer$ = Rx.Observable
  .of(() => initialState)
  .merge(
      searchActions.searchTown.flatMap((query) => Rx.Observable
        .ajax({ url:`https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY_GOOGLE_MAP}&new_forward_geocoder=true&address=${query}`,
                crossDomain: true })
        .retryWhen(err$ => [])
            .map(payload => state => ({...state, towns: payload.response.results }))
      ),
      searchActions.activeTown.map(payload => state => ({...state, townInSearch: payload})),
      searchActions.clearTowns.map(payload => state => ({...state, towns: []}))

  );

export default SearchReducer$;
