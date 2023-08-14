import api from "@/libs/axios";

interface PaginationParams {
  limit?: number;
  page?: number;
}
export default {
  
  allEmployes(pagination: PaginationParams = {}) {
    const { limit = 10, page = 1 } = pagination;
    return api.get('/empleados', {
      params: {
        limit,
        page
      }
    });
  },

};
