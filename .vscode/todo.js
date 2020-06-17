const todoForm = document.querySelector(".js-toDoForm"),

  toDoInput = todoForm.querySelector("input"),

  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function filterFn(toDo) {
    return toDo.id === 1
}

const toDos = [];


function deleteToDo(event) {
   const btn = event.target,;
    const li = btn.ParentNode;
    toDoList.removeChild(li);
    const clearnToDos = toDos.filter(function(todo){
        return toDo.id !== parseInt (li.id);
    });
    toDos = cleanToDos;
    saveToDos ();

    
}


function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON,stringify(toDos));
}



function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innertext = "😀";
  delBtn.addEventListener("click", deleteToDo)
  const span = document.createElement("span");
  span.innerHTML = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  const toDoObj = {
      text : text
      id = toDos.length + 1
  };
  toDos.push(toDoObj);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = loacalStorage.getIem(TODOS_LS);
  if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
      });
  }
}

function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
