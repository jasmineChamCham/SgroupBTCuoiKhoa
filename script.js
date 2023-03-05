// localStorage.clear();
var id = 0;
let numTodoTasks = 0;
if (localStorage.getItem("numTodoTasks") == null) {
    numTodoTasks = Array.from(document.querySelector(".task-list-todo").childNodes).length - 2;
    if (numTodoTasks < 3) numTodoTasks = 0
    localStorage.setItem("numTodoTasks", numTodoTasks);
} else {
    numTodoTasks = localStorage.getItem("numTodoTasks");
}
document.querySelector("#number-todo-tasks").innerHTML = numTodoTasks;

let listTodoTasks = new Array();
if (JSON.parse(localStorage.getItem("listTodoTasks")) == null){
    let todoListChildren = Array.from(document.querySelector(".task-list-todo").childNodes);
    for (var i = 1; i <= todoListChildren.length-2; i++){
        listTodoTasks.push(todoListChildren[i].innerHTML);
    }
    numTodoTasks = listTodoTasks.length;
    document.querySelector("#number-todo-tasks").innerHTML = numTodoTasks;
    localStorage.setItem("numTodoTasks", numTodoTasks);
    localStorage.setItem("listTodoTasks", JSON.stringify(listTodoTasks));
} else {
    listTodoTasks = JSON.parse(localStorage.getItem("listTodoTasks"));
    listTodoTasks.forEach((todoTaskHTML) => {
        let todoTask = document.createElement("div");
        todoTask.className = "task";
        todoTask.id = id;
        todoTask.innerHTML = todoTaskHTML;
        document.querySelector(".task-list-todo").appendChild(todoTask);
        id = id + 1;
    });
}

let numDoingTasks = 0;
if (localStorage.getItem("numDoingTasks") == null) {
    numDoingTasks = Array.from(document.querySelector(".task-list-doing").childNodes).length - 2;
    if (numDoingTasks < 3) numDoingTasks = 0
    localStorage.setItem("numDoingTasks", numDoingTasks);
} else {
    numDoingTasks = localStorage.getItem("numDoingTasks");
}
document.querySelector("#number-doing-tasks").innerHTML = numDoingTasks;

let listDoingTasks = [];
if (JSON.parse(localStorage.getItem("listDoingTasks")) == null){
    let doingListChildren = Array.from(document.querySelector(".task-list-doing").childNodes);
    for (var i = 1; i <= doingListChildren.length-2; i++){
        listDoingTasks.push(doingListChildren[i].innerHTML);
    }
    numDoingTasks = listDoingTasks.length;
    document.querySelector("#number-doing-tasks").innerHTML = numDoingTasks;
    localStorage.setItem("numDoingTasks", numDoingTasks);
    localStorage.setItem("listDoingTasks", JSON.stringify(listDoingTasks));
} else {
    listDoingTasks = JSON.parse(localStorage.getItem("listDoingTasks"));
    listDoingTasks.forEach((doingTaskHTML) => {
        let doingTask = document.createElement("div");
        doingTask.className = "task";
        doingTask.id = id;
        doingTask.innerHTML = doingTaskHTML;
        document.querySelector(".task-list-doing").appendChild(doingTask);
        id = id + 1;
    });
}

let numFinishedTasks = 0;
if (localStorage.getItem("numFinishedTasks") == null) {
    numFinishedTasks = Array.from(document.querySelector(".task-list-finished").childNodes).length - 2;
    if (numFinishedTasks < 3) numFinishedTasks = 0
    localStorage.setItem("numFinishedTasks", numFinishedTasks);
} else {
    numFinishedTasks = localStorage.getItem("numFinishedTasks");
}
document.querySelector("#number-finished-tasks").innerHTML = numFinishedTasks;

let listFinishedTasks = new Array();
if (JSON.parse(localStorage.getItem("listFinishedTasks")) == null){
    let finishedListChildren = Array.from(document.querySelector(".task-list-finished").childNodes);
    for (var i = 1; i <= finishedListChildren.length-2; i++){
        listFinishedTasks.push(finishedListChildren[i].innerHTML);
    }
    numFinishedTasks = listFinishedTasks.length;
    document.querySelector("#number-finished-tasks").innerHTML = numFinishedTasks;
    localStorage.setItem("numFinishedTasks", numFinishedTasks);
    localStorage.setItem("listFinishedTasks", JSON.stringify(listFinishedTasks));

} else {
    listFinishedTasks = JSON.parse(localStorage.getItem("listFinishedTasks"));
    listFinishedTasks.forEach((finishedTaskHTML) => {
        let finishedTask = document.createElement("div");
        finishedTask.className = "task";
        finishedTask.id = id;
        finishedTask.innerHTML = finishedTaskHTML;
        document.querySelector(".task-list-finished").appendChild(finishedTask);
        id = id + 1;
    });
}

