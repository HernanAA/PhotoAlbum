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
            //console.log(JSON.stringify(response, null,4))
            return response.json()
        })
        .then((rjson) => {
            if (rjson !== null) {
                onSuccess(dispatch, rjson)
            }
            else {
                onFail(dispatch, { error: 'Ha ocurrido un error al cargar ' + description })
            }
        })
        .catch((error) => {
            console.error(error)
            onFail(dispatch, { error: 'Ha ocurrido un error al cargar ' + description })
        })
    }
};

