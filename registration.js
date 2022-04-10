// console.log("aamir");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let number = document.getElementById("number");
let validFirstName = false;
let validLastName = false;
let validEmail = false;
let validNumber = false;
success.classList.remove('show');
danger.classList.remove('show');

firstName.addEventListener('blur', function () {
    const regex = /^[a-zA-Z]([a-zA-Z]){3,10}$/;
    const str = firstName.value;
    if (regex.test(str)) {
        firstName.classList.remove('is-invalid');
        validFirstName = true;
    }
    else {
        firstName.classList.add('is-invalid');
        validFirstName = false;
    }
})
lastName.addEventListener('blur', function () {
    const regex = /^[a-zA-Z]([a-zA-Z]){3,10}$/;
    const str = lastName.value;
    if (regex.test(str)) {
        lastName.classList.remove('is-invalid');
        validLastName = true;
    }
    else {
        lastName.classList.add('is-invalid');
        validLastName = false;
    }
})
email.addEventListener('blur', function () {
    const regex = /^([a-zA-Z0-9]+)@([0-9a-zA-Z]+)\.([a-zA-Z])/;
    const str = email.value;
    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        email.classList.add('is-invalid');
        validEmail = false;
    }
})
number.addEventListener('blur', function () {
    const regex = /^([0-9]){10}$/;
    const str = number.value;
    if (regex.test(str)) {
        number.classList.remove('is-invalid');
        validNumber = true;
    }
    else {
        number.classList.add('is-invalid');
        validNumber = false;
    }
})
let submit = document.getElementById('submit');
submit.addEventListener('click', function (a) {
    a.preventDefault();
    
    if (validFirstName && validLastName && validEmail && validNumber) {
        let success = document.getElementById('success');
        let danger = document.getElementById('danger');
        success.classList.add('show');
        danger.classList.remove('show');

        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let email = document.getElementById("email").value;
        let number = document.getElementById("number").value;
        let date = document.getElementById("date").value;
        let gender = document.getElementById("gender").value;
        let image = document.getElementById("image").value;
        let address = document.getElementById("address").value;
        let branch = document.getElementById("branch").value;

      
        localStorage.setItem("firstName",firstName);
        localStorage.setItem("lastName",lastName);
        localStorage.setItem("email",email);
        localStorage.setItem("number",number);
        localStorage.setItem("date",date);
        localStorage.setItem("gender",gender);
        localStorage.setItem("image",image);
        localStorage.setItem("address",address);
        localStorage.setItem("branch",branch);


    }
    else {
        let danger = document.getElementById('danger');
        let success = document.getElementById('success');
        danger.classList.add('show');
        success.classList.remove('show');

    }
})
