const express = require('express');
const app = express();
const port = 8000;


app.get('/',(req, res) => {
    res.end(
        "hello world"
    );
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

