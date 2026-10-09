function geometry() 
{
    let n = Number(document.getElementById("size_geometry").value);
    let result = document.getElementById("result");

    result.textContent = "";

    if (!Number.isInteger(n) || n < 1 ||  n > 30) 
    {
        result.textContent = "¬ведите целое число от 1 до 30";
        return;
    }

    let figures = "";

    // ‘игура 0 Ч квадрат
    figures += "1. вадрат\n";

    for (let i = 0; i < n; i++) 
    {
        for (let j = 0; j < n; j++) 
        {
            figures += "* ";
        }
        figures += "\n";
    }

    figures += "\n";

    // ‘игура 1 Ч пр€моугольный треугольник
    figures += "2. “реугольник\n";

    for (let i = 1; i <= n; i++) 
    {
        for (let j = 0; j < i; j++) 
        {
            figures += "* ";
        }
        figures += "\n";
    }

    figures += "\n";

    // ‘игура 2 Ч перевЄрнутый треугольник
    figures += "3. ѕеревЄрнутый треугольник\n";

    for (let i = n; i >= 1; i--) 
    {
        for (let j = 0; j < i; j++) 
        {
            figures += "* ";
        }
        figures += "\n";
    }

    figures += "\n";

    // ‘игура 3 Ч треугольник с выравниванием вправо
    figures += "4. “реугольник вправо\n";

    for (let i = 0; i < n; i++) 
    {
        figures += "  ".repeat(i);

        for (let j = 0; j < n - i; j++) 
        {
            figures += "* ";
        }

        figures += "\n";
    }

    figures += "\n";

    // ‘игура 4 Ч треугольник с выравниванием влево
    figures += "5. “реугольник влево\n";

    for (let i = 0; i < n; i++) 
    {
        figures += "  ".repeat(n - i - 1);

        for (let j = 0; j <= i; j++) 
        {
            figures += "* ";
        }

        figures += "\n";
    }

    figures += "\n";

    // ‘игура 5 Ч песочные часы
    figures += "6. ѕесочные часы\n";

    for (let i = 0; i < n; i++) 
    {
        figures += " ".repeat(n - i - 1);
        figures += "/";

        figures += " ".repeat(2 * i);
        figures += "\\";
        figures += "\n";
    }

    for (let i = n - 1; i >= 0; i--) 
    {
        figures += " ".repeat(n - i - 1);
        figures += "\\";

        figures += " ".repeat(2 * i);
        figures += "/";
        figures += "\n";
    }

    figures += "\n";
    // ‘игура 6 Ч шахматный узор
    figures += "7. Ўахматный узор\n";

    for (let i = 0; i < n; i++) 
    {
        for (let j = 0; j < n; j++) 
        {
            if ((i + j) % 2 === 0) 
            {
                figures += "+ ";
            } 
            else 
            {
                figures += "- ";
            }
        }
        figures += "\n";
    }

    result.style.whiteSpace = "pre";
    result.style.fontFamily = "monospace";
    result.textContent = figures;
}
function chess() 
{
    let n = Number(document.getElementById("size_chess").value);
    let resultboard = document.getElementById("ChessBoardResult");

    resultboard.textContent = "";

    if (!Number.isInteger(n) || n < 1 || n > 30) 
    {
        resultboard.textContent = "¬ведите целое число от 1 до 30";
        return;
    }

    let board = "";

    for (let i = 0; i < n * 8; i++) 
    {
        for (let j = 0; j < n * 8; j++)
        {
            if ((Math.floor(i / n) + Math.floor(j / n)) % 2 === 0) 
            {
                board += "* ";
            } 
            else 
            {
                board += "  ";
            }
        }
        board += "\n";
    }

    resultboard.style.fontFamily = "monospace";
    resultboard.style.fontSize = "12px";
    resultboard.style.lineHeight = "12px";
    resultboard.style.letterSpacing = "0px";
    resultboard.style.whiteSpace = "pre";
    resultboard.textContent = board;
}