const express = require('express');

const app = express();
const PORT = 8080;

// Health endpoint - alkalmazás állapotellenőrzése
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        version: '1.0.0'
    });
});

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
