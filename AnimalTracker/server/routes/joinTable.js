import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

//GET Request - JoinTable
//Join Table works
//Need / because that's the original route where I'm grabbing information from
router.get("/", async (req, res) => {
  try {
    const joinTableInfo = await db.any("SELECT species.id, species.name, species.type, individuals.nick_name, sightings.location, sightings.healthy, sightings.email FROM species JOIN individuals ON species.id = individuals.species_id JOIN sightings ON individuals.id = sightings.individual_id");

    res.send(joinTableInfo);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

export default router;