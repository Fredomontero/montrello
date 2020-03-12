import { takeEvery, put, all, call } from 'redux-saga/effects';
import{
    createTaskFailure,
    createTaskSuccess,
    loadTasksRequest,
    loadTasksSuccess,
    loadTasksFailure,
    deleteTaskFailure,
    updateTaskFailure
} from '../redux/actions/index';

const prod_url = '/api/';

//LoadTasks
export function* loadTasks(){

    let loadTaskRequestBody = {
        query: `
            query {
                loadTasks{
                    _id
                    text
                    createdAt
                    status
                }
            }
        `
    };

    let loadTaskRequestOptions = {
        method: 'POST',
        body: JSON.stringify(loadTaskRequestBody),
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try{
        let res = yield call(fetch, prod_url, loadTaskRequestOptions);
        let tasksData = yield res.json();
        if(tasksData.errors){
            yield put(loadTasksFailure(tasksData.errors[0].message));
        }else{
            yield put(
                loadTasksSuccess(tasksData.data.loadTasks)
            )
        }
    }catch(error){
        yield put(loadTasksFailure(error));
    }
}

export function* onLoadTasksRequest(){
    yield takeEvery("LOAD_TASKS_REQUEST", loadTasks)
}

//Create Task
export function* createTask(action){
    
    let createTaskBody = {
        query: `
            mutation{
                createTask(TaskInput: {
                    text: "${action.payload.text}",
                    createdAt: "${action.payload.createdAt}",
                    status: "${action.payload.status}"
                }){
                    _id
                    text
                    createdAt
                    status
                }
            }
        `
    };

    let createTaskOptions = {
        method: 'POST',
        body: JSON.stringify(createTaskBody),
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try{
        let res = yield call(fetch, prod_url, createTaskOptions);
        let resData = yield res.json();
        if(resData.errors){
            yield put(createTaskFailure(resData.errors[0].message));    
        }else{
            yield put(createTaskSuccess(resData.data.createTask));
        }
    }catch(error){
        yield put(createTaskFailure(error));
    }
};

export function* onCreateTaskRequest(){
    yield takeEvery("CREATE_TASK_REQUEST", createTask)
};

//Update Task
export function* updateTask(action){
    let updateTaskBody = {
        query: `
            mutation{
                updateTask(TaskData: {
                    _id: "${action.payload.task_id}",
                    status: "${action.payload.status}"
                }){
                    _id
                }
            }
        `
    };

    let updateTaskOptions = {
        method: 'POST',
        body: JSON.stringify(updateTaskBody),
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try{
        let res = yield call(fetch, prod_url, updateTaskOptions);
        let resData = yield res.json();
        if(resData.errors){
            yield put(updateTaskFailure(resData.errors[0].message));    
        }else{
            yield put(loadTasksRequest());
        }
    }catch(error){
        yield put(updateTaskFailure(error));
    }

};

export function* onUpdateTaskRequest(){
    yield takeEvery("UPDATE_TASK_REQUEST", updateTask)
};

//Delete Task
export function* deleteTask(action){

    let deleteTaskBody = {
        query: `
            mutation{
                removeTask(taskId: "${action.payload}"){
                    _id
                }
            }
        `
    };

    let deleteTaskOptions = {
        method: 'POST',
        body: JSON.stringify(deleteTaskBody),
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try{
        let res = yield call(fetch, prod_url, deleteTaskOptions);
        let resData = yield res.json();
        if(resData.errors){
            yield put(deleteTaskFailure(resData.errors[0].message));    
        }else{
            yield put(loadTasksRequest());
        }
    }catch(error){
        yield put(deleteTaskFailure(error));
    }
};

export function* onDeleteTaskRequest(){
    yield takeEvery("DELETE_TASK_REQUEST", deleteTask)
};

export function* taskSagas(){
    yield all([
        call(onLoadTasksRequest),
        call(onCreateTaskRequest),
        call(onUpdateTaskRequest),
        call(onDeleteTaskRequest)
    ]);
};