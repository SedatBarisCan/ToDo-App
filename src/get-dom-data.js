function getProjectData() {
    let projectTitle;
    const projectTitleInput = document.getElementById('project-name');
    // logic so it dont receive when there is nothing
    if (projectTitleInput.value) {
        projectTitle = projectTitleInput.value;
    } else {
        console.log('Project title is empty.');
        return null; // Explicitly return null if the input is empty
    };


    return projectTitle;
};

// this section is for adding tasks to projects using data in add task section

function getTaskData() {
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const projectSelection = document.getElementById('project-selection').value;

    // Check if any of the input values are empty
    if (!taskTitle || !taskDescription || !dueDate || !priority || !projectSelection) {
        alert("Please fill in all fields");
        return null;
    }

    return [taskTitle, taskDescription, dueDate, priority, projectSelection];
};


function getEditTaskData() {
    const taskTitle = document.getElementById('edit-task-title').value;
    const taskDescription = document.getElementById('edit-task-description').value;
    const dueDate = document.getElementById('edit-due-date').value;
    const priority = document.getElementById('edit-priority').value;
    const projectName = document.querySelector('.edit-task-section').getAttribute('data-project-name');
    const taskKey = document.querySelector('.edit-task-section').getAttribute('data-task-key');

    return [taskTitle, taskDescription, dueDate, priority, projectName, taskKey];
}


export {getProjectData, getTaskData, getEditTaskData};