const route = require("express").Router();
const categoryController = require("../controllers/categoryController");
const auth = require("../middleware/verif");
const upload = require("../middleware/upload");

route.post("/add",upload.single("img"),categoryController.addCategory);
route.get("/getall",categoryController.getAllCategory);
route.get("/get/:id",categoryController.getById);
route.put("/update/:id",upload.single("img"),categoryController.update);
route.delete("/delete/:id",categoryController.delete);
route.get("/getby/",categoryController.getByName);

module.exports = route;