// ==================================
// form-inputing and form-modify
const formInput = document.querySelector("#form-inputing");
const formModify = document.querySelector("#form-modify");
var modifyUtils = Array.from(document.querySelectorAll(".fa-pencil"));
var deleteUtils = Array.from(document.querySelectorAll(".fa-trash"));
setModifyAndDelete();
document.querySelector("#but-close-form-inputing").addEventListener("click", () => {
    formInput.style.display = 'none';
    document.querySelector(".whole").style.opacity = '1';
});
document.querySelector("#but-close-form-modify").addEventListener("click", () => {
    formModify.style.display = 'none';
    document.querySelector(".whole").style.opacity = '1';
});
function displayForm() { // display form-inputing
    formInput.style.display = 'block';
    document.querySelector(".whole").style.opacity = '0.1';
    formInput.style.backgroundColor = 'white';
}
function toCurrentDate() {
    let date = new Date();
    let strDate = "";
    switch (date.getMonth() + 1) {
        case 1: strDate += "January "; break;
        case 2: strDate += "February "; break;
        case 3: strDate += "March "; break;
        case 4: strDate += "April "; break;
        case 5: strDate += "May "; break;
        case 6: strDate += "June "; break;
        case 7: strDate += "July "; break;
        case 8: strDate += "August "; break;
        case 9: strDate += "September "; break;
        case 10: strDate += "October "; break;
        case 11: strDate += "November "; break;
        case 12: strDate += "December "; break;
        default: strDate += "wrong date";
    }
    strDate += ("" + date.getDate() + ", " + date.getFullYear());
    return strDate;
}
function createTask(category, title, content) {
    id = id + 1;
    let date = toCurrentDate();
    let htmlTask = document.createElement("div");
    htmlTask.className = "task";
    htmlTask.id = "task-" + id;
    numTodoTasks = Math.floor(numTodoTasks) + 1;
    localStorage.setItem("numTodoTasks", numTodoTasks);

    let str = `<div class="task-intro">
    <div class="task-category">
        <u>${category}</u>
    </div>
    <div class="task-manip">
        <i class="fa-solid fa-pencil" id="modify-${id}"></i>
        <i class="fa-solid fa-trash" id="delete-${id}"></i>
    </div>
</div>
<div class="task-caption">
    <div class="task-caption-detail">${title}</div>
    <h3></h3>
</div>
<div class="task-content"> ${content}
</div>
<div class="task-time">
    <i class="fa-solid fa-clock"></i>
    <div class="task-deadline">${date}</div>
</div>`;
    htmlTask.innerHTML = str;
    document.querySelector(".task-list-todo").appendChild(htmlTask); 
    document.querySelector("#number-todo-tasks").innerHTML = numTodoTasks;
    modifyUtils.push(document.querySelector(`#modify-${id}`));
    deleteUtils.push(document.querySelector(`#delete-${id}`));
    setModifyAndDelete();
    listTodoTasks.push(str); 
    localStorage.setItem("listTodoTasks", JSON.stringify(listTodoTasks));
}

document.getElementById("form_category").addEventListener('input', () => {
    if (document.getElementById("form_category").value == "") {
        document.getElementById("form_category").style.border = "2px solid red";
    } else {
        document.getElementById("form_category").style.border = "2px solid black";
    }
});
document.getElementById("form_title").addEventListener('input', () => {
    if (document.getElementById("form_title").value == "") {
        document.getElementById("form_title").style.border = "2px solid red";
    } else {
        document.getElementById("form_title").style.border = "2px solid black";
    }
});
document.getElementById("form_content").addEventListener('input', () => {
    if (document.getElementById("form_content").value == "") {
        document.getElementById("form_content").style.border = "2px solid red";
    } else {
        document.getElementById("form_content").style.border = "2px solid black";
    }
});

