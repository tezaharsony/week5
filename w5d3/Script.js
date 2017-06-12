var username = document.getElementById('username');
var pass = document.getElementById('password');
var conpass = document.getElementById('conPassword');
var email = document.getElementById('email');
var conemail = document.getElementById('conEmail');
var submit = document.getElementById('form');


submit.addEventListener('submit', function() {

   if (pass.value !== conpass.value) {
     alert('Password doesnt match')
    return false
  }
  else if(email.value !== conemail.value) {
    alert('Email Doesnt match')
    return false
  }
  else {
    return true
  }
});
