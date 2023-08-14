<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import Pagination from "../../components/Pagination/Pagination.vue";
import { useEmployeStore } from "../../stores/useEmployesStore";
import type { Employee } from "../../stores/useEmployesStore";
import Skeleton from "../Skeleton/Skeleton.vue";
const store = useEmployeStore();
const startEmployee = computed(() => (store.currentPage - 1) * 10 + 1);
const endEmployee = computed(() =>
  Math.min(store.currentPage * 10, store.totalEmployees)
);
defineProps({
  employees: {
    type: Array as PropType<Employee[]>,
    required: true,
  },
});
</script>

<template>
  <div class="flex-1 bg-gray-scale-100 px-6 py-8 overflow-y-auto">
    <div class="bg-white rounded-2xl">
      <div v-if="store.isLoading">
        <Skeleton />
      </div>
      <section v-else>
        <div class="p-6 flex flex-col">
          <section class="flex justify-between items-center">
            <div class="flex flex-col gap-2">
              <p class="text-2xl font-bold text-gray-scale-900">Empleados</p>
              <span class="text-gray-scale-600 text-sm font-medium"
                >Gestiona tus empleados</span
              >
            </div>
            <div class="flex w-1/3 gap-2">
              <button
                class="px-5 py-4 max-w-xl border border-gray-scale-900 w-full rounded-lg text-md font-bold flex justify-center items-center gap-2 tracking-[0.3px]"
              >
                <i class="fa-solid fa-download"></i>Descargar
              </button>
              <button
                class="px-5 py-4 max-w-xl bg-gray-scale-900 w-full rounded-lg text-md text-white font-bold flex justify-center items-center gap-2"
              >
                <i class="fa-solid fa-plus"></i>Nuevo
              </button>
            </div>
          </section>
          <section class="flex my-6">
            <div class="flex w-full pr-2">
              <div class="relative w-full">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-gray-scale-900"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-scale-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Buscar empleado"
                  required
                />
              </div>
            </div>

            <div class="flex w-2/4 pl-2">
              <select
                id="countries"
                class="bg-white border border-gray-scale-300 text-gray-scale-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              >
                <option selected>Nombre de cargo</option>
                <option value="prueba">Prueba</option>
              </select>
            </div>
          </section>
        </div>

        <section
          class="relative overflow-x-auto shadow-md sm:rounded-lg p-6 pt-0 bg-white"
        >
          <table class="w-full text-sm text-left text-gray-500">
            <thead
              class="text-xs text-gray-scale-600 tracking-[0.2px] font-bold capitalize bg-gray-50 rounded-lg"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Nombre</th>
                <th scope="col" class="px-6 py-3">Nombre de cargo</th>
                <th scope="col" class="px-6 py-3">Departamento</th>
                <th scope="col" class="px-6 py-3">Oficina</th>
                <th scope="col" class="px-6 py-3">Cuenta</th>
                <th scope="col" class="px-6 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b"
                v-for="employee in employees"
                :key="employee.id"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <p class="text-sm font-medium">{{ employee.nombre }}</p>
                  <p class="font-normal text-gray-scale-500 text-xs">
                    {{ employee.correo }}
                  </p>
                </th>
                <td class="px-6 py-4 text-sm font-medium">
                  {{ employee.cargo }}
                </td>
                <td class="px-6 py-4 text-sm font-medium">
                  {{ employee.departamento }}
                </td>
                <td class="px-6 py-4 text-sm font-medium">
                  {{ employee.oficina }}
                </td>
                <td class="px-6 py-4 text-sm font-medium">
                  {{ employee.estadoCuenta }}
                </td>
                <td class="px-3 py-4 gap-2 flex justify-center items-center">
                  <div class="px-2 py-1 bg-green-600 rounded-lg">
                    <i class="fa-solid fa-eye text-white text-xs"></i>
                  </div>
                  <div class="px-2 py-1 bg-blue-600 rounded-lg">
                    <i class="fa-solid fa-pen text-white text-xs"></i>
                  </div>
                  <div class="px-2 py-1 bg-red-600 rounded-lg">
                    <i class="fa-solid fa-trash text-white text-xs"></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="w-full flex justify-between items-center pr-6">
            <Pagination />
            <div class="flex gap-2 justify-center items-center">
              <p class="text-sm font-medium text-gray-scale-600">
                Mostrando {{ startEmployee }} a {{ endEmployee }} de
                {{ store.totalEmployees }} registros
              </p>
              <select
                id="countries"
                class="bg-white border cursor-not-allowed border-gray-scale-300 text-gray-scale-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-30 px-1 py-1"
              >
                <option selected>Mostrar 10</option>
                <option value="prueba">Prueba</option>
              </select>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>
