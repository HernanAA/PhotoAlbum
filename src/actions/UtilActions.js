export const genericListFetch = (actionType, url, onSuccess, onFail, description) => {
    return (dispatch, getState) => {
        dispatch({ type: actionType });

        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((rjson) => {
            if (rjson !== null) {
                onSuccess(dispatch, rjson)
            }
            else {
                onFail(dispatch, { error: 'oops, something wrong happened trying to load ' + description })
            }
        })
        .catch((error) => {
            console.error(error)
            onFail(dispatch, { error: 'oops, something wrong happened trying to load ' + description })
        })
    }
};

