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

function validateForm() {
  var returnval = true;
  clearErrors();

  //perform validation and if validation fails, set the value of returnval to false
  var name = document.forms["myform"]["fname"].value;
  var num = document.myform.Roll_No.value;
  var email = document.forms["myform"]["femail"].value;
  var branch = document.forms["myform"]["Branch"].value;
  var ptrn = /^[A-Za-z]+$/;

  if (!name.match(ptrn)) {
    seterror("name", "name should be in specific format");
    returnval = false;
  }

  if (name.length == 0) {
    seterror("name", "*Name is compulsory");
    returnval = false;
  }

  if (isNaN(num)) {
    seterror("roll", "*roll no should be numeric only");
    return false;
  }

  if (num.length == 0) {
    seterror("roll", "*Roll No is compulsory");
    returnval = false;
  }

  if (email.length == 0) {
    seterror("email", "*Email is compulsory");
    returnval = false;
  }

  if (branch.length == 0) {
    seterror("branch", "*branch is compulsory");
    returnval = false;
  }

  const errorElements = document.querySelectorAll('span[id$="Error"]');
  for (const errorElement of errorElements) {
    if (errorElement.textContent !== "") {
      return false;
    }
  }

  return returnval;
}
