<script setup lang="ts">
import { useAuthStore } from "../stores/useAuthStore";
import { useEmployeStore } from "../stores/useEmployesStore";
import Aside from "../components/Aside/Aside.vue";
import HeaderHome from "../components/Header/Header.vue";
import SectionDataHome from "../components/SectionData/SectionData.vue";

const user = useAuthStore();
const storeEmployees = useEmployeStore();

</script>

<template>
  <div class="flex flex-col md:flex-row h-screen bg-gray-200 overflow-hidden">
    <Aside :user="user" />

    <div class="flex-1 flex flex-col">
      <HeaderHome :user="user" />
      <SectionDataHome :employees="storeEmployees.employees" />
    </div>
  </div>
</template>
