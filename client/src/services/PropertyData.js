import api from "services/api";

class PropertyData {
  static async fromId(id) {
    try {
      const response = await api.get(`/property/${id}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

export default PropertyData;
