import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';


export const fetchPostsAndUsers = () => async (dispatch, getState) => {

    await dispatch(fetchPosts());

    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()

}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data})
};

// export const fetchUser = (id) => async dispatch =>  {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data })
//     };



export const  fetchUser = id => async dispatch => {

    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data })
}


// create a variable fetchUser that takes id as an argument, and calls a function with dispatch
// and pass the id and dispatch to a private function that uses LoDash to memoize the fetchUser
// one line function.

//    export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
//
//    same as
//
//    export const fetchUser = (id) => {
//       return function(dispatch) {
//       return _fetchUser(id, dispatch)
//            }}
//
//     const _fetchUser = _.memoize( async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data })
//            })



