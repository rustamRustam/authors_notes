import { combineReducers } from 'redux';

import { dataReducer } from './data';
import { timeZoneReducer, selectZoneReducer } from './time_zone'

export const rootReducer = combineReducers({
  data: dataReducer,
  current: timeZoneReducer,
});
