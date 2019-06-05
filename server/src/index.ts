import "reflect-metadata";
import { createKoaServer } from "routing-controllers";
import MainController from "./game";
import setupDb from "./db";

const port = process.env.PORT || 4000;

const app = createKoaServer({
  cors: true,
  controllers: [MainController]
});

setupDb()
  .then(_ => app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch(err => console.error(err));
