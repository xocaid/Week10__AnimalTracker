import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const individuals = await db.any("SELECT * FROM individuals ORDER BY id", [
      true,
    ]);
    res.send(individuals);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// POST Request
router.post('/', async (req, res) => {
  const individuals = {
    id: req.body.id,
    nick_name: req.body.nick_name,
    seen_on: req.body.seen_on,
    species_id: req.body.species_id,
  };
  console.log([individuals.id, individuals.nick_name, individuals.seen_on, individuals.species_id]);
  
  try{
  const createdIndividuals = await db.one(
    'INSERT INTO species(id, nick_name, seen_on, species_id) VALUES($1, $2, $3, $4) RETURNING *',
    [individuals.id, individuals.nick_name, individuals.seen_on, individuals.species_id],
  );
  console.log(createdIndividuals);
  res.send(createdIndividuals);
  }catch (e){
    return res.status(400).json({ e });
  }
});

/* Delete users listing. */

  router.delete("/:id", async (req, res) => {
    // : acts as a placeholder
  const individualsId = req.params.id;
  try {
  await db.none("DELETE FROM individuals WHERE id=$1", [individualsId]);
  res.send({ status: "success" });
  } catch (e) {
  return res.status(400).json({ e });
  }
});

export default router;