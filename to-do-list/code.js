let tasks = [];
const inputEL = document.getElementById("input-el"); 
const saveBtn = document.getElementById("save-btn"); 
const clearBtn = document.getElementById("clear-btn"); 
const ulEL = document.getElementById("ul-el"); 
const tasksLS = JSON.parse(localStorage.getItem("tasks")); 

if (tasksLS) {
  
  tasks = tasksLS; 
  render(tasks); 
}
// saves and renders tasks when save button is clicked
saveBtn.addEventListener("click", function() {
  
  if (inputEL.value !== "") {
    tasks.push(inputEL.value);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  inputEL.value = ""; 
  render(tasks); 
});

// clears everything when clear button is clicked
clearBtn.addEventListener("click", function() {
  localStorage.clear(); 
  console.log(tasksLS); 
  tasks = []; 
  render(tasks); 
});

// renders out the tasks remaining 
function render(tasks) {
  
  let ulStuff = ""; 
  for (let i = 0; i < tasks.length; i++) {
      
      ulStuff += `<li class="task-el" onclick="remove(this.id)" id="${i}">${tasks[i]}</li>`;
  }
  ulEL.innerHTML = ulStuff; 
}

// removes task when it's clicked 
function remove(id) {
  
  let parsedInt = parseInt(id); 
  let newTasks = []
  
  for (let i = 0; i < tasks.length; i++) {
    
    if (i !== parsedInt) {
      
      newTasks.push(tasks[i]); 
    }
  }
  
  tasks = newTasks;
  localStorage.clear(); 
  localStorage.setItem("tasks", JSON.stringify(tasks)); 
  console.log(tasks);
  render(tasks);
}
