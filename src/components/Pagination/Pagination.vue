<script setup>
import { computed } from "vue";
import { useEmployeStore } from "../../stores/useEmployesStore";
const store = useEmployeStore();
const { currentPage, totalEmployees, nextPage, prevPage, goToPage } =
  useEmployeStore();
console.log(totalEmployees);
console.log(currentPage);
const totalPages = computed(() => {
  const total = Math.ceil(totalEmployees / 10);
  return total > 0 ? total : 1;
});

const currentPageComputed = computed(() => store.currentPage);

console.log("computad", currentPageComputed);
</script>


<template>
  <nav
    class="isolate inline-flex -space-x-px rounded-md shadow-sm my-6"
    aria-label="Pagination"
  >
    <ul class="flex items-center -space-x-1 h-10 text-base">
      <li>
        <a
          :class="{
            'text-gray-400 cursor-not-allowed': currentPageComputed <= 1,
            'text-gray-900 hover:bg-gray-50 cursor-pointer':
              currentPageComputed > 1,
          }"
          href="#"
          class="relative inline-flex items-center mr-3 px-3 py-2  focus:z-20 border rounded-md border-gray-scale-300"
          @click.prevent="currentPageComputed > 1 && prevPage()"
        >
          <i class="fa-solid fa-angle-left text-gray-scale-900"></i>
        </a>
      </li>

      <li v-for="i in totalPages" :key="i" class="mx-2">
        <a
          href="#!"
          :class="{
            'bg-gray-100 text-gray-scale-900 rounded-md': i === currentPageComputed,
            'hover:bg-gray-50': i !== currentPageComputed,
            'text-gray-900': i !== currentPageComputed,
          }"
          class="relative hidden items-center px-4 py-2 text-sm font-semibold  focus:z-20 focus:outline-offset-0 md:inline-flex"
          @click.prevent="goToPage(i)"
        >
          {{ i }}
        </a>
      </li>

      <li>
        <a
          :class="{
            'text-gray-400 cursor-not-allowed':
              currentPageComputed >= totalPages,
            'text-gray-900 hover:bg-gray-50 cursor-pointer':
              currentPageComputed < totalPages,
          }"
          href="#"
          class="relative inline-flex items-center ml-3 rounded-md px-3 py-2 border border-gray-scale-300"
          @click.prevent="currentPageComputed < totalPages && nextPage()"
        >
          <i class="fa-solid fa-angle-right text-gray-scale-900"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>
  