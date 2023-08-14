<script setup lang="ts">
interface User {
  logout: () => void;
}

defineProps({
  user: {
    type: Object as () => User,
    required: true,
  },
});
</script>

<template>
  <aside
    class="w-full md:w-64 p-6 bg-white h-auto md:max-h-screen md:overflow-y-auto md:h-full border-b md:border-b-0 md:border-r justify-between flex flex-col"
  >
    <div class="flex flex-col justify-center items-center">
      <img
        src="../../assets/images/logo-gray.svg"
        class="w-28 text-center"
        alt=""
      />
      <ul class="space-y-2 tracking-wide mt-8">
        <li>
          <a
            href="#"
            aria-label="dashboard"
            class="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-green-base"
          >
            <svg
              class="h-6 w-6 text-green-base"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            <span class="-mr-1 text-sm font-bold">Empleados</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group"
          >
            <svg
              class="h-6 w-6 text-gray-scale-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path
                d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"
              />
              <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
            </svg>
            <span class="text-gray-scale-900 text-sm font-bold"
              >Reclutamiento</span
            >
          </a>
        </li>
      </ul>
    </div>
    <div class="flex items-center justify-center w-full">
      <button
        class="px-5 py-4 border border-gray-scale-900 w-full rounded-lg text-md font-bold"
        @click="user.logout"
      >
        Salir
      </button>
    </div>
  </aside>
</template>
