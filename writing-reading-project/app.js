const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    fs.readFile('messages.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.send('Error reading messages.');
        } else {
            const messages = data.split('\n').filter(Boolean).reverse(); 
            res.send(messages.join('<br>')); 
        }
    });
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
