window.addEventListener('load', main);

function main(){
    eventListener()
}

function eventListener() {
    const formSubmit = document.getElementById('submit');
    const clear = document.getElementById('clear');
    formSubmit.onclick = submitForm;
    clear.onclick = clearForm;
}

function submitForm() {
    const formSubmit = document.getElementById('submit');
    const firstName = document.getElementById('fnme').value;
    const lastName = document.getElementById('lnme').value;
    const pNumber = document.getElementById('phnr').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('first name', firstName);
    localStorage.setItem('last name', lastName);
    localStorage.setItem('phone number', pNumber);
    localStorage.setItem('email', email);
    formValidation(firstName,lastName,pNumber,email)
    formSubmit.onclick = window.location ='page1.html';
}

function clearForm(){
    localStorage.removeItem('first name');
    localStorage.removeItem('last name');
    localStorage.removeItem('phone number');
    localStorage.removeItem('email');
}

function formValidation(firstName,lastName,pNumber,email) {
    if (firstName == "" || lastName == "" || pNumber == "" || email == "") {
        alert("Please fill out all input boxes");
        return false;
      }
}

