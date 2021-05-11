//Selectors
// const mainBox = document.querySelector(".main-box");
// const inputTodo = document.querySelector(".input-todo");
// const boxInput = document.querySelector(".box");
const mainBox = $(".main-box");
const inputTodo = $(".input-todo");
const boxInput = $(".box:first");
let buttonClear;
let element;  
let caseContainer = 0;
let txtItem;


//Event Listener
// boxInput.addEventListener('keydown', addCase);

$(boxInput).keypress(addCase);
       


//Functions

function addCase(event){
    if (event.which != 13)
        return;

    event.preventDefault(); 
    
    if(caseContainer == 0){
        //add new case & full template
        $(boxInput).append(tmpButtonAll.content.cloneNode(true));
        $(mainBox).append(tmpTodoContainer.content.cloneNode(true));
        caseContainer = $(".new-case-container");
        $(caseContainer).append(tmpNewCase.content.cloneNode(true));
        $(mainBox).append(tmpMenuButtons.content.cloneNode(true));
        document.body.append(tmpFooter.content.cloneNode(true));
        txtItem = $(".text-check");
        txtItem.html(inputTodo.val());
        $('.button-all').toggleClass('active');
    }
    else{
        //add new case
        $(caseContainer).append(tmpNewCase.content.cloneNode(true));
        txtItem = $(".text-check:empty");
        txtItem.html(inputTodo.val());

        //check 'new-case' for press button 'Completed'
        if($('.button-completed').hasClass('active'))
        {
         $('.new-case').last().hide();   
        }
    }

    //count items & output on display
    countItems();
    buttonClear = $(".button-clear");
}


let countItems = function(){
    let count = $(".new-case").length;

    let countCheck = count - $('.input-check').filter(':checked').length;

    if(count == 0)
    {
        //delete form
        $('.menu-buttons').remove();
        $('.todo-list-container').remove();
        $('.box-footer').remove();
        $('.select-all-button').remove();
        caseContainer = 0;
    }
    else{
        let items = $('.items-count');
        items.html( `${countCheck} items left`);
    }
}


//function visible button "Clear completed" 
function buttonCheck(){
    if($('.input-check').is(':checked'))
    {
        $(buttonClear).css({display: 'block'});
        countItems();
        return;
    }
    else
    {
        countItems();       
        $(buttonClear).css({display: 'none'});
    }
}

$(mainBox).on('click', '.button-active', function(e){
    // visible active style
    toggleActive('.button-active');

    // visible all active check
    let target = $(e.currentTarget);
        let activeCheck = $('.input-check');
        $.map(activeCheck, function(item){
            if($(item).is(':checked')){
                $(item).parent().parent().hide();
            }
            else{
                $(item).parent().parent().show();
            }
        });
});


$(mainBox).on('click', '.button-all', function(){
    // visible active style
    toggleActive('.button-all');


    // visible all check
        let activeCheck = $('.input-check');
        $.map(activeCheck, function(item){
            if($(item).is(':checked') || !($(item).is(':checked'))){
                $(item).parent().parent().show();
            }
        });
    
});


$(mainBox).on('click', '.button-completed', function(){
    // visible active style

    toggleActive('.button-completed');

    // visible check completed
        let activeCheck = $('.input-check');
        $.map(activeCheck, function(item){
            if(!($(item).is(':checked'))){
                $(item).parent().parent().hide();
            }
            else{
                $(item).parent().parent().show();
            }
        });
    
});


//function button delete one element
$(mainBox).on('click', '.delete-check', function(){
    $(this).parent().remove();
    countItems();
});


//add class active style css
function toggleActive(butt){
    let otherButton = $('.menu-checked').children('.active');
    $.map( otherButton, function(item){
        $(item).toggleClass('active');
    });
    $(butt).toggleClass('active');
}

//function all check
$(mainBox).on('click', '.select-all-button', function(event){
    event.preventDefault(); 
    if($(this).hasClass('activated')){
        $('.input-check').prop('checked', false);
        $(this).toggleClass('activated');
    }
    else{
        $('.input-check').prop('checked', true);
        $(this).toggleClass('activated');
    }
    
    buttonCheck()
    countItems();
   
});


$(mainBox).on('click', '.button-clear', function(){
    let activeCheck = $('.input-check');
    $.map(activeCheck, function(item){
        if($(item).is(':checked')){
            $(item).parent().parent().remove();
        }
    });
    countItems();
});