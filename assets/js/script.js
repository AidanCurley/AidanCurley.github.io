class Contact {
    constructor(name, subject, email, message) {
    this.name = name;
    this.subject = subject;
    this.email = email;
    this.message = message;
    }
}


const fields = {name, subject, email, message};
document.addEventListener("DOMContentLoaded", function() {
    fields.name = document.getElementById('name');
    fields.subject = document.getElementById('subject');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');
   });

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function isEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function validateField(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }

    return isFieldValid;
}

function isValid() {
    let valid = true;

    valid &= validateField(fields.name, isNotEmpty);
    valid &= validateField(fields.subject, isNotEmpty);
    valid &= validateField(fields.email, isEmail);
    valid &= validateField(fields.message, isNotEmpty);

    return valid;
}

function sendContact() {
    if (isValid()) {
        let contact = new Contact(fields.name.value, fields.subject.value, fields.email.value, fields.message.value);

        alert(`${contact.name}, thanks for getting in touch.`);
        console.log(`Messsage: ${contact.message}`);
    }
}