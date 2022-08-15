import api from "services/api";

/**
 * Manages all requests to the contact API endpoint.
 */
class ContactRequest {
  /**
   * Sends a contact post request to the server.
   * @param {Object} body - Information about the contact form.
   * @param {string} body.name - The name of the client.
   * @param {string} body.phone - The phone number of the client.
   * @param {string} body.email - The email of the client.
   * @param {string} body.property_id - ID of the contacted property.
   * @param {string} body.message - Message body of the client.
   * @param {string} body.source - Source domain where the request is sent.
   * @returns {Object} - HTTP Response Object.
   */
  static async sendMessage(body) {
    try {
      const response = await api.post("/contact", JSON.stringify(body));
      return response;
    } catch (error) {
      // NOTE: Errors should be handled by implementing an error system
      // not by printing them to the user.
      console.log(error.response.data);
    }
  }
}

export default ContactRequest;
