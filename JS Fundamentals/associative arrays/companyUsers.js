function companyUsers(input) {
  let allEmployes = {};
  input.forEach(token => {
    let [company, id] = token.split(" -> ");
    if (!allEmployes.hasOwnProperty(company)) {
      allEmployes[company] = [id];
    } else {
      if (!allEmployes[company].includes(id)) allEmployes[company].push(id);
    }
  });
  let companyNames = Array.from(Object.keys(allEmployes)).sort();
  companyNames.forEach(company => {
    console.log(company);
    for (const id of allEmployes[company]) {
      console.log(`-- ${id}`);
    }
  });
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111"
]);
