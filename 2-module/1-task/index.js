function sumSalary(salaries) {
  let ResultSalary = 0;
  for (let key in salaries){
    if (isFinite(salaries[key]) && typeof salaries[key] == 'number') {
      ResultSalary += salaries[key];
    } else {
      return 0;
    }
  }
  return ResultSalary
}
