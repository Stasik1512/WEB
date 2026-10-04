
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
	if(digit == ' ') return;
	if(display.value === '0') display.value ='';
	if(digit == '.' && display.value.includes('.')) return;
	display.value += digit;
	console.log(this);
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
	let button = document.getElementById(`${e.key}`);
	if(button != null && button.classList != null)
		button.classList.remove("button-active");
	switch (e.key)
	{
		case "Escape": 
			document.getElementById("C").classList.remove("button-active"); 
			document.getElementById("display").value = "0";
			break;
		case "Enter" : 
			document.getElementById("=").classList.remove("button-active"); 
			break;
		case "Backspace" :	
			document.getElementById("Backspace").classList.remove("button-active");
			break;
	}
	if(e.key >= 0 && e.key <= 9 || e.key == '.')
		digit2display(e.key);
	if(e.key == "Backspace")
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
  