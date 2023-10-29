// function test() {
// var fullname= document.getElementById("fullname").value;
// var username=document.getElementById("username").value;
// var Address=document.getElementById("Address").value;
// var DOB=document.getElementById("DOB").value;
// var Password=document.getElementById("Password").value;
// var Email=document.getElementById("Email").value;
// }

// var pass =localStorage.setItem("Password",Password);
// var date=localStorage.setItem("DOB",DOB);
// var add=localStorage.setItem("Address",Address);
// var name=localStorage.setItem("fullname",fullname);
// var user=localStorage.setItem("user",user);
// var mail=localStorage.setItem("Email",Email);




function test() {
     
//     let x = document.form["Form"]["input"].value;
//     if (x == "") {
//       alert("field must be filled out");
//       return false;
//     }
//   else{
    var fullname= document.getElementById("fullname").value;
    var username=document.getElementById("username").value;
    var Address=document.getElementById("Address").value;
    var DOB=document.getElementById("DOB").value;
    var Password=document.getElementById("Password").value;
    var Email=document.getElementById("Email").value;
    FormData.addEventListener("submit", (e) => {
        e.preventDefault();
        validation();
    })
    //  const setError =(ele,msg) => {
    //     let box=ele.parentElement;
    //     let Error = box.querySelector(".erro")
    //  }
    function validation(){
    // name+username+Password+DOB+Address+Email);
    var user = localStorage.setItem("username",username);
    var pass =localStorage.setItem("Password",Password);
    var date=localStorage.setItem("DOB",DOB);
    var add=localStorage.setItem("Address",Address);
    var name=localStorage.setItem("fullnmae",fullname);
    // var name=localStorage.setItem()
    var mail=localStorage.setItem("Email",Email);
    if(user == ""){
        SpeechSynthesisErrorEvent(username,"username is required")
    } else if(!userFormat(user)){
        SpeechSynthesisErrorEvent(username,"digital are not allowed")
    }else{
        SecurityPolicyViolationEventSuccess(username)
    }
    if(name == ""){
        SpeechSynthesisErrorEvent(fullname,"fullname is required")
    } else if(!userFormat(name)){
        SpeechSynthesisErrorEvent(fullname,"digital are not allowed")
    }else{
        SecurityPolicyViolationEventSuccess(fullname)
    }
    
    if(mail == ""){
        SpeechSynthesisErrorEvent(Email,"email is required")
    } else if(!userFormat(mail)){
        SpeechSynthesisErrorEvent(Email,"digital are not allowed")
    }else{
        SecurityPolicyViolationEventSuccess(Email)
    }
    
    if(pass == ""){
        SpeechSynthesisErrorEvent(Password,"Password is required")
    } else if(!userFormat(pass)){
        SpeechSynthesisErrorEvent(Password,"digital are not allowed")
    }else{
        SecurityPolicyViolationEventSuccess(Password)
    }
    
    if(add == ""){
        SpeechSynthesisErrorEvent(Address,"Address is required")
    } else if(!userFormat(add)){
        SpeechSynthesisErrorEvent(Address,"digital are not allowed")
    }else{
        SecurityPolicyViolationEventSuccess(Address)
    }
    if(date== ""){
        SpeechSynthesisErrorEvent(DOB,"DOB is required")
    } else if(!userFormat(date)){
        SpeechSynthesisErrorEvent(DOB,"digital are not allowed")
    }else{
        SecurityPolicyViolationEventSuccess(DOB)
    }
    
    
    
     
    

    }
    

