function register(){

let username=document.getElementById("userName").value;
let password=document.getElementById("userPass").value;

localStorage.setItem("username",username);
localStorage.setItem("password",password);

document.getElementById("message").innerText="Registration Successful";

}


function login(){

let username=document.getElementById("loginUser").value;
let password=document.getElementById("loginPass").value;

let storedUser=localStorage.getItem("username");
let storedPass=localStorage.getItem("password");

if(username===storedUser && password===storedPass){

document.getElementById("message").innerText="Login Successful";

window.location="home.html";

}

else{

document.getElementById("message").innerText="Invalid Login";

}

}