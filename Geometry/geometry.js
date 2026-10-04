function geometry()
{
	let n = document.getElementById("size").value;
	let result = document.getElementById("result");

	result.innerHTML = " ";

	for(let i = 0; i < n; i++)
	{
		for(let j = 0; j < n; j++)
		{
			result.innerHTML += "*";
		}
		result.innerHTML += "<br>";
	}
}
