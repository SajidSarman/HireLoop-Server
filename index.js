import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.port || 5000;

//middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('HireLoop is looping...');
});

app.listen(port, () => {
  console.log(`HireLoop is looping on port ${port}`);
});