<template>
  <div class="container my-4">
    <h2>Formulario de Contacto</h2>
    <form @submit.prevent="enviarFormulario">
      <div class="mb-3">
        <label class="form-label">Nombre completo</label>
        <input v-model="form.nombre" type="text" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Correo electrónico</label>
        <input v-model="form.email" type="email" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Servicio de Interés</label>
        <input v-model="form.servicio" type="text" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Mensaje</label>
        <textarea v-model="form.mensaje" class="form-control" rows="4"></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
    </form>

    <div v-if="mensajeEstado" :class="`alert alert-${tipoEstado} mt-3`">
      {{ mensajeEstado }}
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  nombre: '',
  email: '',
  servicio: '',
  mensaje: ''
})

const mensajeEstado = ref('')
const tipoEstado = ref('')

const enviarFormulario = () => {
  if (!form.nombre || !form.email || !form.servicio || !form.mensaje) {
    mensajeEstado.value = 'Por favor complete todos los campos obligatorios.'
    tipoEstado.value = 'danger'
    return
  }

  mensajeEstado.value = '¡Gracias por contactarnos! Su mensaje ha sido enviado exitosamente.'
  tipoEstado.value = 'success'
  
  form.nombre = ''
  form.email = ''
  form.servicio = ''
  form.mensaje = ''
}
</script>