import express from "express";
import config from "config";
import axios from "axios";

export const router = express.Router();

// @route       GET        api/challenger
// @desc        Get challenger data
// @access      Public

router.get("/challenger", async(req, res) => {
  try {
    const result =await axios.get(
        "https://na1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key="+config.get('lolAPI')
      );

    res.send(result.data);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       GET        api/user
// @desc        Get user's data
// @access      Public

router.post("/user", async(req, res) => {
  try {   
    
    const result =await axios.get(
        "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+req.body.username+"?api_key="+config.get('lolAPI')
      );

    res.send(result.data);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});