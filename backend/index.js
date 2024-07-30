const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  7d24fa48-fd91-467e-8a63-8c0e47490498
  const { username } = req.body;

  try {
    const response = await axios.put("https://api.chatengine.io/users/", {})
  } catch (error) {
    
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001, () => console.log("Server running on port 3001"));