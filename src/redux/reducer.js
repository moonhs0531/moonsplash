import { combineReducers } from 'redux';

import appReducer from './app/slice';
import photosReducer from './photos/slice';
import topicsReducer from './topics/slice';
import searchReducer from './search/slice';
import popupReducer from './popup/slice';

const reducer = combineReducers({
  app: appReducer,
  photos: photosReducer,
  topics: topicsReducer,
  search: searchReducer,
  popup: popupReducer,

});
export default reducer;
