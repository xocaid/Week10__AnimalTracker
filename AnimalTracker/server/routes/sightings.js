import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

//GET Request
router.get("/", async (req, res) => {
  try {
    const sightings = await db.any("SELECT * FROM sightings ORDER BY id", [true]);
    res.send(sightings);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//POST Request
router.post('/', async (req, res) => {
  const sightings = {
    id:req.body.id,
    date_time: req.body.date_time,
    location: req.body.location,
    healthy: req.body.healthy,
    individual_id: req.body.individual_id,
    created_on: req.body.created_on,
    email: req.body.email,
  };
  console.log([sightings.id,sightings.date_time, sightings.location, sightings.healthy, sightings.individual_id, sightings.created_on, sightings.email]);

  try {
    const createdSightings = await db.one(
      'INSERT INTO sightings(id, date_time, location, healthy, individual_id, created_on, email) VALUES($1, $2, $3, $4, $5, $6,$7) RETURNING *',
      [sightings.id,sightings.date_time, sightings.location, sightings.healthy, sightings.individual_id, sightings.created_on, sightings.email],
    );
    console.log(createdSightings);
    res.send(createdSightings);
  } catch (e) {
    console.log(e)
    return res.status(400).json({ e });
  }
});

/* Delete users listing. */

router.delete("/:id", async (req, res) => {
  // : acts as a placeholder
const sightingsId = req.params.id;
try {
await db.none("DELETE FROM sightings WHERE id=$1", [sightingsId]);
res.send({ status: "success" });
} catch (e) {
return res.status(400).json({ e });
}
});

export default router;