import api from "@/libs/axios";

export default {
  
  login(data:any) {
    return api.post('/auth/login', data);
  },

};
