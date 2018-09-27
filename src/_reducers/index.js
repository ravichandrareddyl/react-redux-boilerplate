import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { loader } from './loading.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  loader
});

export default rootReducer;