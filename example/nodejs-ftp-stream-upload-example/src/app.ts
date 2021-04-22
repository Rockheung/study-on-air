import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Client } from "basic-ftp";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.get("/file", (req: Request, res: Response) => {
  fs.readFile(
    path.join(__dirname, "../public/file-shooter.html"),
    (err, data) => {
      if (err) {
        res.status(500).send("No file");
        return;
      }
      res.setHeader("Content-type", "text/html; charset=utf-8");
      res.status(200).send(data);
    }
  );
});

app.post("/file", (req: Request, res: Response) => {
  const client = new Client();
  client.ftp.verbose = true;
  // Log progress for any transfer from now on.
  client.trackProgress((info) => {
    console.log("File", info.name);
    console.log("Type", info.type);
    console.log("Transferred", info.bytes);
    console.log("Transferred Overall", info.bytesOverall);
  });
  if (req.readable) {
    client
      .access({
        host: "bluejun73.cafe24.com",
        port: 21,
        user: "bluejun73",
        password: "Kyafglc36(",
      })
      .then(() => client.uploadFrom(req, uuidv4() + ".png"))
      .then(() => {
        console.log("Done!");
        res.status(201).send("Done!");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Damn");
      })
      .finally(() => {
        client.close();
      });
  }
});

app.listen(8080);
