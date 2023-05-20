const todoForm = document.querySelector("#todo-form");
console.log(todoForm);
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const ulDiv = document.querySelector(".unorder-list-div");
const savedTodo = JSON.parse(localStorage.getItem("todo")) || [];

for (let i = 0; i < savedTodo.length; i++) {
  const li = document.createElement("li");
  const para = document.createElement("p");
  const btn = document.createElement("button");
  btn.innerText = "Delete";
  para.innerText = savedTodo[i].todo;
  li.append(para);
  li.append(btn);
  ul.append(li);
  if (savedTodo[i].isDone) para.classList.toggle("done");
}

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value.length > 0) {
    if (document.querySelector("#errorMsg"))
      document.querySelector("#errorMsg").remove();
    const li = document.createElement("li");
    const para = document.createElement("p");
    para.innerText = input.value;
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    li.append(para);
    li.append(btn);
    ul.append(li);
    savedTodo.push({ todo: input.value, isDone: false });
    localStorage.setItem("todo", JSON.stringify(savedTodo));
    input.value = "";
  } else {
    if (!document.querySelector("#errorMsg")) {
      const errorMsg = document.createElement("p");
      errorMsg.setAttribute("id", "errorMsg");
      errorMsg.innerText = "Can't add empty field";
      ulDiv.prepend(errorMsg);
    }
  }
});

ul.addEventListener("click", function (e) {
  const eleme = e.target;
  if (e.target.nodeName === "P") {
    const toggle = e.target.classList.toggle("done");
    for (let element of savedTodo) {
      if (element.todo === eleme.innerText) {
        element.isDone = !element.isDone;
      }
    }
  } else if (e.target.nodeName === "BUTTON") {
    for (let i = 0; i < savedTodo.length; i++) {
      if (savedTodo[i].todo === e.target.previousSibling.innerText) {
        console.log(i);
        savedTodo.splice(i, 1);
      }
    }
    e.target.parentElement.remove();
  }
  localStorage.setItem("todo", JSON.stringify(savedTodo));
});
