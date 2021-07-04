import {combineReducers} from 'redux';

import guitarReducer from './guitarReducer';

export default combineReducers({
    guitar: guitarReducer,
})
