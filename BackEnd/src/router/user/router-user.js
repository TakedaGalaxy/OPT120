const { Router } = require("express");
const { dataBase } = require("../../database/database");
const { RepositoryUser } = require("../../repository/user/repository-user");
const { ServiceUser } = require("../../service/user/service.user");

const routerUser = Router();

const repositoryUser = new RepositoryUser(dataBase);

const serviceUser = new ServiceUser(repositoryUser);

routerUser.post("/user", (request, response) => {
  const { name, email, password } = request.body;

  serviceUser
    .create(name, email, password)
    .then((dataViewAll) => {
      response.status(200).json(dataViewAll);
    })
    .catch((error) => {
      response.status(500).end(JSON.stringify(error));
    });
});

routerUser.get("/user", (request, response) => {
  serviceUser
    .viewAll()
    .then((dataViewAll) => {
      response.status(200).json(dataViewAll);
    })
    .catch((error) => {
      response.status(500).end(JSON.stringify(error));
    });
});

routerUser.get("/user/:userId", (request, response) => {
  response.send("TODO");
});

routerUser.put("/user/:userId", (request, response) => {
  response.send("TODO");
});

routerUser.delete("/user/:userId", (request, response) => {
  response.send("TODO");
});
 
module.exports = {
  routerUser,
};
