import PlacesDAO from "../dao/placesDAO.js";

export default class PlacesController {
  static async apiGetPlaces(req, res, next) {
    const PlacesPerPage = req.query.PlacesPerPage
      ? parseInt(req.query.PlacesPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;
    let filter = {};
    const { placesList, totalNumPlaces } = await PlacesDAO.getPlaces({
      filter,
      page,
      PlacesPerPage,
    });

    let response = {
      places: placesList,
      page: page,
      filter: filter,
      entries_per_page: PlacesPerPage,
      total_result: totalNumPlaces,
    };
    res.json(response);
  }
}
