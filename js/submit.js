/*
function submit_by_id() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (validation()) // Calling validation function
  {
    document.getElementById("contact_form").submit(); //form submission
    alert("Message Sent!");
  }
}


// Name and Email validation Function.
function validation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
  if (name === '' || email === '' || message = '') {
    alert("Please fill all fields.");
    return false;
  } else if (!(email).match(emailReg)) {
    alert("Invalid Email.");
    return false;
  } else {
    return true;
  }
}
*/
const fs = require('fs');

function submit_by_id() {
  
}
