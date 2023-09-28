let arr = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
var gend = function radiocheck(gender) {
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked.value) {
      return gender[i].value;
    }
  }
};
const studentdata = (ev) => {
  ev.preventDefault(); //to stop the form submitting
  let obj = {
    Name: document.getElementById("Name").value,
    RollNo: document.getElementById("Roll_No").value,
    Email: document.getElementById("Email").value,
    branch: document.getElementById("Branch").value,
    gender: gend,
    DOB: document.getElementById("birthday").value,
  };
  console.log(obj);
  arr.push(obj);
  console.log(arr);
  document.forms[0].reset();
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", studentdata);
});
