import { REHYDRATE } from 'redux-persist/constants'

import {
  ALBUMS_FETCH,
  ALBUMS_FETCH_SUCCESS,
  ALBUMS_FETCH_FAIL,
  ALBUMS_FILTER_CHANGED,
  ALBUM_SELECT,
} from '../actions/types';

const INITIAL_STATE = {
  list: [],
  filteredList: [],
  error: '',
  fetching: false,
  selectedAlbum: {},
  rehydrated: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYDRATE:
      var incoming = action.payload.albums
      console.log('REHYDRATE', incoming)
      if (incoming) {
        return { ...state, ...incoming, filteredList: incoming.list, rehydrated: true }
      }
      return { ...state, rehydrated: true }
    case ALBUMS_FETCH:
      return { ...state, fetching: true };
    case ALBUMS_FETCH_SUCCESS:
      return { ...state, list: action.payload, filteredList: action.payload, fetching: false };
    case ALBUMS_FETCH_FAIL:
      return { ...state, ...action.payload, fetching: false };
    case ALBUM_SELECT:
      return { ...state, ...action.payload };
    case ALBUMS_FILTER_CHANGED:
      return { ...state, filteredList: action.payload.filteredList, fetching: false };
    default:
      return state;
  }
};
