export default function iterateThroughObject(reportWithIterator) {
  let emp = [];
for (const [department, employees] of Object.entries(report)) {
  for (const [key, value] of Object.entries(employees)){
    for (let b of value){
      emp.push(b);
    }
  }
}
let iterEmp = emp[Symbol.iterator]();
return iterEmp;
}
