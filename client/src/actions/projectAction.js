import axios from 'axios';
import { GET_ERRORS,GET_PROJECT, GET_ALL_PROJECTS, PROFILE_LOADING } from './types';

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

//get current projects
export const getCurrentProject = () => dispatch => {
    axios
         .get('/api/project')
         .then(res => {
             dispatch({
                 type:GET_PROJECT,
                 payload: res.data
             })
         })
         .catch(err => {
             dispatch({
                 type:GET_PROJECT,
                 payload:{}
             })
         })
}

//View Project
export const getProjects = () => dispatch => {
    dispatch(setProfileLoading())
    axios
        .get('/api/project/all')
        .then(response => {
            dispatch({
            type: GET_ALL_PROJECTS,
            payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

//delete a project
export const deleteProject = (id) => dispatch => {
    axios
        .delete(`/api/project/${id}`)
        .then(res => {
            dispatch({
                type:GET_PROJECT,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload: {}
            })
        })
}

const setProfileLoading = () => ({
    type:PROFILE_LOADING
})