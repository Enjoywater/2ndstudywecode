const getId = (id) => document.getElementById(id);

const styleChange = (id, backColor, weight, shadow) => {
  getId(id).style.backgroundColor = backColor;
  getId(id).style.fontWeight = weight;
  getId(id).style.boxShadow = shadow;
};

const btnStyle = () => {
  let id = event.target.id;

  if (getId(id).title === "1") {
    return console.log("변하지않음");
  } else {
    styleChange(id, "#FAFAFA", 400, "0px 0px 1px gray");
    getId(id).title = "1";

    if (id === "todo_btn") {
      styleChange("game_btn", "white", 300, "none");
      getId("game_btn").title = "0";
      getId("todo_container").style.display = "block";
      getId("game_container").style.display = "none";
    } else {
      styleChange("todo_btn", "white", 300, "none");
      getId("todo_btn").title = "0";
      getId("game_container").style.display = "flex";
      getId("todo_container").style.display = "none";
    }
    return console.log("변했음");
  }
};

const inputEnter = () => {
  let eTarget = event.target;
  if (event.keyCode === 13) {
    if (getId(eTarget.id).value === "") {
      return alert("해야 할 일을 적어주세요.");
    }
    makeListBox("todo_list_container", eTarget.value);
    getId(eTarget.id).value = "";
  }
};

const deleteList = () => {
  let delId = event.target.parentElement.id;
  getId(delId).remove();
  return console.log("삭제완료");
};

const makeListText = (id, text) => {
  let listParent = getId(id);
  let createDiv = document.createElement("div");

  createDiv.style.width = "auto";
  createDiv.style.height = "24px";
  createDiv.style.paddingLeft = "4px";
  createDiv.style.color = "#262626";
  createDiv.style.fontSize = "14px";
  createDiv.innerHTML = text;

  listParent.appendChild(createDiv);
};

const makeListBtn = (id) => {
  let listParent = getId(id);
  let createDiv = document.createElement("div");

  createDiv.style.width = "auto";
  createDiv.style.height = "26px";
  createDiv.style.cursor = "pointer";
  createDiv.style.textAlign = "right";
  createDiv.innerHTML = "❌";

  createDiv.addEventListener("click", deleteList);

  listParent.appendChild(createDiv);
};

const makeListBox = (id, text) => {
  let listParent = getId(id);
  let randomId = Math.ceil(Math.random() * 100000);
  let createDiv = document.createElement("div");

  createDiv.setAttribute("id", randomId);

  createDiv.style.display = "flex";
  createDiv.style.justifyContent = "space-between";
  createDiv.style.alignItems = "center";
  createDiv.style.borderBottom = "1px solid #EEEEEE";
  createDiv.style.width = "90%";
  createDiv.style.height = "30px";
  createDiv.style.margin = "10 0 5 0";

  listParent.appendChild(createDiv);

  makeListText(createDiv.id, text);
  makeListBtn(createDiv.id);

  return console.log("생성완료");
};
