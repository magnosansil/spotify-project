import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const NODE_ENV = process.env.NODE_ENV;
const URL = NODE_ENV === "development" ? "http://localhost:3000/api" : "/api";

const responseArtists = await axios.get(URL + "/artists");
const responseSongs = await axios.get(URL + "/songs");

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
