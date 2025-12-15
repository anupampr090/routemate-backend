const express = require('express');
const app = express();
const port = 3000;

const authRouter = express.Router();
authRouter.get('/', (req, res) => res.send('Auth endpoint'));

const driversRouter = express.Router();
driversRouter.get('/', (req, res) => res.send('Drivers endpoint'));

const passengersRouter = express.Router();
passengersRouter.get('/', (req, res) => res.send('Passengers endpoint'));

app.use('/auth', authRouter);
app.use('/drivers', driversRouter);
app.use('/passengers', passengersRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
