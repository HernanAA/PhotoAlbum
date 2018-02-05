import api from './../helpers/api'
import { genericListFetch } from './UtilActions'

import {
    PHOTO_LIST_FETCH,
    PHOTO_LIST_FETCH_SUCCESS,
    PHOTO_LIST_FETCH_FAIL,
} from './types';

export const photoListFetch = () => {
    return (dispatch) => {
        return dispatch(
            genericListFetch(
                PHOTO_LIST_FETCH,
                api.getPhotosUrl(),
                loadPhotoListSuccess,
                loadPhotoListFail,
                ' the photos.'
            ))
    }
};

const loadPhotoListSuccess = (dispatch, jsonResponse) => {
    dispatch({
        type: PHOTO_LIST_FETCH_SUCCESS,
        payload:  jsonResponse
    });
};

const loadPhotoListFail = (dispatch, error) => {
    dispatch({
        type: PHOTO_LIST_FETCH_FAIL,
        payload: { list: [], ...error }
    });
};

