import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import EmployeeAPI from "../services/EmployeeAPI";

export const useEmployeStore = defineStore("employee", () => {
  const employees = ref([]);
  const totalEmployees = ref(0);
  const currentPage = ref(1);
  const limit = ref(10);

  onMounted(fetchEmployees);

  async function fetchEmployees() {
    try {
      const response = await EmployeeAPI.allEmployes({
        page: currentPage.value,
        limit: limit.value,
      });
      employees.value = response.data.data;
      totalEmployees.value = response.data.total;
    } catch (error) {
      console.log("Error fetching employees:", error);
    }
  }

  function nextPage() {
    currentPage.value++;
    fetchEmployees();
  }

  function prevPage() {
    if (currentPage.value > 1) {
      currentPage.value--;
      fetchEmployees();
    }
  }

  function goToPage(page: any) {
    currentPage.value = page;
    fetchEmployees();
  }

  return {
    employees,
    currentPage,
    totalEmployees,
    nextPage,
    prevPage,
    goToPage,
    limit
  };
});
