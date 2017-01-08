console.log("chaining")
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
function isBigEnf(compareNumbers) {
  return compareNumbers < 19;

}
for (var i=0; i<integers.length; i++){
  document.getElementById("chaining").innerHTML += `<span> ${integers[i]} </span>`
}
function compareNumbers(a, b) {
  return a - b;
}

function math(value){
  return (value * 1.5) - 1;
}
function add(a,b){
return a+b;
}
 for (var i=0; i < integers.length; i++ ){

  var answer = integers.sort(compareNumbers).filter(isBigEnf).map(math).reduce(add,0);


}
console.log(answer.reduce(add,0))
 document.getElementById("answer").innerHTML += `<span>Output : ${answer} </span>`
