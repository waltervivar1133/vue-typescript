import api from "@/libs/axios";

export default {
  
  allEmployes(pagination = {}) {
    const { limit = 10, page = 1 } = pagination;
    return api.get('/empleados', {
      params: {
        limit,
        page
      }
    });
  },

};
