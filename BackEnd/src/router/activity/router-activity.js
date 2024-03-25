const { Router } = require("express");

const routerActivity = Router();

routerActivity.post("/activity", (request, response) => {
  response.send("TODO");
});

routerActivity.get("/activity", (request, response) => {
  response.send("TODO");
});
 
routerActivity.get("/activity/:id", (request, response) => {
  response.send("TODO");
});

routerActivity.put("/activity/:id", (request, response) => {
  response.send("TODO");
});

routerActivity.delete("/activity/:id", (request, response) => {
  response.send("TODO");
});

module.exports = {
  routerActivity,
};
