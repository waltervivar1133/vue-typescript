
<script setup lang="ts">
import type { PropType } from "vue";

type FormData = {
  correo: string;
  password: string;
};

type HandleSubmitFunction = (data: FormData) => void;

defineProps({
  handleSubmit: {
    type: Function as PropType<HandleSubmitFunction>,
    required: true,
  },
  errorMessage: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <FormKit
    type="form"
    submit-label="Iniciar Sesión"
    incomplete-message="Completa todos los campos"
    @submit="handleSubmit"
  >
    <div class="mt-4">
      <label class="block text-gray-scale-900 font-normal text-sm"
        >Correo electrónico <span class="text-error">*</span></label
      >
      <FormKit
        type="email"
        name="correo"
        placeholder="Ingresa el correo electrónico"
        validation="required|email"
        :validation-messages="{
          required: 'El correo electrónico es requerido',
          email: 'Ingresa un correo electrónico válido',
        }"
      />
    </div>

    <div class="mt-4">
      <label class="block text-gray-scale-900 font-normal text-sm"
        >Contraseña <span class="text-error">*</span></label
      >
      <FormKit
        type="password"
        name="password"
        placeholder="Ingresa el contraseña"
        validation="required"
        :validation-messages="{
          required: 'La contraseña es requerida',
        }"
      />
    </div>
    <p
      class="w-full text-xs text-error font-normal pt-4 px-2"
      v-if="errorMessage"
    >
      <i class="fa-solid fa-xmark"></i> {{ errorMessage }}
    </p>
  </FormKit>
</template>

<style>
</style>