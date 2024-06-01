import './style.css';
import {createProject, addProject, projects, populateProjectSelection, selectProjectByName} from "./projects";
import {createTask, generateUniqueId} from "./tasks";
import {getProjectData, getTaskData, getEditTaskData} from "./get-dom-data";
import {renderProject, setupTaskVisibilityToggles, renderTaskSection, setupProjectVisibilityToggles, setupEditTaskVisibilityToggles, renderAllTasks, populateEditForm} from "./render";


// This uses getProjectData function from ./get-dom-data to make a project object with createProject function from ./projects.js
const submitProjectBtn = document.getElementById('submit-project');
submitProjectBtn.addEventListener('click', () => {

    const projectTitle = getProjectData();
    //check if new projects name same with other projects
    const checkProjectName = projects.find(project => project.name === projectTitle);

    if (projectTitle && !checkProjectName) {
        // Logic for assign the data to createProject function
        const newProject = createProject(projectTitle);
        addProject(newProject);
        renderProject(newProject);
        populateProjectSelection();
        saveProjectsToLocalStorage();  // Save to local storage
    } else {
        // Alert the user and stop further execution
        alert('Project name is either empty or already exists. Please choose a different name.');
        return;
    }
});

//this uses getTaskData and assigns it to createTask factory function then get that task to assign project factory function and after celaring the task section
const submitTask = document.querySelector('.submit-task');
submitTask.addEventListener('click', () => {
    //assigning values to createtask factory function
    const taskData = getTaskData();
    if (taskData[0] || taskData[1] || taskData[2] || taskData[3] || taskData[4]) {
        const taskItem = createTask(taskData[0], taskData[1], taskData[2], taskData[3], taskData[4], generateUniqueId());
        const assignedProject = selectProjectByName(taskData[4]);
        assignedProject.addTask(taskItem);
        renderTaskSection(assignedProject);
        saveProjectsToLocalStorage();  // Save to local storage
    };
});

// this is for handling project selection it will select project that clicked and will return a project object and we will use that for add task functions
const projectSection = document.getElementById('project-list');
projectSection.addEventListener('click', event => {
    // this statement checks that element have class project and it is a button
    if (event.target.classList.contains('project-item') && event.target.tagName === 'BUTTON') {
        const projectName = event.target.textContent;

        // find the corresponding project object then return it 
        const selectedProject = selectProjectByName(projectName);

        // this section renders html and creates a task section
        renderTaskSection(selectedProject);
        };
});


//this section do functions when dom loaded 
document.addEventListener('DOMContentLoaded', () => {

    //loading the data from local storage in each dom content load
    const loadedProjects = loadProjectsFromLocalStorage();
    loadedProjects.forEach(project => {
        addProject(project);
        renderProject(project);
    });


    populateProjectSelection();
    setupTaskVisibilityToggles();
    setupProjectVisibilityToggles();
    setupEditTaskVisibilityToggles();
});



const taskList = document.getElementById('task-list');
taskList.addEventListener('click', event => {
    const target = event.target;
    const taskKey = target.closest('.task-item').getAttribute('data-task-key');
    const projectName = target.closest('.task-item').getAttribute('data-project-name');
    const project = selectProjectByName(projectName);

    //for removing tasks and render task section again
    if (target.classList.contains('delete-task-button') && target.tagName === 'BUTTON') {
        project.removeTask(taskKey);
        renderTaskSection(project);
        saveProjectsToLocalStorage();  // Save to local storage
    };


    if(target.classList.contains('edit-task-button') && target.tagName === 'BUTTON') {
        const taskToEdit = project.selectTask(taskKey);
        if (taskToEdit) {
            // Populate the edit task form fields with task data
            populateEditForm(taskToEdit);
        };

        const editTaskSection = document.querySelector('.edit-task-section');
        
        editTaskSection.setAttribute('data-task-key', taskKey);
        editTaskSection.setAttribute('data-project-name', projectName);
        
    };
});


//for submitting edited task
const submitEditTaskBtn = document.querySelector('.submit-edit-task')
submitEditTaskBtn.addEventListener('click', () => {
    const editedTaskData = getEditTaskData();
    const assignedProject = selectProjectByName(editedTaskData[4]);
    const taskKey = editedTaskData[5];

    assignedProject.removeTask(taskKey);

    const newTaskItem = createTask(editedTaskData[0], editedTaskData[1], editedTaskData[2], editedTaskData[3], editedTaskData[4], editedTaskData[5]);
    assignedProject.addTask(newTaskItem);

    renderTaskSection(assignedProject);
    saveProjectsToLocalStorage();
});


//for rendering all tasks
const allTasksBtn = document.getElementById('all-tasks-button');
allTasksBtn.addEventListener('click', () => {
    renderAllTasks(projects);
});


//for saving and loading data to local storage and updating it

// Save projects to local storage
function saveProjectsToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Load projects from local storage
function loadProjectsFromLocalStorage() {
    const storedProjects = localStorage.getItem('projects');
    if (!storedProjects) return [];
    
    const plainProjects = JSON.parse(storedProjects);
    return plainProjects.map(plainProject => {
        const project = createProject(plainProject.name);
        plainProject.tasks.forEach(task => project.addTask(task));
        return project;
    });
}





