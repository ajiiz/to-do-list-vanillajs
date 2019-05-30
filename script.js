
document.querySelector('#input').addEventListener('keypress',function(e){
    if(e.keyCode == 13) {
        var value = document.getElementById('input').value;
        if(value) {
        addItemToDo(value);
        document.getElementById('input').value = '';
        }
    }
});

function addItemToDo(text) {
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");
    var ul = document.querySelector('.todos');
    var icon_name = 'fa fa-remove';

    icon.classList.add('fa', 'fa-remove');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement, text);

    removeItem();

}

function removeItem(){
    var span = document.querySelectorAll('span');
        span.addEventListener('click',function(){
            span.parentElement.remove();
            event.stopPropagation();
        });
}