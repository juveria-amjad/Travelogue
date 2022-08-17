import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;
let places;
export default class PlacesDAO {
  static async injectDB(conn) {
    if (places) {
      return;
    }
    try {
      places = await conn.db(process.env.RESTPLACES_NS).collection("to_visit");
    } catch (e) {
      console.log("Unable to establish connection");
    }
  }

  static async getPlaces({
    filters = null,
    page = 0,
    PlacesPerPage = 20,
  } = {}) {
    let query;
    let cursor;
    try {
      cursor = await places.find(query);
    } catch (e) {
      console.log("NOT FIND");
      return { placesList: [], totalNumPlaces: 0 };
    }

    const displayCursor = cursor.limit(PlacesPerPage);
    try {
      const placesList = await displayCursor.toArray();
      const totalNumPlaces = await places.countDocuments(query);
      return { placesList, totalNumPlaces };
    } catch (e) {
      console.log("AGIN");
      return { placesList: [], totalNumPlaces: 0 };
    }
  }
}
