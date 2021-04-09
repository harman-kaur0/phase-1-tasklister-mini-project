document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const input = document.querySelector("#new-task-description");
  const tasks = document.querySelector("#tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // console.log(event.target[0].value);
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "x";
    li.innerText = input.value + " ";
    tasks.appendChild(li).appendChild(btn);
    event.target.reset();
    btn.addEventListener("click", function () {
      tasks.removeChild(li);
    });
  });
});
