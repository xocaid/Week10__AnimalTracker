import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

//GET Request
router.get("/", async (req, res) => {
  try {
    const species = await db.any("SELECT * FROM species ORDER BY id", [true]);
    res.send(species);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// POST Request
router.post('/', async (req, res) => {
  const species = {
    name: req.body.name,
    type: req.body.type,
    population: req.body.population,
    conservation_status: req.body.conservation_status,
    created_on: req.body.created_on,
  };
  console.log([species.name, species.type, species.population, species.conservation_status, species.created_on]);
  
  try{
  const createdSpecies = await db.one(
    'INSERT INTO species(name, type, population, conservation_status, created_on) VALUES($1, $2, $3, $4, $5) RETURNING *',
    [species.name, species.type, species.population, species.conservation_status, species.created_on],
  );
  console.log(createdSpecies);
  res.send(createdSpecies);
  }catch (e){
    return res.status(400).json({ e });
  }
});

export default router;