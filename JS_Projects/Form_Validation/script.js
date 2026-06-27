const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input eoor message

function showError (input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline
function showSuccess (input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// check email id


//check required fields

function checkRequired(inputArr){
 inputArr.forEach(function(input){
 if (input.value.trim() === ''){
    showError(input,  `${getFieldname(input)} is required`);
 }
 else {
    showSuccess(input);
 }
 });
} 


// check required length 

function checkLength (input, min ,max){
    if (input.value.length < min){
        showError(input,`${getFieldname(input)} must be at least ${min} characters`);
    }
    else if (input.value.length > max ){
         showError(input,`${getFieldname(input)} must be at less than ${max} characters`);
    }
    else {
        showSuccess(input);
    }
}

// check email is required 

function checkEmail(input) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (re.test(input.value.trim())){
    showSuccess(input);
  }
  else {
    showError(input, 'Email is not valid')
  }
}

//check passowrd match

function checkPasswordMatch (input1, input2){
    if (input1.value !=input2.value){
        showError(input2, 'Password do not match');
    }
}


// get fieldName
function getFieldname(input){
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1);
}

// Event Listners
form.addEventListener('submit', function(e){
e.preventDefault();

checkRequired([username, email, password, password2]);
checkLength (username, 3, 15);
checkLength (password, 6, 25);
checkEmail(email)
checkPasswordMatch(password, password2);


    // if (username.value === ''){
    //     showError(username, 'username is required');
    // }
    // else{
    //     showSuccess(username);
    // }

    //  if (email.value === ''){
    //     showError(email, 'email is required');
    // }

    // else if(!  isValidEmail(email.value)) {
    //     showError(email, 'email is not valid');

    // }
    // else{
    //     showSuccess(email);
    // }

    //  if (password.value === ''){
    //     showError(password, 'password is required');
    // }
    // else{
    //     showSuccess(password);
    // }

    //  if (password2.value === ''){
    //     showError(password2, 'password is required');
    // }
    // else{
    //     showSuccess(password2);
    // }
});
