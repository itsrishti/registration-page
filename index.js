// localStorage.setItem('name','srishti');
// localStorage.setItem('adddress','sarojini hostel');
// localStorage.setItem('DOB','28/02/2004');
// localStorage.setItem('Password','srishti@123');
// localStorage.setItem('username','cseaiml');
// localStorage.setItem('email','srishti.vns2@gmail.com');
// const input = document.getElementById('name');
let form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    let name = event.target.fullname.value;
    let Email = event.target.Email.value;
    let Address = event.target.Address.value;
    let Dob = event.target.Dob.value;
    let username = event.target.username.value;
    let Password = event.target.password.value;
    var userdata = JSON.parse(localstorage.getItem("userdetails")) ??[];
     userdata.push({
       'name' :name, 
       'Email' :Email, 
       'username' :username, 
       'Password' :Password, 
       'Address' :Address, 
       'Dob' :Dob,
    
     })
     localStorage.setItem("userdetails",JSON.stringify(userdata))
    event.preventDefault();
})