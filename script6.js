function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
function seterror(id, error) {
  //sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateName() {
  //perform validation and if validation fails, set the value of returnval to false
  var name = document.forms["myform"]["fname"].value;
  var ptrn = /^[A-Za-z]+$/;

  if (!name.match(ptrn)) {
    seterror("name", "name should be in specific format");
  } else if (name.length == 0) {
    seterror("name", "*Name is compulsory");
  } else {
    seterror("name", "");
  }
}

function validateRollNo() {
  var num = document.myform.Roll_No.value;

  if (isNaN(num)) {
    seterror("roll", "*roll no should be numeric only");
  } else if (num.length == 0) {
    seterror("roll", "*Roll No is compulsory");
  } else {
    seterror("roll", "");
  }
}

function validateEmail() {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var email = document.forms["myform"]["femail"].value;
  if (!email.match(mailformat)) {
    seterror("email", "*Enter Valid Email");
    returnval = false;
  } else if (email.length == 0) {
    seterror("email", "*Email is compulsory");
    returnval = false;
  } else {
    seterror("email", "");
  }
}

function validateBranch() {
  var branch = document.forms["myform"]["Branch"].value;
  if (branch.length == 0) {
    seterror("branch", "*branch is compulsory");
    returnval = false;
  } else {
    seterror("branch", "");
  }
}

function validateForm() {
  validateName();
  validateRollNo();
  validateEmail();
  validateBranch();

  const errorElements = document.querySelectorAll('span[id$="Error"]');
  for (const errorElement of errorElements) {
    if (errorElement.textContent !== "") {
      return false;
    }
  }

  // If all validations pass, allow form submission
  return true;
}
