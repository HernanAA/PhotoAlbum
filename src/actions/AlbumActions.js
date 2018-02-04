import api from './../helpers/api'
import { genericListFetch } from './UtilActions'

import {
    ALBUMS_FETCH,
    ALBUMS_FETCH_SUCCESS,
    ALBUMS_FETCH_FAIL,
    ALBUMS_FILTER_CHANGED,
    ALBUM_SELECT,
    ALBUM_FILTERING
} from './types';

export const albumsFetch = () => {
    return (dispatch) => {
        return dispatch(
            genericListFetch(
                ALBUMS_FETCH,
                api.getAlbumsUrl(),
                loadAlbumsSuccess,
                loadAlbumsFail,
                ' the albums.'
            ))
    }
};

const loadAlbumsSuccess = (dispatch, jsonResponse) => {
    dispatch({
        type: ALBUMS_FETCH_SUCCESS,
        payload: jsonResponse
    });
};

const loadAlbumsFail = (dispatch, error) => {
    dispatch({
        type: ALBUMS_FETCH_FAIL,
        payload: { list: [], ...error }
    });
};

export const albumFilterPressed = () => {
    return (dispatch, getState) => {
        if (getState().filtering) {
            dispatch({
                type: ALBUM_FILTERING,
                payload: { albumFilterText: '', albumFilteredList: getState().list }
            })
        }
        else{
            dispatch({
                type: ALBUM_FILTERING,
                payload: {}
            })
        }
    }
}

export const albumFilterChanged = ({ text }) => {
    return (dispatch, getState) => {
        //dispatch({ type: ALBUMS_FETCH });

        const newData = getState().albums.list.filter((item) => {
            const itemData = item.title.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })

        dispatch({
            type: ALBUMS_FILTER_CHANGED,
            payload: { albumFilterText: text, albumFilteredList: newData }
        });
    }
}

export const albumSelect = (selectedAlbum) => {
    return ({
        type: ALBUM_SELECT,
        payload: { selectedAlbum }
    });
}