<script setup lang="ts">
  import { useAuthStore } from "../stores/useAuthStore"

  const user = useAuthStore()

</script>

<template>
  <main>
   <h1 class="text-4xl text-red-500"> {{ user.getUserName }}</h1>

   <button class="text-red-500 bg-black p-2"  @click="user.logout">ir a cerrar sesion</button>
  </main>
</template>
