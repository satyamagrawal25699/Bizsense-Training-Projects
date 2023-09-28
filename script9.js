const formToReset = document.getElementById("myForm");

function generate() {
  if (!validateForm()) {
    alert("Please fill correct Information!");
    return false;
  }
  pushData();
}

function displayRadioValue() {
  var gendervalue;
  var ele = document.getElementsByName("gender");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) gendervalue = ele[i].value;
  }

  return gendervalue;
}

var value = displayRadioValue();

var myArr = [];
function pushData() {
  const obj = {
    Name: document.getElementById("Name").value,
    rollno: document.getElementById("Roll_No").value,
    Email: document.getElementById("Email").value,
    birthday: document.getElementById("birthday").value,
    Branch: document.getElementById("Branch").value,
  };

  myArr.push(obj);
  console.log(myArr);
  var html = "<table border='1|1'>";
  html += "<thead>";
  html += "<tr>";
  html += "<td>" + "First Name" + "</Id>";
  html += "<td>" + "Roll No" + "</Id>";
  html += "<td>" + "Email" + "</Id>";
  html += "<td>" + "Branch" + "</Id>";
  html += "<td>" + "DOB" + "</Id>";
  html += "</tr>";
  html += "</thead>";

  for (var i = 0; i < myArr.length; i++) {
    html += "<tr>";
    html += "<td>" + myArr[i].Name + "</td>";
    html += "<td>" + myArr[i].rollno + "</td>";
    html += "<td>" + myArr[i].Email + "</td>";
    html += "<td>" + myArr[i].Branch + "</td>";
    html += "<td>" + myArr[i].birthday + "</td>";

    html += "</tr>";
  }

  html += "</table>";
  document.getElementById("table").innerHTML = html;
}

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

  return true;
}
