import fs from "fs";
import { exit } from "process";

export default function dbFileCheck() {
    if(!fs.existsSync("db.json")) {
    console.log("Data is Empty file does not exist!");
    exit(1);
  }
}