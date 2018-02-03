import { Actions } from 'react-native-router-flux';
import api from './../helpers/api'
import { genericListFetch } from './UtilActions'

import {
    PHOTO_LIST_FETCH,
    PHOTO_LIST_FETCH_SUCCESS,
    PHOTO_LIST_FETCH_FAIL,
    PHOTOS_FILTER_CHANGED,
    PHOTO_FETCH,
    PHOTO_FETCH_SUCCESS,
    PHOTO_FETCH_FAIL,
    PHOTO_SELECT
} from './types';

export const photoListFetch = () => {
    return (dispatch) => {
        return dispatch(
            genericListFetch(
                PHOTO_LIST_FETCH,
                api.getPhotoListlUrl(),
                loadPhotoListSuccess,
                loadPhotoListFail,
                ' the photos.'
            ))
    }
};

const loadPhotoListSuccess = (dispatch, jsonResponse) => {
    dispatch({
        type: PHOTO_LIST_FETCH_SUCCESS,
        payload:  {list: jsonResponse.photos }
    });
};

const loadPhotoListFail = (dispatch, error) => {
    dispatch({
        type: PHOTO_LIST_FETCH_FAIL,
        payload: { list: [], ...error }
    });
};

export const photoFetch = (id) => {
    return (dispatch) => {
        return dispatch(
            genericListFetch(
                PHOTO_FETCH,
                api.getPhotoListlUrl() + id,
                loadPhotoSuccess,
                loadPhotoFail,
                ' the photo.'
            ))
    }
};

const loadPhotoSuccess = (dispatch, rjson) => {
    dispatch({
        type: PHOTO_FETCH_SUCCESS,
        payload:  {selectedPhoto: rjson.photo }
    });
};

const loadPhotoFail = (dispatch, error) => {
    dispatch({
        type: PHOTO_FETCH_FAIL,
        payload: { selectedPhoto: {}, ...error }
    });
};

export const filterChanged = ({ text }) => {
    return (dispatch, getState) => {
        dispatch({ type: PHOTO_LIST_FETCH });

        const newData = getState().photos.list.filter((item) => {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })

        dispatch({ type: PHOTOS_FILTER_CHANGED, payload: { filterText: text, filteredList: newData } });
    }
}

export const photoSelect = (selectedPhoto) => {
    return ({
        type: PHOTO_SELECT,
        payload: { selectedPhoto }
    });
}