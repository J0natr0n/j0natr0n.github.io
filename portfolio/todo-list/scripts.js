//structure
var list        = document.querySelector("li");
var button      = document.querySelector("button");
var username    = document.querySelector(".username");
var comment     = document.querySelector(".comment");

console.log(username);
console.log(comment);

//events
button.addEventListener("click", addComment);
comment.addEventListener("keyup", addComment);

//Event Handler functions
function addComment(e){
    var key = e.keyCode;
    //console.log(e);
    
    //what i think is happening
    //keyCode 13 is the enter key
    //if keyCode exsist and is not 13
    //then return early
    if (key && key !=13){
        return;
    }

    var userNameValue = username.value;
    var commentValue = comment.value;
    
    //step one; create element
    var newItem = document.createElement("DIV");
    
    
    
    //step two; decorate the element
    newItem.innerHTML = '<div class=\"checkboxFive\"><input type=\"checkbox\" class=\"box\" />' + userNameValue +' ' + commentValue;
    
    
    //step three; insert the element
    list.appendChild(newItem);   
}





