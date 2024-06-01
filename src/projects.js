
const projects = [];


//creates an object that is the project and there is also functions to add tasks
const createProject = (name, tasks) => {
    return {
        name: name,
        tasks: tasks || [],

        //this addTask and removeTask may change for better coding like these methods can be putted in tasks.js and use it with this factory fucntion
        addTask: function(task) {
            this.tasks.push(task);
        },

        removeTask: function(key) {
            // assigning the tasks array to a filtered version that removes the task we want
            this.tasks = this.tasks.filter(taskItem => taskItem.key !== key);
        },
        //selects task
        selectTask: function(key) {
            return this.tasks.find(task => task.key === key);
        }
    };
};

const addProject = (project) => {
    projects.push(project);
};

function selectProjectByName(projectName) {
    const selectedProject = projects.find(project => project.name === projectName);
    return selectedProject;
};

//puts projects into projectseelction area in task section as option
function populateProjectSelection() {
    const projectSelection = document.getElementById('project-selection');
    //delete section each call
    projectSelection.innerHTML = '';
    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.name;
        option.textContent = project.name;
        projectSelection.appendChild(option);
    });
}


export {createProject};
export {addProject};
export {projects};
export {populateProjectSelection};
export {selectProjectByName};

