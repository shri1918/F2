/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr
    .filter((employee) => employee.profession === "developer")
    .map((developer) => console.log(developer));
}

function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  const newEmployee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };
  arr.push(newEmployee);
  console.log(newEmployee);
}

function removeAdmin() {
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  const newArray = [
    { id: 4, name: "michael", age: "22", profession: "developer" },
    { id: 5, name: "emma", age: "24", profession: "admin" },
    { id: 6, name: "david", age: "21", profession: "developer" },
  ];
  const combinedArray = arr.concat(newArray);
  console.log(combinedArray);
}
