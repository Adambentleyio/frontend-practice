// 1. all reducers must only rely on the previous state and the action object.
// 2. never reach out of the reducer. Only use it's input arguments.
// 3. must not mutate its state argument. numbers and strings are immutable but not arrays and objects

export default (state = [], action) => {

    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
        return state;
    }
};