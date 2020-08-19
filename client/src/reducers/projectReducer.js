import { GET_ALL_PROJECTS, GET_PROJECT, PROFILE_LOADING } from '../actions/types';

const initialState = {
    project: null,
    projects: null,
    loading: false
}

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_PROJECT: 
                return {
                    ...state,
                    project: action.payload
                }
        case PROFILE_LOADING:
                 return {
                    ...state,
                    loading: true
                }
        case GET_ALL_PROJECTS:
                return {
                    ...state,
                    projects: action.payload,
                    loading: false
                }
        default:
            return state;
    }
}