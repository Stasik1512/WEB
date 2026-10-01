
// JavaScript source code
//document.getElementById("7").innerHTML = "Sedem";
//document.getElementById("/").innerHTML = "Division";
let buttons = document.getElementsByTagName("button");
//console.log(buttons);
//console.table(elemens);

let digitButtons = document.getElementsByClassName("digit-button");
//console.log(digitButtons);

for (let i = 0; i < digitButtons.length; i++)
{
	digitButtons[i].addEventListener("click", inputDigit);
}
function inputDigit()
{
	let display = document.getElementById("display");
	if(display.value === '0') display.value ='';
	display.value += this.innerHTML;
	console.log(this);
}