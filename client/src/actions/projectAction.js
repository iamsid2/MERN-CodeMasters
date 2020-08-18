import axios from 'axios';
import { GET_ERRORS } from './types';

//Add Projects
export const addProject = (project, history) => dispatch => {
    axios
        .post('/api/project',project)
        .then(response => {
            history.push('/dashboard')
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload: err.response.data
            });
        });
}

// //View Project
// export const getProjects = () => dispatch => {
//     axios
//         .get('/api/project/all')
//         .then(response => 
//             dispatch({
//             type: GET_PROJECT,
//             payload: response.data
//         })
//         )
//         .catch(err => {
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             });
//         });
// }