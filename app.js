//Selectors
const mainBox = document.querySelector(".main-box");
const inputTodo = document.querySelector(".input-todo");
const boxInput = document.querySelector(".box");
const buttonClear = document.querySelector(".button-clear");
const element = document.querySelector(".input-check");  

//Event Listener
boxInput.addEventListener('keydown', addCase);
// element.addEventListener('click', buttonChek);
  


       


//Functions
function addCase(event){
    if (event.code != 'Enter')
        return;

    event.preventDefault();  
    
    mainBox.append(tmp-todo-container.content.cloneNode(true));
          
}

function buttonChek(event){
    if (element.checked) {
        buttonClear.style.display = "block";
    }
}
