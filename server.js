const path = require("path");
const express = require("express");
const session = require('express-session');
const exphbs = require("express-handlebars");
const routes = require("./controllers");
// const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({});

// Configure and link session obj with sequelize store
const sess = {
  secret: 'All the secrets',
  cookie: {},
  resave: false,
  saveUnitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Add express-session and store as express.js middleware
app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers"));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
