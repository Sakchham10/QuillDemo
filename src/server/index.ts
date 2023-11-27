import express, { RequestHandler, Response } from "express";
import { Request } from "express";
import supabase from "./supabase.js";
const app = express();
const port = 8080;

const getVal = async () => {
  const { data: val, error: err } = await supabase.from("Dashboard").select("*");
};
// define a route handler for the default home page

app.get("/", (req, res) => {
  getVal();
});
app.get("/dashboard/:name", (req: Request, res: Response) => {
  getVal();
});

app.get("/chart/:id", (req: Request, res: Response) => {
  res.send("whatever");
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
