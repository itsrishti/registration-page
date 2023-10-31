
document.getElementById('registration form').addEventListener('submit',function(e)
{
    e.preventDefault();
    const fullname=document.getElementById('fullname').value;
    const username=document.getElementById('username').value;
    const Address=document.getElementById('Address').value;
    const DOB=document.getElementById('DOB').value;
    // const DOB=document.getElementById('').value;
    const Email=document.getElementById('Email').value;
    const Password=document.getElementById('Password').value;
    

    const formData ={
        fullname:fullname,
        usernamre:username,
        Address:Address,
        DOB:DOB,
        Email:Email,
        Password:Password,
    };
    saveFormData(formData);
});
function  saveFormData(formData) {
    const storedFormData =
    JSON.parse(localStorage.getItem('formData')) || [];
    storedFormData.push(formData);
    localStorage.setItem('formData',JSON.stringify(
        storedFormData));

}