function validateFormInfo() {
    let flag = true;
    if (document.getElementById("form_category").value == "") {
        flag = false;
    }
    if (document.getElementById("form_title").value == "") {
        flag = false;
    }
    if (document.getElementById("form_content").value == "") {
        flag = false;
    }
    displayForm();
    return flag;
}

document.querySelector("#but-submit-inputing").addEventListener("click", event => {
    let res = validateFormInfo();
    if (res == true) {
        event.preventDefault();
        let category = document.getElementById("form_category").value;
        let title = document.getElementById("form_title").value;
        let content = document.getElementById("form_content").value;
        createTask(category, title, content);
        formInput.style.display = 'none';
        document.querySelector(".whole").style.opacity = '1';
    }
});

function validateFormModify(){
    let flag = true;
    if (formModify.querySelector("#form_category").value == "") {
        formModify.querySelector("#form_category").style.border = "2px solid red";
        flag = false;
    } else {
        formModify.querySelector("#form_category").style.border = "2px solid black";
    }
    if (formModify.querySelector("#form_title").value == "") {
        formModify.querySelector("#form_title").style.border = "2px solid red";
        flag = false;
    } else{
        formModify.querySelector("#form_title").style.border = "2px solid black";
    }
    if (formModify.querySelector("#form_content").value == "") {
        formModify.querySelector("#form_content").style.border = "2px solid red";
        flag = false;
    } else{
        formModify.querySelector("#form_content").style.border = "2px solid black";
    }
    return flag;
}

let checkedElement ;
function setModifyAndDelete(){
    modifyUtils.forEach((element) => {
        element.addEventListener("click",(event) => {
            checkedElement = event.target;
            formModify.style.display = "block";
            document.querySelector(".whole").style.opacity = '0.1';
            formModify.style.backgroundColor = 'white';
            formModify.querySelector("#form_category").value = element.parentNode.parentNode.parentNode.querySelector(".task-category").textContent.trim();
            formModify.querySelector("#form_title").value = element.parentNode.parentNode.parentNode.querySelector(".task-caption-detail").innerHTML;
            formModify.querySelector("#form_content").value = element.parentNode.parentNode.parentNode.querySelector(".task-content").innerHTML.trim();
        
            let tempTask = element.parentNode.parentNode.parentNode;
            let tempTaskList = tempTask.parentNode;
            let prevStatus =tempTaskList.className;
        });
    });
    
    deleteUtils.forEach((element) => {
        element.addEventListener("click", () => {
            let typeOfTask = element.parentElement.parentElement.parentElement.parentElement.className;
            if (typeOfTask == "task-list-todo") {
                listTodoTasks = 
                    listTodoTasks.filter((t) => t != (element.parentElement.parentElement.parentElement.innerHTML))
                localStorage.setItem("listTodoTasks", JSON.stringify( listTodoTasks ));
                numTodoTasks = listTodoTasks.length;
                localStorage.setItem("numTodoTasks", numTodoTasks);
                document.querySelector("#number-todo-tasks").innerHTML = numTodoTasks;
            }
            else if (typeOfTask == "task-list-doing") {
                listDoingTasks = 
                    listDoingTasks.filter((t) => t != (element.parentElement.parentElement.parentElement.innerHTML))
                localStorage.setItem("listDoingTasks", JSON.stringify( listDoingTasks ));
                numDoingTasks = listDoingTasks.length;
                localStorage.setItem("numDoingTasks", numDoingTasks);
                document.querySelector("#number-doing-tasks").innerHTML = numDoingTasks;
            }
            else if (typeOfTask == "task-list-finished") {
                listFinishedTasks = 
                    listFinishedTasks.filter((t) => t != (element.parentElement.parentElement.parentElement.innerHTML))
                localStorage.setItem("listFinishedTasks", JSON.stringify( listFinishedTasks ));
                numFinishedTasks = listFinishedTasks.length;
                localStorage.setItem("numFinishedTasks", numFinishedTasks);
                document.querySelector("#number-finished-tasks").innerHTML = numFinishedTasks;
            }
            element.parentElement.parentElement.parentElement.remove();
            printAllList("delete here")
        });
    });
}

