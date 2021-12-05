import {combineReducers} from "redux";
import appReducer from './app/slice';
import photosReducer from './photos/slice';
import topicsReducer from './topics/slice';
import searchReducer from './search/slice'

const reducer = combineReducers({
    app: appReducer,
    photos: photosReducer,
    topics: topicsReducer,
    search: searchReducer
});
export default reducer;
