import Rx from "rxjs";
import initActions from "../actions/initActions";

const initialState = 0;

const InitReducer$ = Rx.Observable
  .of(() => initialState)
  .merge(
    initActions.init.map(payload => state => state),

  );

export default InitReducer$;
