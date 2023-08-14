import { ref, onMounted, type Ref } from "vue";
import { defineStore } from "pinia";
import EmployeeAPI from "../services/EmployeeAPI";

export interface Employee {
  id: number;
  nombre: string;
  correo: string;
  cargo: string;
  departamento: string;
  oficina: string;
  estadoCuenta: string;
}
export interface EmployeeStore {
  employees: Ref<Employee[] | unknown>;
  totalEmployees: Ref<number>;
  currentPage: Ref<number>;
  limit: Ref<number>;
  isLoading: Ref<boolean>;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
}

export const useEmployeStore = defineStore("employee", (): EmployeeStore => {
  const employees = ref<Employee[]>([]);
  const totalEmployees = ref<number>(0);
  const currentPage = ref<number>(1);
  const limit = ref<number>(10);
  const isLoading = ref<boolean>(false);

  onMounted(fetchEmployees);

  async function fetchEmployees() {
    isLoading.value = true;
    try {
      const response = await EmployeeAPI.allEmployes({
        page: currentPage.value,
        limit: limit.value,
      });
      employees.value = response.data.data;
      totalEmployees.value = response.data.total;
      isLoading.value = false;
      console.log(employees);
    } catch (error) {
      console.log("Error fetching employees:", error);
    } finally {
      isLoading.value = false;
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
    limit,
    isLoading,
  };
});
