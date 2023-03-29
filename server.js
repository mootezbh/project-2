const express = require("express");
const dotenv = require("dotenv").config();
const config = require("./config.js");
const categoryRouter = require("./routes/categoryRouter");
const subcategoryRouter = require("./routes/subcategoryRouter");
const productRouter = require("./routes/productRouter");
const providerRouter = require("./routes/providerRouter");
const customerRouter = require("./routes/customerRouter");
const adminRouter = require("./routes/adminRouter");
const authRouter = require("./routes/authRouter.js");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/category", categoryRouter);
app.use("/subcategory", subcategoryRouter);
app.use("/product", productRouter);
app.use("/provider", providerRouter);
app.use("/customer", customerRouter);
app.use("/admin", adminRouter);
app.use("/login", authRouter.login);
app.use("/verify/:code", authRouter.verify);

app.get("/:img", (req, res) => {
  res.sendFile(__dirname + "/uploads/" + req.params.img);
});

app.listen(port, () => {
  console.log("Server is running!");
});
