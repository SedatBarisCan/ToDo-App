
//item is a refernce to project object
function renderProject(item) {
    const projectSection = document.getElementById('project-list');
    const project = document.createElement('button')
    project.classList.add('project-item')
    project.textContent = item.name;
    projectSection.appendChild(project);
};

// ptoject parameter is for to reference the project name so we can make task to a spesific one
function renderTaskSection(project) {
    const taskSection = document.getElementById('task-list')
    // Clear previous content in task section
    taskSection.innerHTML = '';

    //changing heading to all tasks
    const heading = document.getElementById('task-heading');
    heading.textContent = 'Tasks'

    // Create project name element
    const projectNameElement = document.createElement('h2');
    projectNameElement.textContent = project.name;
    //after you can cahnge this with css and giving only class name for effiency and etc
    projectNameElement.style.textAlign = 'center';

    // Append project name to task section
    taskSection.appendChild(projectNameElement);

    // Iterate over tasks array and create task items
    project.tasks.forEach(task => {
        // Create a new task item element and put data for projects name
        const taskItem = document.createElement('li');
        taskItem.setAttribute('data-project-name', project.name);
        taskItem.classList.add('task-item');

        // Set task key as a custom attribute
        taskItem.setAttribute('data-task-key', task.key);

        // Set task title
        const titleElement = document.createElement('h3');
        titleElement.textContent = task.title;

        //set task duedate
        const dueDate = document.createElement('p');
        dueDate.textContent = task.dueDate;

        // Set task description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = task.description;

        // Set task priority
        const priorityElement = document.createElement('p');
        priorityElement.textContent = `Priority: ${task.priority}`;

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-task-button');

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-task-button');

        // Append elements to task item
        taskItem.appendChild(titleElement);
        taskItem.appendChild(descriptionElement);
        taskItem.appendChild(priorityElement);
        taskItem.appendChild(dueDate);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        // Append task item to task section
        taskSection.appendChild(taskItem);
        
    });
};



// this is for opening task section and closing logic
function setupTaskVisibilityToggles() {
    const addTaskBtn = document.getElementById('add-task');
    const closeTaskSectionBtn = document.querySelector('.close-task-section');
    const overlay = document.getElementById('overlay');
    const addTaskSection = document.querySelector('.add-task-section');
    const submitTaskBtn = document.querySelector('.submit-task');

    //uses the function on top to toggle states when button clicked
    addTaskBtn.addEventListener('click', () => {
        toggleVisibility(addTaskSection, true);
        toggleVisibility(overlay, true);
    });

    //uses the function on top to toggle states when button clicked
    closeTaskSectionBtn.addEventListener('click', () => {
        toggleVisibility(addTaskSection, false);
        toggleVisibility(overlay, false);
    });

    //uses the function on top to toggle states when button clicked
    overlay.addEventListener('click', () => {
        toggleVisibility(addTaskSection, false);
        toggleVisibility(overlay, false);
    });

    //uses the function on top to toggle states when button clicked
    submitTaskBtn.addEventListener('click', () => {
        toggleVisibility(addTaskSection, false);
        toggleVisibility(overlay, false);
    });
};

function setupProjectVisibilityToggles() {
    const addProjectBtn = document.getElementById('add-project');
    const closeProjectSectionBtn = document.querySelector('#close-project-section');
    const overlay = document.getElementById('overlay');
    const addProjectSection = document.querySelector('.add-project-section');
    //it will close section when submited
    const submitProjectBtn = document.getElementById('submit-project');

    //uses the function on top to toggle states when button clicked
    addProjectBtn.addEventListener('click', () => {
        toggleVisibility(addProjectSection, true);
        toggleVisibility(overlay, true);
    });

    //uses the function on top to toggle states when button clicked
    closeProjectSectionBtn.addEventListener('click', () => {
        toggleVisibility(addProjectSection, false);
        toggleVisibility(overlay, false);
    });

    //uses the function on top to toggle states when button clicked
    overlay.addEventListener('click', () => {
        toggleVisibility(addProjectSection, false);
        toggleVisibility(overlay, false);
    });

    //uses the function on top to toggle states when button clicked
    submitProjectBtn.addEventListener('click', () => {
        toggleVisibility(addProjectSection, false);
        toggleVisibility(overlay, false);
    });
};



//in this function there is elements that dynamically created so event listeners work with event delegation
function setupEditTaskVisibilityToggles() {
    const overlay = document.getElementById('overlay');
    const editTaskSection = document.querySelector('.edit-task-section');
    const taskList = document.getElementById('task-list');
    const closeEditTaskSectionBtn = document.querySelector('.close-edit-task-section');
    const submitEditTaskBtn = document.querySelector('.submit-edit-task');

    
    
    taskList.addEventListener('click', event => {
        const target = event.target;
        if(target.classList.contains('edit-task-button') && target.tagName === 'BUTTON') {
            toggleVisibility(editTaskSection, true);
            toggleVisibility(overlay, true);
        };
    });

    submitEditTaskBtn.addEventListener('click', () => {
        toggleVisibility(editTaskSection, false);
        toggleVisibility(overlay, false);
    });

    closeEditTaskSectionBtn.addEventListener('click', () => {
        toggleVisibility(editTaskSection, false);
        toggleVisibility(overlay, false);
    });

    overlay.addEventListener('click', () => {
        toggleVisibility(editTaskSection, false);
        toggleVisibility(overlay, false);
    });
};

function toggleVisibility(element, show) {
    if (show) {
        element.classList.remove('hidden');
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
        element.classList.add('hidden');
    }
}


function renderAllTasks(projects = []) {
    const taskSection = document.getElementById('task-list')
    // Clear previous content in task section
    taskSection.innerHTML = '';

    //changing heading to all tasks
    const heading = document.getElementById('task-heading');
    heading.textContent = 'All Tasks'


    projects.forEach(project => {

        project.tasks.forEach(task => {
            // Create a new task item element and put data for projects name
        const taskItem = document.createElement('li');
        taskItem.setAttribute('data-project-name', project.name);
        taskItem.classList.add('task-item');

        // Set task key as a custom attribute
        taskItem.setAttribute('data-task-key', task.key);

        // Set task title
        const titleElement = document.createElement('h3');
        titleElement.textContent = task.title;

        // Set task description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = task.description;

        // Set task priority
        const priorityElement = document.createElement('p');
        priorityElement.textContent = `Priority: ${task.priority}`;

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-task-button');

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-task-button');

        // Append elements to task item
        taskItem.appendChild(titleElement);
        taskItem.appendChild(descriptionElement);
        taskItem.appendChild(priorityElement);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        // Append task item to task section
        taskSection.appendChild(taskItem);
        });
    });
};

//populates edit form with tasks data
function populateEditForm(taskToEdit) {
    document.getElementById('edit-task-title').value = taskToEdit.title;
    document.getElementById('edit-task-description').value = taskToEdit.description;
    document.getElementById('edit-due-date').value = taskToEdit.dueDate;
    document.getElementById('edit-priority').value = taskToEdit.priority;
}

export {renderProject, setupTaskVisibilityToggles, renderTaskSection, setupProjectVisibilityToggles, setupEditTaskVisibilityToggles, renderAllTasks, populateEditForm};