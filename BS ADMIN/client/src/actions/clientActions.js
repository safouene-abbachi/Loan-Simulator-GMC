import axios from 'axios';
import { GET_CLIENT } from './types';

import { returnErrors } from './errorActions';

export const getClient = () => dispatch => {
    dispatch(setClientLoading());
    axios
        .get('/api/Client')
        .then(res =>
            dispatch({
                type: GET_CLIENT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};
export const setClientLoading = () => {
    return {
        type: "CLIENT_LOADING"
    };
};
