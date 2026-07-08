import express from "express";
import err from "node:console"
import submitAppoitment from "./controllers/validators/contactFormValidator.js"

const app = express();

app.get("/api", (req, res) => {
  res.send("Hello World");
});

// app.post("/submission",submitAppoitment)

const PORT = 5173

app.listen(PORT, (err) => {
  if (err) {
    throw new err();
  }

  console.log(`Listening on port ${PORT}`)
});
