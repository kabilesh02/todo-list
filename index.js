let input=document.querySelector(".getinput");
let list=document.querySelector(".list");

function addtask(){
    if(input.value===''){
        alert("add some task")
    }else{
        let li =document.createElement("li");
        li.textContent =input.value;
        list.appendChild(li);
        let span =document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
        savedata();
        input.value="";
    }
}

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
})

function savedata(){
    localStorage.setItem("list",list.innerHTML);
}
function showdata(){
    list.innerHTML = localStorage.getItem("list");
}
showdata();