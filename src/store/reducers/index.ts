/**
 *
 * @author Vanderson de moura Vauruk
 */

import {combineReducers} from '@reduxjs/toolkit';
import postsForm from '../posts';

const rootReducer = combineReducers({
  postsForm,
});

export default rootReducer;
