export const loadTasksRequest = () => ({
    type: "LOAD_TASKS_REQUEST"
});

export const loadTasksSuccess = tasks => ({
    type: "LOAD_TASKS_SUCCESS",
    payload: tasks
});

export const loadTasksFailure = error => ({
    type: "LOAD_TASKS_FAILURE",
    payload: error
});

export const createTask = task => ({
    type: "CREATE_TASK_REQUEST",
    payload: task
});

export const createTaskSuccess = task => ({
    type: "CREATE_TASK_SUCCESS",
    payload: task
});

export const createTaskFailure = error => ({
    type: "CREATE_TASK_FAILURE",
    payload: error
});

export const updateTask = taskId => ({
    type: "UPDATE_TASK_REQUEST",
    payload: taskId
});

export const deleteTaskRequest = taskId => ({
    type: "DELETE_TASK_REQUEST",
    payload: taskId
});

export const deleteTaskSuccess = task => ({
    type: "DELETE_TASK_SUCCESS",
    payload: task
});

export const deleteTaskFailure = error => ({
    type: "DELETE_TASK_FAILURE",
    payload: error
});