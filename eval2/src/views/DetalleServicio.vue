<template>
  <div class="container my-4">
    <div v-if="cargando">Cargando servicio...</div>
    
    <div v-else-if="servicio">
      <h2>{{ servicio.nombre }}</h2>
      <p class="badge bg-secondary">{{ servicio.categoria }}</p>
      <p class="mt-3">{{ servicio.descripcion }}</p>
      <p><strong>Precio orientativo:</strong> ${{ servicio.precio.toLocaleString('es-CL') }}</p>
      <p>
        <strong>Disponibilidad:</strong> 
        <span v-if="servicio.disponible" class="text-success">Disponible actualmente</span>
        <span v-else class="text-danger">No disponible por el momento</span>
      </p>
      <router-link to="/servicios" class="btn btn-outline-secondary">Volver al catálogo</router-link>
    </div>

    <div v-else class="alert alert-danger">
      El servicio solicitado no existe.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const servicio = ref(null)
const cargando = ref(true)

onMounted(async () => {
  const idParam = Number(route.params.id)
  try {
    const res = await fetch('/servicios.json')
    const data = await res.json()
    servicio.value = data.find(s => s.id === idParam) || null
  } catch (e) {
    servicio.value = null
  } finally {
    cargando.value = false
  }
})
</script>