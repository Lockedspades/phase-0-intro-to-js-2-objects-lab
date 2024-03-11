// Write your solution in this f
const employee = {
    name: "Chopper",
    address: "36 Wilson st."
}
function  updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployee = {...employee}
    updatedEmployee[key]= value;
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const employeeClone = {...employee};
    delete employeeClone[key];
    return employeeClone;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}
