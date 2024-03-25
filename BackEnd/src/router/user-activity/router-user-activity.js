const { Router } = require("express");

const routerUserActivity = Router();

routerUserActivity.post("/user/activity", (request, response) => {
  response.send("Todo");
});

routerUserActivity.get("/user/activity", (request, response) => {
  response.send("Todo");
});

routerUserActivity.get("/user/activity/:activityId", (request, response) => {
  response.send("Todo");
});

routerUserActivity.put("/user/activity/:activityId", (request, response) => {
  response.send("Todo");
});

routerUserActivity.delete("/user/activity/:activityId", (request, response) => {
  response.send("Todo");
  s;
});

module.exports = {
  routerUserActivity,
};
