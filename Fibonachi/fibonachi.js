
document.getElementById("button").onclick = function() 
{
    let n = Number(document.getElementById("number1").value);
    let a = 0;
    let b = 1;
    let result = "";

    if (isNaN(n) || n < 0) 
    {
        document.getElementById("result1").innerHTML = "Введите число больше или равное 0";
        return;
    }

    while (a <= n) 
    {
        result += a + " ";
        let c = a + b;
        a = b;
        b = c;
    }
    document.getElementById("result1").innerHTML = result;
};

function generateFibonachi(n)
{
    if (n <= 0) return [];
    if (n === 1) return; 

    let fib = [0,1];
    for (let i = 2; i < n; i++) 
    {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

function showFibonachi() 
{
    const count = parseInt(document.getElementById('countInput').value);
    
    if (isNaN(count) || count <= 0)
    {
        document.getElementById('result2').innerHTML = "Введите корректное количество";
        return;
    }

    const fibArray = generateFibonachi(count);
    document.getElementById('result2').innerHTML = fibArray.join(', ');
}

function showPascal()
{
    let n = Number(document.getElementById("pascalCount").value);
    let result = document.getElementById("pascalResult");

    if (!Number.isInteger(n) || n < 1 || n > 20)
    {
        result.textContent = "Введите число строк от 1 до 20";
        return;
    }

    let triangle = [];
    let output = "";

    for (let i = 0; i < n; i++)
    {
        triangle[i] = [];

        for (let j = 0; j <= i; j++)
        {
            if (j === 0 || j === i)
            {
                triangle[i][j] = 1;
            }
            else
            {
                triangle[i][j] =
                    triangle[i - 1][j - 1] +
                    triangle[i - 1][j];
            }
        }

        output += triangle[i].join("  ") + "\n";
    }

    result.textContent = output;
}
// выводит символы вместо русского языка /////