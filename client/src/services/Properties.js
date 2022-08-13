import api from "./api";

class Properties {
  static async fetchAllFromPage(page) {
    try {
      const response = await api.get(`/properties/${page}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

export default Properties;
