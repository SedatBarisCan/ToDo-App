const createTask = (title, description, dueDate, priority, projectTitle, key) => {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        projectTitle: projectTitle,
        key: key
    };
};

//this function creates unique key for each task
function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}


export {createTask};
export {generateUniqueId};