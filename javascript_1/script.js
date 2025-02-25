let myHeader = document.getElementById("myHeader")
header.textContent = "Wagga Wagga";
let age = 15;
const birthYear = 2010;
let sum = age + 3;
console.log("2028 will be a banger", sum);
if (age >= 18) {
    console.log ("You are an adult");
} else {
    console.log ("Stop Swearing");
}
if (age >= 12 && age <= 18) {
    console.log("You are grinding for the World Cup!");
}
if (age < 12 || age > 22) {
    console.log("You have either still never played GeoGuessr or graduated college");
}
let clueless = age < 12;
if (!clueless) {
    console.log("You haven't played GeoGuessr yet")
}
