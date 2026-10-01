* {
    box-sizing: border-box;
}

body {
    font-family: Arial, Verdana, sans-serif;
    font-size: 18px;
    line-height: 1.6;
    margin: 0;
    background-color: #f4f6f8;
    color: #222;
}

header {
    background-color: #1d3557;
    color: white;
    text-align: center;
    padding: 25px;
}

header h1 {
    margin: 0 0 15px;
}

.controles {
    display: flex;
    justify-content: center;
    gap: 10px;
}

button {
    background-color: white;
    color: #1d3557;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #dbeafe;
}

main {
    padding: 30px 15px;
}

article {
    max-width: 750px;
    margin: auto;
    background-color: white;
    padding: 35px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

article h1 {
    color: #1d3557;
    font-size: 32px;
    line-height: 1.3;
    margin-top: 0;
}

article h2 {
    color: #457b9d;
    margin-top: 35px;
    margin-bottom: 12px;
}

p {
    margin-bottom: 20px;
}

ul {
    padding-left: 25px;
}

li {
    margin-bottom: 10px;
}

.resumo,
.pontos {
    background-color: #eaf4f4;
    border-left: 5px solid #2a9d8f;
    padding: 20px;
    margin: 30px 0;
}

.resumo h2,
.pontos h2 {
    margin-top: 0;
}

footer {
    text-align: center;
    background-color: #1d3557;
    color: white;
    padding: 20px;
    margin-top: 30px;
}

footer p {
    margin: 0;
}

@media (max-width: 600px) {
    body {
        font-size: 17px;
    }

    article {
        padding: 20px;
    }

    article h1 {
        font-size: 27px;
    }

    .controles {
        flex-direction: column;
        align-items: center;
    }

    button {
        width: 180px;
    }
}
