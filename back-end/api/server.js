import express from "express";
import { db } from "./connect.js";
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(cors());

app.get("/", (_req, res) => {
  res.send("Endpoints: /artists | /songs");
});
app.get("/artists", async (_req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});
app.get("/songs", async (_req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
