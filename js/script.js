const OlContainer = document.createElement("ol");
document.querySelector(".items").appendChild(OlContainer);

const todoItem = localStorage.hasOwnProperty("todo") ? JSON.parse(localStorage.getItem("todo")) : [];



todoItem.forEach(todo => {
    /// create todo row and row title ,row deleteButton
  const row = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  const title = document.createElement("h3");
  title.innerHTML = todo.todotitle;

  // delete todo
  deleteBtn.onclick = function () {
    row.remove();
  };
  /// appends:
  row.append(title, deleteBtn);
  OlContainer.appendChild(row);
})

// Management of sending data in the form
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("form input").value;

  /// Form validation
  if (inputValue.trim() === "") {
    alert("Value cannot be empty!");
    return;
  }
  /// create todo row and row title ,row deleteButton
  const row = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  const title = document.createElement("h3");
  title.innerHTML = inputValue;

  // delete todo
  deleteBtn.onclick = function () {
    row.remove();
  };
  /// appends:
  row.append(title, deleteBtn);
  OlContainer.appendChild(row);

  /// Data stabilization : todo storage with localStorage
  const id = (Math.random() + 1).toString(36).substring(7);
  const data = {
    id,
    todotitle: inputValue,
  };
  todoItem.push(data);
  localStorage.setItem("todo", JSON.stringify(todoItem));
});
