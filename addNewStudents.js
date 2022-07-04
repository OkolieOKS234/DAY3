import { students } from "./studentGrades.js";

addNewStudent();

function addNewStudent() {
  let student = document.querySelector(".inp");

  document.querySelector("button").addEventListener("click", () => {
    if (students.includes(student.value) == true) {
      alert("User already existed");
      let txtarea = document.querySelector("textarea");
      txtarea.textContent = `${students}`;
    } else {
      students.push(student.value);
      console.log(students);
      alert(
        `You added new students to the database..., BUT NOT STORED IN THE MAIN SERVER... SO DONT REFRESH`
      );
      let txtarea = document.querySelector("textarea");

      txtarea.textContent = `${students}`;

      setTimeout(() => {
        txtarea.textContent = "";
      }, 3000);
    }
  });
}
