import { combineReducers } from 'redux';
import PhotosReducer from './PhotosReducer';
import Albums from './AlbumReducer';

export default combineReducers({
  albums: Albums,
  photo: PhotosReducer
});