import express from "express";
const port = 3000;
import { createConnection, getRepository } from "typeorm";
import { User } from "./entity/User";
import { SHARE_ENV } from "worker_threads";

async function server() {
  const conn = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    url: "postgres://postgres:test@localhost/cc13api",
    username: "postgres",
    password: "test",
    database: "cc13api",
    entities: ["src/entity/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
  });

  let userRepo = getRepository(User);

  console.log("connected");
  const app = express();
  app.use(express.json());
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: true }));

  app.get("/allUsers", (req, res) => {
    userRepo.query('SELECT * FROM "user";').then((user) => {
      res.send(user);
    });
  });
  app.get("/:id", (req, res) => {
    let id = req.params.id;
    userRepo.findOne(id).then((user) => res.send(user));
  });
  app.get("/members", (req, res) => {});
  app.post("/", (req, res) => {
    console.log(req.body);
    let user = new User();
    for (const key in req.body) {
      user[key] = req.body[key];
      console.log(user);
    }
    userRepo.save(user).then((user) => res.status(200).send());
  });

  app.patch("/", (req, res) => {
    let changes = req.body;
    userRepo.update(changes.id, changes).then(() => {
      res.status(200).send();
    });
  });

  app.delete("/", (req, res) => {
    let id = req.body;
    userRepo.delete(id).then(() => {
      res.status(200).send("Deleted");
    });
  });
  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
  );
}
server();
