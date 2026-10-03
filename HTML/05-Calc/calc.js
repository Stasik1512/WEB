
// JavaScript source code
//document.getElementById("7").innerHTML = "Sedem";
//document.getElementById("/").innerHTML = "Division";
let buttons = document.getElementsByTagName("button");
//console.log(buttons);
//console.table(elemens);

let digitButtons = document.getElementsByClassName("digit-button");
console.log(digitButtons);
/* for (let i = 0; i < digitButtons.length; i++)
{
	digitButtons[i].addEventListener("click", inputDigit);
	for( let j= i + 1; j < digitButtons.length - 1; j++)
	{
		if(digitButtons[j].innerHTML <digitButtons[i].innerHTML)
		{

			digitButtons[j] = [digitButtons[i],digitButtons[i]=digitButtons[j]][0];
		}
	}
} */
for (let i = 0; i < digitButtons.length; i++)
{
	//document.getElementById(`${i}`).addEventListener("click", inputDigit);
	digitButtons[i].addEventListener("click", inputDigit);
}
/*document.onkeypress = function(e)
{
	if(e.key >= 0 && e.key <=9)
	{
		//document.getElementById(`${e.key.charcode-48}`).
		document.getElementById("display").value += e.key;
		console.log("DIGIT");
	}
	console.log(e);
}*/
function inputDigit()
{
	/*let display = document.getElementById("display");
	if(display.value === '0') display.value ='';
	display.value += this.innerHTML;
	console.log(this);*/
	digit2display(this.innerHTML);
}

function  digit2display(digit)
{
	let display = document.getElementById("display");
	if(display.value === '0') display.value ='';
	display.value += digit;
	console.log(this);
}
document.onkeydown = function(e)
{
	let button = document.getElementById(`${e.key}`);
	button.classList.add("button-active");
}

document.onkeyup = function(e)
{
	let button = document.getElementById(`${e.key}`);
	if(button.classList!= null)
		button.classList.remove("button-active");
	digit2display(e.key);
}