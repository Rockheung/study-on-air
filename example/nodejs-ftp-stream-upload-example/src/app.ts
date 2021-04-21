import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

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
  console.log(req.readable);
  res.status(201).send("Ok");
});

app.listen(8080);
