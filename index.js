function test() {
var fullname= document.getElementById("fullname").value;
var username=document.getElementById("username").value;
var Address=document.getElementById("Address").value;
var DOB=document.getElementById("DOB").value;
var Password=document.getElementById("Password").value;
var Email=document.getElementById("Email").value;
// alert(fullname+username+Password+DOB+Address+Email);
var user = localStorage.setItem("username",username);
var pass =localStorage.setItem("Password",Password);
var date=localStorage.setItem("DOB",DOB);
var add=localStorage.setItem("Address",Address);
var name=localStorage.setItem("fullnmae",fullname);
// var name=localStorage.setItem()
var mail=localStorage.setItem("Email",Email);
}


