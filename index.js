"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const expressHandlebars = require("express-handlebars");

app.use(express.static(__dirname + "/public"));

// config for express-handlebars
app.engine(
  "hbs",
  expressHandlebars.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
    defaultLayout: "layout",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
    },
    // helpers: {
    //   createStarList,
    //   createPagination,
    // },
  })
);
app.set("view engine", "hbs");

// routes
app.use("/", require("./routes/indexRouter"));
// app.use("/products", require("./routes/productsRouter"));
// app.use("/users", require("./routes/authRouter"));
// app.use("/users", require("./routes/usersRouter"));

app.use((req, res, next) => {
  res.status(404).render("error", { message: "Page not found" });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).render("error", { message: "Internal Server Error" });
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
