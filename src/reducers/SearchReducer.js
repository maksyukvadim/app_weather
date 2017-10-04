import Rx from "rxjs";
import searchActions from "../actions/searchActions";
import { API_KEY_GOOGLE_MAP, API_GOOGLE_URL } from '../constants';
const initialState = {
    towns: [],
    geopositionTown: '',
    defaultValueInput: ''
};

const SearchReducer$ = Rx.Observable
  .of(() => initialState)
  .merge(
      searchActions.searchTown.flatMap((query) => Rx.Observable
        .ajax({ url:`${API_GOOGLE_URL}key=${API_KEY_GOOGLE_MAP}&new_forward_geocoder=true&address=${query}`,
                crossDomain: true })
        .retryWhen(err$ => [])
            .map(payload => state => ({...state, towns: payload.response.results }))
      ),
      searchActions.searchTownByPosition.flatMap((position) => Rx.Observable
          .ajax({ url:`${API_GOOGLE_URL}latlng=${position.lat},${position.lng}&key=${API_KEY_GOOGLE_MAP}&result_type=sublocality`,
              crossDomain: true })
          .retryWhen(err$ => [])
          .map(payload => state => ({...state, geopositionTown: payload.response.results }))
      ),
      searchActions.clearTowns.map(payload => state => ({...state, towns: []})),
      searchActions.setDefaultInputValue.map(payload => state => ({...state, defaultValueInput: payload})),
      searchActions.clearGeoposition.map(payload => state => ({...state, geopositionTown: ''}))
  );

export default SearchReducer$;
