
let student = {
  name: "John",
  age: 20,
  grade: "B"
};
student.class = "12th";
student.grade = "A";
for (let key in student) {
  console.log(key + ": " + student[key]);
}
