<script setup lang="ts">
import { inject, ref } from "vue";
import { useRouter } from "vue-router";
import AuthAPI from "../services/AuthAPI";
import { useAuthStore } from "../stores/useAuthStore";
import SideBar from "../components/SideBarAuth/SideBar.vue";
import FormAuth from "../components/Form/FormAuth.vue";


interface Toast {
  open(options: { message: string; type: string }): void;
}
const toast = inject("toast") as Toast;
const router = useRouter();
const user = useAuthStore();
const errorMessage = ref<string | undefined>();


const handleSubmit = async (formData: any) => {
  try {
    const { data } = await AuthAPI.login(formData);
    localStorage.setItem("AUTH_TOKEN", data.data.token);
    localStorage.setItem("USER", JSON.stringify(data.data.user));
    router.push({ name: "home" });
    toast.open({
      message: "Bienvenido a tu plataforma",
      type: "success",
    });
  } catch (error: any) {
    if (error.response.data.status === "error") {
      errorMessage.value = error.response.data.message;
    }
  }
};
</script>

<template>
  <section class="flex flex-col md:flex-row max-w-10xl mx-auto">
    <SideBar />

    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex flex-col justify-between items-center"
    >
      <div class="w-full flex flex-col justify-center h-full">
        <img
          src="../assets/images/logo-gray.svg"
          alt=""
          class="w-2/5 md:hidden block text-center mx-auto"
        />
        <h4 class="text-xl md:text-2xl font-bold mt-12 text-center leading-8">
          Iniciar Sesión
        </h4>

        <!-- <form class="mt-6" action="#" method="POST"> -->

        <FormAuth :handleSubmit="handleSubmit" :errorMessage="errorMessage" />
        <!-- </form> -->

        <p class="mt-8 text-center text-sm font-medium leading-12">
          ¿Eres nuevo aquí?
          <a href="#" class="text-green-base hover:bg-green-base/80"
            >Crea una cuenta</a
          >
        </p>
      </div>
      <div
        class="w-full text-center py-4 text-sm text-gray-scale-500 font-medium leading-12"
      >
        <p>© 2023 Culqi . Todos los derechos reservados</p>
      </div>
    </div>
  </section>
</template>



