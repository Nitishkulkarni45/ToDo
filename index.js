const searchbox = document.getElementById("search-box");
const listcont = document.getElementById("list-cont");
function addTask(){
    if(searchbox.value === ''){
        alert("You must write something!");
    }
    else{
       let li = document.createElement("li");
       li.innerHTML = searchbox.value;
       listcont.appendChild(li);
       let span = document.createElement("span");
       span.innerHTML= "\u00d7";
       li.appendChild(span);
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
