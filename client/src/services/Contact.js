import api from "services/api";

class Contact {
  static async sendMessage(body) {
    try {
      const response = await api.post('/contact', {
        'name': body.name,
        'phone': body.phone,
        'email': body.email,
        'property_id': body.property_id,
        'message': body.message,
        'source': body.source,
      });
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

export default Contact;
