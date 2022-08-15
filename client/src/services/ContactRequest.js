import api from "services/api";

class ContactRequest {
  static async sendMessage(body) {
    try {
      const response = await api.post("/contact", JSON.stringify(body));
      return response;
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

export default ContactRequest;
