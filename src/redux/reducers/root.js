const initialState = {
    tasks: [],
    error: null
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case "CREATE_TASK_SUCCESS":
            return{
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case "CREATE_TASK_FAILURE":
            return{
                ...state,
                error: action.payload
            }
        case "LOAD_TASKS_SUCCESS":
            return{
                ...state,
                tasks: [...action.payload]
            }
        case "LOAD_TASKS_FAILURE":
            return{
                ...state,
                error: action.payload
            }
        case "DELETE_TASK_FAILURE":
            return{
                ...state,
                error: action.payload
            } 
        case "UPDATE_TASK_FAILURE":
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;