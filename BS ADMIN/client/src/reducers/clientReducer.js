import {
    GET_CLIENT
} from '../actions/types';

const initialState = {
    client: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CLIENT:
            return {
                ...state,
                client: action.payload,
                loading: false
            };
        case "CLIENT_LOADING":
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
