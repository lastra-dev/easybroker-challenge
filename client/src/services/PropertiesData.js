import api from "services/api";

class PropertiesData {
  static async fromPage(page) {
    try {
      const response = await api.get(`/properties/${page}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

export default PropertiesData;
