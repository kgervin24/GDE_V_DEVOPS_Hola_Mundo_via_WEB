const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send(`
        <h1>Hola Mundo!</h1>
        <p>Kiss Gábor Ervin - H9ETGN</p>
        <p>GDE V DEVOPS</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
