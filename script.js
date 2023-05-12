const todoForm = document.querySelector("#todo-form");
console.log(todoForm);
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const ulDiv = document.querySelector(".unorder-list-div");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value.length > 0) {
    if (document.querySelector("p")) document.querySelector("p").remove();
    const li = document.createElement("li");
    li.innerText = input.value;
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    li.append(btn);
    ul.append(li);
    input.value = "";
  } else {
    if (!document.querySelector("p")) {
      const errorMsg = document.createElement("p");
      errorMsg.innerText = "Can't add empty field";
      ulDiv.prepend(errorMsg);
    }
  }
});

ul.addEventListener("click", function (e) {
    console.log(e.target.nodeName )
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
  else if ( e.target.nodeName === "BUTTON") {
    console.log(e.target.parentElement)
    e.target.parentElement.remove()
  }
});


