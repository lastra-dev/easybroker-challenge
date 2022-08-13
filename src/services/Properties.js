import api from "./api";

class Properties {
  // void -> List<Property>
  static async fetchPublished() {
    try {
      const response = await api.get("/properties");
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

export default Properties;
