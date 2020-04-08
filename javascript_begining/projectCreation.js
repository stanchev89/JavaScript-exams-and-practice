function projectCreation([arg1,arg2]){
let name = (arg1);
let projects = parseFloat(arg2);
let hoursToProject = projects * 3;
let output = `The architect ${name} will need ${hoursToProject} hours to complete ${projects} project/s.`;
console.log(output);
}
projectCreation(["Sanya","9"])