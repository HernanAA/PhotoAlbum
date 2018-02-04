import { combineReducers } from 'redux';
import PhotosReducer from './PhotosReducer';
import Albums from './AlbumReducer';
import NotPersistedDataReducer from './NotPersistedDataReducer';

export default combineReducers({
  albums: Albums,
  photo: PhotosReducer,
  notPersisted: NotPersistedDataReducer,
});