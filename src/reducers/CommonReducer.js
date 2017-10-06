import Rx from "rxjs";
import commonAction from "../actions/commonAction";
const initialState = {
    positionPopupGeo: '-100%',
    activeLang: ''
};

const CommonReducer$ = Rx.Observable
    .of(() => initialState)
    .merge(
        commonAction.setGeoPopup.map(payload => state => ({...state, positionPopupGeo: payload})),
        commonAction.setLang.map(payload => state => ({...state, activeLang: payload})),
    );

export default CommonReducer$;
