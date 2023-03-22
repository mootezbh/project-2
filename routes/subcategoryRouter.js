const route = require("express").Router();
const subcategoryController = require("../controllers/subcategoryController");

route.post("/addsubcategory",subcategoryController.addsubcategory);
route.get("/getall",subcategoryController.getAllsubcategory);
route.get("/get/:id",subcategoryController.getById);
route.put("/update/:id",subcategoryController.update);
route.delete("/delete/:id",subcategoryController.delete);
route.get("/getby/",subcategoryController.getByName);

module.exports = route;