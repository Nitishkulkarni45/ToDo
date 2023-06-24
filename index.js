const searchbox = document.getElementById("search-box");
const listcont = document.getElementById("list-cont");
const currentDate = new Date();
let userInput;
const date = new Date(userInput);

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
};
function addTask() {
    if (searchbox.value === '') {
        alert("You must write something!");
    } else {
        let deadlineDate = document.getElementById("deadline-date").value;

        if (deadlineDate === '') {
            alert("Please specify the completion date!");
            return;
        }

        let li = document.createElement("li");
        li.innerHTML = searchbox.value;

        let deadlineDateTime = new Date(deadlineDate);

        if (deadlineDateTime < currentDate) {
            alert("Enter a valid deadline!");
            return;
        }

        listcont.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        if (currentDate >= deadlineDateTime) {
            alert("You have crossed the deadline to finish the following task. Complete it as soon as possible!");
            console.log("You have crossed the deadline!");
        }
    }
    searchbox.value = "";
    saveData();
}



listcont.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",listcont.innerHTML);
}
function showList(){
    listcont.innerHTML = localStorage.getItem("data");
} 
  window.addEventListener("load", function() {
    showList();
  });
    
  const currentDateTime = currentDate.toLocaleString('en-US', options);
  console.log(currentDateTime);