document.getElementById("but-submit-modify").addEventListener('click', (event) => {
    let res = validateFormModify();

    if (res == true) {
        event.preventDefault();
        console.log(event);

        checkedElement.parentNode.parentNode.parentNode.querySelector(".task-category").textContent = formModify.querySelector("#form_category").value;
        checkedElement.parentNode.parentNode.parentNode.querySelector(".task-caption-detail").innerHTML = formModify.querySelector("#form_title").value;
        checkedElement.parentNode.parentNode.parentNode.querySelector(".task-content").innerHTML = formModify.querySelector("#form_content").value;

        let tempTask = checkedElement.parentNode.parentNode.parentNode;
        let tempTaskList = tempTask.parentNode;
        let prevStatus = tempTaskList.className;

        if (formModify.querySelector("#todo").checked == true){
            changeStatus(prevStatus, "todo", tempTask);
        }
        else if (formModify.querySelector("#doing").checked == true){
            changeStatus(prevStatus, "doing", tempTask);
        }
        else if (formModify.querySelector("#finished").checked == true){
            changeStatus(prevStatus, "finished", tempTask);
        }
        formModify.style.display = 'none';
        document.querySelector(".whole").style.opacity = '1';
    }
    
}); 

function changeStatus(prevStatus, currentStatus, tempTask) {
    printAllList("before change status");
    let prevStatusConverted = prevStatus.split("-")[2];
    if (prevStatusConverted == currentStatus) {
        return;
    }
    if (prevStatusConverted == "todo") {
        let index = listTodoTasks.indexOf(tempTask.innerHTML);
        listTodoTasks.splice(index, 1);
        localStorage.setItem("listTodoTasks", JSON.stringify(listTodoTasks));
        numTodoTasks = listTodoTasks.length;
        document.querySelector("#number-todo-tasks").innerHTML = numTodoTasks;
        localStorage.setItem("numTodoTasks", numTodoTasks);
    } else if (prevStatusConverted == "doing") {
        let index = listDoingTasks.indexOf(tempTask.innerHTML);
        listDoingTasks.splice(index, 1); 
        localStorage.setItem("listDoingTasks", JSON.stringify(listDoingTasks));
        numDoingTasks = listDoingTasks.length;
        document.querySelector("#number-doing-tasks").innerHTML = numDoingTasks;
        localStorage.setItem("numDoingTasks", numDoingTasks);
    } else if (prevStatusConverted == "finished") {
        let index = listFinishedTasks.indexOf(tempTask.innerHTML);
        listFinishedTasks.splice(index, 1);
        localStorage.setItem("listFinishedTasks", JSON.stringify(listFinishedTasks));
        numFinishedTasks = listFinishedTasks.length;
        document.querySelector("#number-finished-tasks").innerHTML = numFinishedTasks;
        localStorage.setItem("numFinishedTasks", numFinishedTasks);
    } 

    if (currentStatus == "todo"){
        document.querySelector(".task-list-todo").appendChild(tempTask);
        listTodoTasks.push(tempTask.innerHTML);
        numTodoTasks = listTodoTasks.length;
        document.querySelector("#number-todo-tasks").innerHTML = numTodoTasks;
        localStorage.setItem("numTodoTasks", numTodoTasks);
        localStorage.setItem("listTodoTasks", JSON.stringify(listTodoTasks));
    } else if (currentStatus == "doing"){
        document.querySelector(".task-list-doing").appendChild(tempTask);
        listDoingTasks.push(tempTask.innerHTML);
        numDoingTasks = listDoingTasks.length;
        document.querySelector("#number-doing-tasks").innerHTML = numDoingTasks;
        localStorage.setItem("numDoingTasks", numDoingTasks);
        localStorage.setItem("listDoingTasks", JSON.stringify(listDoingTasks));
    } else if (currentStatus == "finished"){
        document.querySelector(".task-list-finished").appendChild(tempTask);
        listFinishedTasks.push(tempTask.innerHTML);
        numFinishedTasks = listFinishedTasks.length;
        document.querySelector("#number-finished-tasks").innerHTML = numFinishedTasks;
        localStorage.setItem("numFinishedTasks", numFinishedTasks);
        localStorage.setItem("listFinishedTasks",  JSON.stringify(listFinishedTasks));
    }
    printAllList("after change status")
    console.log("============================");
}

function printAllList(message){
    console.log(message);
    console.log("List todo: ");
    listTodoTasks.forEach((e) => console.log(e));
    console.log("List doing: ");
    listDoingTasks.forEach((e) => console.log(e));
    console.log("List finished: ");
    listFinishedTasks.forEach((e) => console.log(e));
}