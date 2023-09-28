var submitbtn = document.getElementById("btn");
submitbtn.addEventListener("click", displayDetails);

var row = 1;

function displayRadioValue() {
  var gendervalue;
  var ele = document.getElementsByName("gender");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) gendervalue = ele[i].value;
  }

  return gendervalue;
}

function displayDetails() {
  var name = document.getElementById("Name").value;
  var rollno = document.getElementById("Roll_No").value;
  var emailid = document.getElementById("Email").value;
  var branch = document.getElementById("Branch").value;
  var gender = displayRadioValue();
  var birth = document.getElementById("birthday").value;

  var display = document.getElementById("display");
  var newRow = display.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);

  cell1.innerHTML = name;
  cell2.innerHTML = rollno;
  cell3.innerHTML = emailid;
  cell4.innerHTML = branch;
  cell5.innerHTML = gender;
  cell6.innerHTML = birth;
  row++;
}
