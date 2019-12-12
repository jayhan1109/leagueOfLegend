import express from "express";
import config from "config";
import axios from "axios";

export const router = express.Router();

// @route       GET        api/all
// @desc        Get all data
// @access      Public

router.get("/all", async(req, res) => {
  try {
    const result =await axios.get(
        "https://na1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=RGAPI-6f9e7a29-9d2f-4b6b-aa07-29668e5b7458"
      );
    res.send(result.data);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
