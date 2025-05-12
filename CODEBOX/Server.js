const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy credentials (for demo purposes)
const validUser = {
    username: 'admin',
    password: '1234'
};

// Serve static files (like your HTML page)
app.use(express.static('public'));

// Handle login POST request
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === validUser.username && password === validUser.password) {
        res.send('Login successful! Welcome, ' + username);
    } else {
        res.status(401).send('Invalid username or password');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
