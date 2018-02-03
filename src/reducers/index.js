import { combineReducers } from 'redux';
import PhotosReducer from './PhotosReducer'

export default combineReducers({
  photos: PhotosReducer
});