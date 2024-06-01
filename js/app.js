let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username");
/** 
 * ! document.getElementById is a method that returns a reference to the first object with the specified value of the ID attribute
 **/
 email = id("email"),
 password = id("password"),
 form = id("form"),

 errorMsg = classes("error"), /* gets stored in array */
 successIcon = classes("success-icon"), 
 failureIcon = classes("failure-icon");
/**
 * let a;   
 * let b;
 * let c;
 * 
 * let a,b,c; must put last semi-colon or this variable notation will not work - this is shortcut format for js 
 **/

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Username cannot be empty");
    engine(email, 1, "Email cannot be empty");
    engine(password, 2, "Password cannot be empty");

});
let engine = (id, serial, message) => {
    if(id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2 px solid red";
        /*icons */
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        /*icons*/ 
        failureIcon[serial].style.opacity ="0";
        successIcon[serial].style.opacity = "1";
    }
}