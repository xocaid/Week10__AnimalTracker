import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from 'dotenv'; config();

//ROUTES
import db from "./db/db-connection.js";
import speciesRouter from "./routes/species.js";
import individualsRouter from "./routes/individuals.js";
import sightingsRouter from "./routes/sightings.js";

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());
app.use('/species', (speciesRouter));
app.use('/individuals', (individualsRouter));
app.use('/sightings', (sightingsRouter));

//ROUTE for index
app.get('/', (req, res) => {
  res.json('This is the BACKEND.')
});



app.listen(PORT, () => console.log(`Server is running on port: ${PORT}.`));