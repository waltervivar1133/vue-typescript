import { defineStore } from "pinia";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("services", () => {
  const router = useRouter();
  const user = ref({});
  const loading = ref(true);

  onMounted(() => {
    try {
      const data = JSON.parse(localStorage.getItem("USER"));
      user.value = data;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  });
  const getUserName = computed(() =>
    user.value?.nombre ? user.value?.nombre : ""
  );
  function logout() {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("USER");
    user.value = {};
    router.push({ name: "login" });
  }
  function setUser(userData: any) {
    user.value = userData;
  }
  return {
    user,
    loading,
    logout,
    getUserName,
    setUser,
  };
});
