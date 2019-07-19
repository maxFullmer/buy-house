require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const dashboardCtrl = require('./controllers/dashboardCtrl.js')
const app = express();
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to database')
});

app.get('/api/houseList', dashboardCtrl.gethouseList);
app.get('/api/house/:id', dashboardCtrl.gethouseInfo)

app.listen(SERVER_PORT, () => console.log(`Server for buyHouse ready to recieve requests on port ${SERVER_PORT}`));
