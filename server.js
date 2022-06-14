const express = require('express');
const friendRoute = require('./routes/friendRoute')
const app = express();
const PORT = 7000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/friends', friendRoute)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));