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
    let email = event.target.email.value;
    let address = event.target.address.value;
    let dob = event.target.dob.value;
    let username = event.target.username.value;
    let Password = event.target.password.value;
    event.preventDefault();
})