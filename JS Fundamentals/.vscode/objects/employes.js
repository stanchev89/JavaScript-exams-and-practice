function employes(input) {
  for (let i = 0; i < input.length; i++) {
    let currentName = input[i];
    let currentLength = currentName.length;
    let person = {};
    person.name = currentName;
    person.nameLength = currentLength;
    console.log(
      `Name: ${person.name} -- Personal Number: ${person.nameLength}`
    );
  }
}

employes([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal"
]);
