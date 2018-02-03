import { REHYDRATE } from 'redux-persist/constants'

import {
  PHOTO_LIST_FETCH,
  PHOTO_LIST_FETCH_SUCCESS,
  PHOTO_LIST_FETCH_FAIL,
  PHOTOS_FILTER_CHANGED,
  PHOTO_FETCH,
  PHOTO_FETCH_SUCCESS,
  PHOTO_FETCH_FAIL,
  PHOTO_SELECT,

} from '../actions/types';

const INITIAL_STATE = {
  list: [],
  filteredList: [],
  error: '',
  fetching: false,
  selectedPhoto: {},
  filterText: '',
  rehydrated: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYDRATE:
      var incoming = action.payload.photo
      if (incoming) {
        return { ...state, ...incoming, rehydrated: true }
      }
      return { ...state, rehydrated: true }
    case PHOTO_LIST_FETCH:
      return { ...state, fetching: true };
    case PHOTO_LIST_FETCH_SUCCESS:
      return { ...state, list: action.payload, filteredList: action.payload, fetching: false };
    case PHOTO_LIST_FETCH_FAIL:
      return { ...state, ...action.payload, fetching: false };
    case PHOTO_FETCH:
      return { ...state, fetching: true };
    case PHOTO_FETCH_SUCCESS:
      return { ...state, list: action.payload, filteredList: action.payload, fetching: false };
    case PHOTO_FETCH_FAIL:
      return { ...state, ...action.payload, fetching: false };
    case PHOTO_SELECT:
      return { ...state, ...action.payload };
    case PHOTOS_FILTER_CHANGED:
      return { ...state, ...action.payload, fetching: false };
    default:
      return state;
  }
};
