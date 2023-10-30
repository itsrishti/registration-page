var submitBtn = document.getElementById("submitBtn");


submitBtn.test=(e)=>{
    e.preventDefault();
     
    var fullname= document.getElementById("fullname").value;
    var username=document.getElementById("username").value;
    var Address=document.getElementById("Address").value;
    var DOB=document.getElementById("DOB").value;
    var Password=document.getElementById("Password").value;
    var Email=document.getElementById("Email").value;
   
    // name+username+Password+DOB+Address+Email);
    var user = localStorage.setItem("username",username);
    var pass =localStorage.setItem("Password",Password);
    var date=localStorage.setItem("DOB",DOB);
    var add=localStorage.setItem("Address",Address);
    var name=localStorage.setItem("fullnmae",fullname);
    var mail=localStorage.setItem("Email",Email);
    if (fullname==""&&username==""&&Address==""&&DOB==""&&Password==""&&Email==""){
        "invalid input field";
    }else{
        if(fullname=="name"&&username=="user"&&Address==""&&DOB=="date"&&Password=="pass"&&Email=="mail"){
            "successfully register";
        }
        else{
            "invalid user";
        }
    }
    }