export {
  addTodo,
  getTodoList,
  createListElement,
  deleteTodo,
  listClickHandler,
  getLocalStorageItem
};

let tascNumber = 0;
let FromLocalStorage = true;

const $addButton = document.getElementById("addBtn");
const $input = document.getElementById("title");
const $list = document.getElementById("list");
const $priority = document.getElementById("priority");
const $empty = document.getElementById("empty");

$input.addEventListener("keydown", addTodo);
$addButton.addEventListener("click", addTodo);
$list.addEventListener("click", listClickHandler);

function addTodo(e) {
  if (e.keyCode === 13 || e.which === 13 || e.type === "click") {
    e.preventDefault();
    if ($input.value.trim() !== "") {
      let tascName = "todoTasc-" + tascNumber;
      let tasc = {
        id: tascNumber,
        title: $input.value,
        priority: $priority.value
      };
      createListElement(tasc);
      localStorage.setItem(tascName, JSON.stringify(tasc));
      $input.value = "";
    }
  }
  listCheck();
}

function getLocalStorageItem() {
  let storageTascs = Object.keys(localStorage).reduce(function(obj, str) {
    if (str.split("-")[0] === "todoTasc") {
      obj[str] = localStorage.getItem(str);
    }
    return obj;
  }, {});
  // Spllit object ----
  const arrayKey = Object.keys(storageTascs);
  const arrayValue = arrayKey.map(el => JSON.parse(storageTascs[el]));
  //------------Delete items from localS-----------------------------
  Object.keys(arrayKey).forEach(el => localStorage.removeItem(el));
  //------------ Create items list -----------------------------
  for (let el of arrayValue) {
    createListElement(el);
  }
  listCheck();
}

function createListElement(tasc) {
  let liId = "todo-" + tascNumber;

  let $li = document.createElement("li");
  $li.textContent = tasc.title;

  $li.id = liId;

  let $span = document.createElement("span");
  $span.className = "close";
  let $far = document.createElement("i");
  $far.className = "far fa-times-circle";
  $span.dataset.id = liId;
  $span.dataset.action = "delete";
  $far.dataset.id = liId;
  $far.dataset.action = "delete";

  switch (tasc.priority) {
    case "1":
      $li.style.background = "#f94a4a";
      break;
    case "2":
      $li.style.background = "#cea500";
      break;
    case "3":
      $li.style.background = "#0eaf00";
      break;
  }

  tascNumber++;
  $span.append($far);
  $li.append($span);
  $list.append($li);
}

function deleteTodo(id) {
  $list.querySelector(`#${id}`).remove();
  let storageTascs = Object.entries(localStorage).reduce((obj, el) => {  
    let cso = JSON.parse(el[1]);
    if (cso.id == id.split("-")[1]) {
      obj = el[0];
    }
    return obj;
  });
  localStorage.removeItem(storageTascs);
  listCheck();
}

function listClickHandler(event) {
  if (event.target.dataset.action === "delete") {
    deleteTodo(event.target.dataset.id);
  } else {
    event.target.className =
      event.target.className === "checked" ? "" : "checked";
  }
}

function listCheck() {
  let listCount = $list.childElementCount;
  if (listCount > 0) {
    $empty.style.display = "none";
  } else {
    $empty.style.display = "block";
  }
}
