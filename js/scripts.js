/**
 * Esta es la clase que representa las tareas
 * @class
 */
class Task {
    /**
     * Función constructora que crea una nueva tarea
     * @constructor
     * @param {string} text - Nombre de la tarea
     */
    constructor(text) {
        this.text = text;
        this.completed = false;
    }
}

/**
 * Esta es la clase que permite manejar las tareas
 * @class
 */
class TaskManager {
    /**
     * Función constructora que permite crear una instancia de un manejador de tareas
     * @constructor
     */
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    /**
     * Función que permite añadir una nueva tarea
     * @param {string} text - Nombre de la tarea a añaadir
     */
    addTask(text) {
        const task = new Task(text);
        this.tasks.push(task);
        this.updateLocalStorage();
    }

    /**
     * Función que permite eliminar una tarea
     * @param {number} index - Nombre de la tarea a eliminar
     */
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.updateLocalStorage();
    }

    /**
     * Función que permite cambiar el estado de una tarea
     * @param {number} index - Nombre de la tarea a modificar
     */
    toggleTaskCompleted(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.updateLocalStorage();
    }

    /**
     * Función que permite actualizar la información local de las tareas
     */
    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    /**
     * Función que obtiene la lista de las tareas existentes
     * @returns {Task[]} - Lista de las tareas (de objetos Task)
     */
    getTasks() {
        return this.tasks;
    }
}

const taskManager = new TaskManager();

/**
 * Función que añade una nueva tarea del campo y actualiza la lista
 */
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if (text) {
        taskManager.addTask(text);
        taskInput.value = '';
        renderTasks();
    }
}

/**
 * Función que elimina una tarea según su índice y actualiza la lista
 * @param {number} index - Índice de la tarea que se quiere eliminar
 */
function deleteTask(index) {
    taskManager.removeTask(index);
    renderTasks();
}

/**
 * Función que renderiza y muestra de forma gráfica las listas
 */
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    taskManager.getTasks().forEach((task, index) => {
        const taskEl = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.style.flexGrow = '1';
        if (task.completed) {
            taskText.style.textDecoration = 'line-through';
        }

        // Botón para borrar tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Borrar';
        deleteBtn.onclick = () => deleteTask(index);
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.classList.add('buttonB'); // Añadir clase buttonB

        taskEl.appendChild(taskText);
        taskEl.appendChild(deleteBtn);
        taskList.appendChild(taskEl);
    });
}

/**
 * Función que permite cambiar el estado de la tarea y actualizarla
 * @param {number} index - Índice de la tarea que queremos actualizar
 */
function toggleTaskCompleted(index) {
    taskManager.toggleTaskCompleted(index);
    renderTasks();
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);

renderTasks();
