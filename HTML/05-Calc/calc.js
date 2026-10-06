
// JavaScript source code
//document.getElementById("7").innerHTML = "Sedem";
//document.getElementById("/").innerHTML = "Division";
let buttons = document.getElementsByTagName("button");
//console.log(buttons);
//console.table(elemens);
let a = Number.MIN_VALUE, b = Number.MIN_VALUE;
let operation = "";
let input = false;
let input_operation = false;

let digitButtons = document.getElementsByClassName("digit-button");
let operationButtons = document.getElementsByClassName("operation-button");
let clearButtons = document.getElementsByClassName("clear-button");
console.log(operationButtons);
console.log(clearButtons);
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
for(let i =0; i < operationButtons.length; i++)
{
	operationButtons[i].addEventListener("click", SetState);
}
for(let i =0; i <clearButtons.length; i++)
{
	operationButtons[i].addEventListener("click", SetState);
}
function SetState()
{
	console.log(this.innerHTML);
	Press(this.innerHTML);
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
	if(input_operation === true)
	{
		document.getElementById("display").value = "";
		input_operation = false;
	}	
	let display = document.getElementById("display");
	if(digit == ' ') return;
	if(display.value === '0') display.value ='';
	if(digit == '.' && display.value.includes('.')) return;
	display.value += digit;
	console.log(this);
	input = true;
}
document.onkeydown = function(e)
{
	let button = document.getElementById(`${e.key}`);
	if(button != null)
		button.classList.add("button-active");
	switch (e.key)
	{
		case "Escape"		: document.getElementById("C").classList.add("button-active"); break;
		case "Enter"		: document.getElementById("=").classList.add("button-active");	break;
		case "Backspace"	: document.getElementById("Backspace").classList.add("button-active");	break;
	}

}

document.onkeyup = function(e)
{
	Press(e.key)
}
function Press(key)
{
	console.log(key);
	let button = document.getElementById(`${key}`);
	if(button != null && button.classList != null)
		button.classList.remove("button-active");
	switch (key)
	{
		case "Backspace":	
			document.getElementById("Backspace").classList.remove("button-active");
			break;
		case "Escape": 
		case "C": 
		case "CE": 
			Clear();
			document.getElementById("C").classList.remove("button-active"); 
			break;
		case "Enter":
		case "=":
			Calculate();
			document.getElementById("=").classList.remove("button-active"); 
			break;

		case "+":
		case "-":
		case "*":
		case "/":
			if(a === Number.MIN_VALUE)a = Number(document.getElementById("display").value);
			//input = false;
			//if(operation != "")Calculate();
			if(input)Calculate();
			operation = key;
			input_operation = true;
		break;
	}

	if(key >= 0 && key <= 9 || key == '.')		digit2display(key);
	if(key == "Backspace")
	{
		let display = document.getElementById("display");

		if(display.value.length > 1)
		{
			display.value = display.value.slice(0, -1);
		}
		else
		{
			display.value = "0";
		}
	}

}
	function Calculate()
	{
		if(input)b = Number(document.getElementById("display").value); 
		input = false;
		switch (operation)
		{
			case "+": a += b; break;
			case "-": a -= b; break;
			case "*": a *= b; break;
			case "/": a /= b; break;
		}
		document.getElementById("display").value = a;
		input_operation = false;
		document.getElementById("display").value = a;
	}
	function Clear()
	{
		a = Number.MIN_VALUE, b = Number.MIN_VALUE;
		operation = "";
		input = false;
		input_operation = false;
		document.getElementById("display").value = "0";

	}
  