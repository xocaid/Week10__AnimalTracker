import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

//GET Request - Species
router.get("/", async (req, res) => {
  try {
    const species = await db.any("SELECT * FROM species ORDER BY id", [true]);
    res.send(species);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// POST Request - Species
router.post('/', async (req, res) => {
  const species = {
    name: req.body.name,
    type: req.body.type,
    population: req.body.population,
    conservation_status: req.body.conservation_status,
    created_on: req.body.created_on,
  };
  console.log([species.name, species.type, species.population, species.conservation_status, species.created_on]);

  try {
    const createdSpecies = await db.one(
      'INSERT INTO species(name, type, population, conservation_status, created_on) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [species.name, species.type, species.population, species.conservation_status, species.created_on],
    );
    console.log(createdSpecies);
    res.send(createdSpecies);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//DELETE Request - Species
router.delete("/:id", async (req, res) => {
  // : acts as a placeholder
  const speciesId = req.params.id;
  try {
    await db.none("DELETE FROM species WHERE id=$1", [speciesId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//UPDATE Request - Species


export default router;