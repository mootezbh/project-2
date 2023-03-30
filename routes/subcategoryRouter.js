const route = require("express").Router();
const subcategoryController = require("../controllers/subcategoryController");

route.post("/add",subcategoryController.add);
route.get("/getall",subcategoryController.getAll);
route.get("/get/:id",subcategoryController.getById);
route.put("/update/:id",subcategoryController.update);
route.delete("/delete/:id",subcategoryController.delete);
route.get("/getby/",subcategoryController.getByName);

module.exports = route;