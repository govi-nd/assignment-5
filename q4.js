let student = {
  name: "John",
  age: 20,
  grade: "B"
};

// Add new property
student.class = "12th";

// Update grade
student.grade = "A";

// Display all information
for (let key in student) {
  console.log(key + ": " + student[key]);
}
