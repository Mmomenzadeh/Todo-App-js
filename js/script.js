const OlContainer = document.createElement("ol");
document.querySelector(".items").appendChild(OlContainer);


/// create ToDo function :
const createToDo = (TodoData) => {
  /// create todo row and row title ,row deleteButton
  const row = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  const title = document.createElement("h3");
  title.innerHTML = TodoData;

  // delete todo
  deleteBtn.onclick = function () {
    row.remove();
  };
  /// appends:
  row.append(title, deleteBtn);
  OlContainer.appendChild(row);
};

/// get tododata from localStorage :
const todoItem = localStorage.hasOwnProperty("todo")
  ? JSON.parse(localStorage.getItem("todo"))
  : [];

todoItem.forEach((todo) => {
  createToDo(todo.todotitle);
});

// Management of sending data in the form
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("form input").value;

  /// Form validation
  if (inputValue.trim() === "") {
    alert("Value cannot be empty!");
    return;
  }
  /// create todo :
  createToDo(inputValue);

  /// Data stabilization : todo storage with localStorage
  const id = (Math.random() + 1).toString(36).substring(7);
  const data = {
    id,
    todotitle: inputValue,
  };
  todoItem.push(data);
  localStorage.setItem("todo", JSON.stringify(todoItem));
});
