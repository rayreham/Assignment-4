let form = document.getElementById('main-form');
form.onsubmit = function(e) {
    e.preventDefault();
    console.log(form.username.value);
    console.log(form.email.value);
    console.log(form.password.value);
    form.reset();
}


function checkPassword(form){
    let password = document.getElementById('pswd').value;
    let confirm1 = '12345678';
    if(password != confirm1){
        alert("Password Not Matched");
        return false;
    } 
    else {
        alert("Password Matched");
        return true;
    }
}

let h1 = document.querySelector('h1');
h1.innerHTML = 'Hello!!!!';