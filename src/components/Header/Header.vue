<script setup lang="ts">
import { useAuthStore } from "../../stores/useAuthStore";

type AuthStoreType = ReturnType<typeof useAuthStore>;
const user: AuthStoreType = useAuthStore();

defineProps({
  user: {
    type: Object as () => AuthStoreType,
    required: true,
  },
});
</script>

<template>
  <header
    class="py-6 text-white flex justify-end items-center px-8 gap-2 border-b border-gray-scale-300 bg-white"
  >
    <div class="rounded-full bg-orange-base p-2 h-10 w-10 text-white">CQ</div>
    <p class="text-gray-scale-900 text-sm font-bold">
      {{ user.getUserName }}
    </p>
  </header>
</template>
