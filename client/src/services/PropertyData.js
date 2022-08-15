import api from "services/api";

/**
 * Manages all requests to the property API endpoint.
 */
class PropertyData {
  /**
   * Sends a property get request to the server.
   * @param {number} id - Requested property public_id.
   * @returns {Object} - HTTP Response Object.
   */
  static async fromId(id) {
    try {
      const response = await api.get(`/property/${id}`);
      return response;
    } catch (error) {
      // NOTE: Errors should be handled by implementing an error system
      // not by printing them to the user.
      console.log(error.response.data);
    }
  }
}

export default PropertyData;
