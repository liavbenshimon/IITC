const elToDoInput = document.getElementById("todo-input");
const elToDoForm = document.getElementById("todo-form");
const elToDoList = document.getElementById("todo-list");
//
const filterAllBtn = document.getElementById('filter-all');
const filterCompletedBtn = document.getElementById('filter-completed');
const filterUncompletedBtn = document.getElementById('filter-uncompleted');

// 
elToDoForm.addEventListener("submit", (ev)=>{
  ev.preventDefault();
  const li = document.createElement("li")
  li.textContent = elToDoInput.value;
  elToDoList.appendChild(li)
  elToDoInput.value = "";


  
  li.addEventListener("click", ()=>{
    li.classList.toggle("completed");
  })
  
  
  //Createing delete button 

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = `Delete`;
  deleteBtn.classList.add(`delete-btn`)
  li.appendChild(deleteBtn)
  deleteBtn.addEventListener("click",(ev)=>{
    const todoItem = deleteBtn.parentNode;
    ev.stopPropagation();
    todoItem.remove(todoItem);
  })  
})

//Create filter buttons

filterAllBtn.addEventListener('click', () => {
  const todos = document.querySelectorAll('#todo-list li');
  for (let i = 0; i < todos.length; i++) {
    todos[i].style.display = 'list-item';
    }
});




filterCompletedBtn.addEventListener('click', () => {
  const todos = document.querySelectorAll('#todo-list li');
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].classList.contains('completed')) {
        todos[i].style.display = 'list-item'; 
      } else {
        todos[i].style.display = 'none';
      }
    }});


  
  
  filterUncompletedBtn.addEventListener('click', () => {
    const todos = document.querySelectorAll('#todo-list li');
    for (let i = 0; i < todos.length; i++) {
      if (!todos[i].classList.contains('completed')) {
          todos[i].style.display = 'list-item'; 
        } else {
          todos[i].style.display = 'none';
        }
      }});










































