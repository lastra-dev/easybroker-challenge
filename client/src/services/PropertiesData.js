import api from "services/api";

/**
 * Manages all requests to the properties API endpoint.
 */
class PropertiesData {
  /**
   * Sends a properties get request to the server.
   * @param {number} page - Requested properties number of page.
   * @returns {Object} - HTTP Response Object.
   */
  static async fromPage(page) {
    try {
      const response = await api.get(`/properties/${page}`);
      return response;
    } catch (error) {
      // NOTE: Errors should be handled by implementing an error system
      // not by printing them to the user.
      console.log(error.response.data);
    }
  }
}

export default PropertiesData;
