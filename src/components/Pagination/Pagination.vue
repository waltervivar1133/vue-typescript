<script setup lang="ts">
import { computed } from "vue";
import { useEmployeStore } from "../../stores/useEmployesStore";
const store = useEmployeStore();
const totalPages = computed(() => {
  const total = Math.ceil(store.totalEmployees / 10);
  return total > 0 ? total : 1;
});
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
            'text-gray-400 cursor-not-allowed': store.currentPage <= 1,
            'text-gray-900 hover:bg-gray-50 cursor-pointer':
              store.currentPage > 1,
          }"
          href="#"
          class="relative inline-flex items-center mr-3 px-3 py-2 focus:z-20 border rounded-md border-gray-scale-300"
          @click.prevent="store.currentPage > 1 && store.prevPage()"
        >
          <i class="fa-solid fa-angle-left text-gray-scale-900"></i>
        </a>
      </li>

      <li v-for="i in totalPages" :key="i" class="mx-2">
        <a
          href="#!"
          :class="{
            'bg-gray-100 text-gray-scale-900 rounded-md':
              i === store.currentPage,
            'hover:bg-gray-50': i !== store.currentPage,
            'text-gray-900': i !== store.currentPage,
          }"
          class="relative hidden items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 md:inline-flex"
          @click.prevent="store.goToPage(i)"
        >
          {{ i }}
        </a>
      </li>

      <li>
        <a
          :class="{
            'text-gray-400 cursor-not-allowed': store.currentPage >= totalPages,
            'text-gray-900 hover:bg-gray-50 cursor-pointer':
              store.currentPage < totalPages,
          }"
          href="#"
          class="relative inline-flex items-center ml-3 rounded-md px-3 py-2 border border-gray-scale-300"
          @click.prevent="store.currentPage < totalPages && store.nextPage()"
        >
          <i class="fa-solid fa-angle-right text-gray-scale-900"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>
  