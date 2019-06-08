
document.querySelector('#input').addEventListener('keypress',function(e){
    if(e.keyCode == 13) {
        var value = document.getElementById('input').value;
        if(value) {
        checkInput(value);
        document.getElementById('input').value = '';
        }
    }
});

function checkInput(text) {
    var temp = document.querySelectorAll('.li-value');
    var doesExist = false;

    for(var i = 0; i < temp.length; i++) {
        if(temp[i].innerHTML == text) doesExist = true;
    }
    if(doesExist == false) addItemToDo(text);
    else alert('List item already exist!');
}

function addItemToDo(text) {
    var li = document.createElement("li");
    var spanElementIcon = document.createElement("span");
    var icon = document.createElement("i");
    var ul = document.querySelector('.todos');
    var icon_name = 'fa fa-remove';
    var spanElementList = document.createElement("span");

    spanElementList.classList.add('li-value');
    spanElementList.append(text);
    icon.classList.add('fa', 'fa-remove');
    li.classList.add('li-text');
    spanElementIcon.classList.add('delete');
    spanElementIcon.append(icon);

    ul.appendChild(li).append(spanElementIcon,spanElementList);

    removeItem();
}

function removeItem(){
    var temp = document.querySelectorAll('.delete');
    for(var i = 0; i < temp.length; i++) {
        temp[i].addEventListener('click',function(){
            this.parentElement.remove();
        });
    }
}

var saveButton = document.querySelector('#save');
var clearButton = document.querySelector('#clear');
var ul = document.querySelector('ul');

function loadList(){
    if(localStorage.getItem('todoList')){
        console.log('loaded');
        ul.innerHTML = localStorage.getItem('todoList');
        removeItem();
    }
}

saveButton.addEventListener('click',function(){
    localStorage.setItem('todoList', ul.innerHTML);
        console.log(localStorage);
})

clearButton.addEventListener('click',function(){
    ul.innerHTML = "";
    localStorage.removeItem('todoList', ul.innerHTML);
})

loadList();