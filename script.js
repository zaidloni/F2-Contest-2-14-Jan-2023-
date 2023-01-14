let nameEl = document.getElementById("name");
let professionEl = document.getElementById("profession");
let ageEl = document.getElementById("age");
let containerEl = document.querySelector(".container");
let btnEl = document.querySelector(".btn");
let tableEl = document.querySelector("table");

//EventListener for adding the employee to the table
// & also used to handle the success & error message
btnEl.addEventListener("click", checkForm);

//EventListener for deleting the employee row
tableEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delBtn")) {
    return;
  }
  e.target.closest("tr").remove();
});

//Array of object of employee data
let employeeData = [];

/*function to add the employee data in table & adding
the sucess & error message
*/
function checkForm() {
  if (nameEl.value.length && professionEl.value.length && ageEl.value.length) {
    let employeeObj = {
      id: employeeData.length + 1,
      name: nameEl.value,
      profession: professionEl.value,
      age: ageEl.value,
    };
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${employeeData.length + 1} </td>
        <td>${nameEl.value} </td>
        <td> ${professionEl.value}</td>
        <td>  ${age.value}</td>
        <td> <button class="delBtn" id ="${
          employeeData.length + 1
        }"> Delete  </button></td>
        `;
    tableEl.appendChild(row);
    employeeData.push(employeeObj);
    containerEl.removeChild(containerEl.lastChild);
    let successEl = document.createElement("p");
    successEl.textContent = "Success: Employee Added!";
    containerEl.append(successEl);
    successEl.classList.add("green");
    nameEl.value = "";
    professionEl.value = "";
    ageEl.value = null;
  } else {
    containerEl.removeChild(containerEl.lastChild);
    let successEl = document.createElement("p");
    successEl.textContent = "Error Please Make sure all fields are filled";
    containerEl.append(successEl);
    successEl.classList.add("red");
  }
}
