const pname = document.getElementById('name'); // getting form elements
const surname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let flag = true; // flag for clean an email input in case it is incorrect
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (pname.value === "" || pname.value == null) {
        setStyle('First name cannot be empty', pname);
    }
    else
    {
        resetStyle(pname);
    }
    if (surname.value === "" || surname.value == null) {
        setStyle('Last name cannot be empty', surname);
    }
    else
    {
        resetStyle(surname);
    }
    if (!email.value.match(emailRegex)) {
        setStyle('Looks like is not an email', email);
        flag = false;
    }
    else
    {
        resetStyle(email);
        flag = true;
    }
    if (password.value === "" || password.value == null) {
        setStyle('Password cannot be empty', password);
    }
    else
    {
        resetStyle(password);
    }
});
function setStyle(message, element) {
    const container = element.parentElement;
    const errorMessage = container.querySelector('span');
    errorMessage.innerText = message;
    element.style.border = "2px solid #FC7A7A";
    element.style.color = "#FC7A7A";
    element.placeholder = "";
    element.style.background = "url('images/icon-error.svg') no-repeat";
    element.style.backgroundPosition = "95% 50%";
    element.style.backgroundSize = "16px 16px";
    errorMessage.style.color = "#FC7A7A";
    errorMessage.style.margin = "-10px 0px 12px 0px";
    errorMessage.style.fontSize = "9px";
    errorMessage.style.fontStyle = "italic";
    errorMessage.style.textAlign = "right";
}
function resetStyle(element) {
    const container = element.parentElement;
    element.setAttribute('style', '');
    const errorMessage = container.querySelector('span');
    errorMessage.innerText = '';
}
function changeTypingColor(element) {
    element.style.color = "black";
}
function changeTypingColorEmail() {
    if(flag === false) {
        email.value = '';
        flag = true;
    }
    email.style.color = "black";
}
   

