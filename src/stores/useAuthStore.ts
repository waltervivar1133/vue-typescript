import { defineStore } from "pinia";
import { ref, onMounted, computed, type Ref } from "vue";
import { useRouter } from "vue-router";

export interface User {
  nombre?: string;
}
export interface AuthStore {
  user: Ref<User>;
  logout: () => void;
  getUserName: Ref<string>;
}

export const useAuthStore = defineStore("auth", (): AuthStore => {
  const router = useRouter();
  const user = ref({});

  onMounted(() => {
    try {
      const dataString = localStorage.getItem("USER");
      if (dataString) {
        const data = JSON.parse(dataString);
        if (data && typeof data === "object" && "nombre" in data) {
          user.value = data;
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
  const getUserName = computed(() => user?.value.nombre || "");

  function logout() {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("USER");
    user.value = {};
    router.push({ name: "login" });
  }

  return {
    user,
    logout,
    getUserName,
  };
});
