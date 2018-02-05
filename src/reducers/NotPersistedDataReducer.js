import {
  ALBUMS_FILTER_CHANGED,
  ALBUM_FILTERING
} from '../actions/types';

const INITIAL_STATE = {
  albumFilterText: '',
  filtering: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALBUMS_FILTER_CHANGED:
      return { ...state, albumFilterText: action.payload.albumFilterText};
    case ALBUM_FILTERING:
      return {...state, filtering: !state.filtering}
    default:
      return state;
  }
};
