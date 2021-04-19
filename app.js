//Selectors
const inputTodo = document.querySelector(".input-todo");
const boxInput = document.querySelector(".box");

//Event Listener
boxInput.addEventListener('keydown', addCase);



//Functions
function addCase(event){
    if (event.code != 'Enter')
        return;

    event.preventDefault();

    if(document.querySelector('.select-all-button') == null){
    const buttonAllSelect = document.createElement('button');
    buttonAllSelect.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
    buttonAllSelect.classList.add('select-all-button');
    boxInput.insertBefore(buttonAllSelect, inputTodo);
    }
}