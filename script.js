let listStart = document.querySelector(".list_start");
const listEnd = document.querySelector(".list_end");
const addBtn = document.querySelector(".btn_add");
const inputTodo = document.querySelector(".input_todo");
const app = document.querySelector(".todo_list");

// todo
// {
//   status: complete,
//     content:""
// }

addBtn.onclick = function (e) {
  const value = inputTodo.value.trim();
  if (value) {
    const todo = {
      status: "",
      content: value,
    };
    addTodo(todo);
  }
  inputTodo.value = "";
};

function addTodo(todo) {
  let job = document.createElement("div");
  job.classList.add("job_item");
  job.innerHTML = `
      <div class="left">
        <span class="job_item_content">${todo.content}</span>
      </div>
      <div class="right">
        <i class="bi bi-x deleteJob"></i>
      </div>
  `;

  if (todo.status === "completed") {
    job.classList.add("is-active");
  }

  job.onclick = function (e) {
    job.classList.toggle("is-active");
    saveJob();
  };
  const deleteJob = job.querySelector(".deleteJob");
  deleteJob.onclick = function (e) {
    job.remove();
    saveJob();
  };

  listEnd.appendChild(job);
  saveJob();
}

function saveJob() {
  const listJObs = [];
  const jobs = document.querySelectorAll(".job_item");
  jobs.forEach((job) => {
    const content = job.querySelector(".job_item_content").innerText;
    const status = job.getAttribute("class").includes("is-active")
      ? "completed"
      : "";
    console.log(status);
    listJObs.push({
      content,
      status,
    });
  });
  localStorage.setItem("TodoList", JSON.stringify(listJObs));
}

function init() {
  const data = JSON.parse(localStorage.getItem("TodoList"));
  data.forEach((job) => {
    addTodo(job);
  });
}

init();
