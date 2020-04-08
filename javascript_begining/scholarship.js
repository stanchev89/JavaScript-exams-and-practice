function solve(input){
let salary = Number(input.shift());
let avgRat = Number(input.shift());
let minSalary = Number(input.shift());
let scholarshipRat = avgRat * 25;
let scholarshipSocial = minSalary * 0.35;
let output = "";
if(salary <= minSalary && avgRat >= 4.50){
    if (avgRat >= 5.50 && scholarshipRat >= scholarshipSocial){
        output = `You get a scholarship for excellent results ${Math.trunc(scholarshipRat)} BGN`;
    }else {
        output = `You get a Social scholarship ${Math.floor(scholarshipSocial)} BGN`;
    }
}else if (avgRat >= 5.50){
        output = `You get a scholarship for excellent results ${Math.trunc(scholarshipRat)} BGN`;
}else output = "You cannot get a scholarship!";
console.log(output);
}
solve([
"414.00",
"6",
"415.00"
])