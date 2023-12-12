const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (_, res) => {
    res.status(200).send('Hello world!');
});

app.listen(PORT, () => {
    console.log(`bff-playground listening on port ${PORT}`);
});
