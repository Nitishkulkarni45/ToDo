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


function addTask(){
    if(searchbox.value === ''){
        alert("You must write something!");
    }
    else{
       let li = document.createElement("li");
       li.innerHTML = searchbox.value;
       userInput = prompt('Date/Time by which you would wish to complete your task?');
       listcont.appendChild(li);
       
      
       let span = document.createElement("span");
       span.innerHTML= "\u00d7";
       li.appendChild(span);
       if(currentDate>=date){
        alert("You have crossed the time limit set by you to finish the following task. Complete it asap!");
        console.log("You have crossed!");
       }
       
    }
    searchbox.value = "";
    saveData()
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
function showList() {
    listcont.innerHTML = localStorage.getItem("data");
  }
  
  window.addEventListener("load", function() {
    showList();
  });
    
  const currentDateTime = currentDate.toLocaleString('en-US', options);
  console.log(currentDateTime);
//   alert(currentDateTime);
