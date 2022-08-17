import app from "./server.js";
import PlacesDAO from "./dao/placesDAO.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.RESTPLACES_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await PlacesDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  });
