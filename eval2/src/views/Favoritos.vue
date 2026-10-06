<template>
  <div class="container my-4">
    <h2>Servicios Favoritos</h2>

    <div v-if="cargando" class="alert alert-info">
      Cargando favoritos
    </div>

    <div v-else-if="serviciosFavoritos.length === 0" class="alert alert-warning">
      No tienes ningún servicio guardado en tus favoritos.
    </div>

    <div v-else>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <p class="mb-0">
          Tienes <strong>{{ serviciosFavoritos.length }}</strong> servicio(s) en favoritos.
        </p>
        <button @click="limpiarTodos" class="btn btn-outline-danger btn-sm">
          Vaciar todos los favoritos
        </button>
      </div>

      <ServicioCard 
        v-for="servicio in serviciosFavoritos" 
        :key="servicio.id" 
        :servicio="servicio"
        :esFavorito="true"
        @toggle-favorito="quitarFavorito"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ServicioGeneral from '../components/ServicioGeneral.vue'

const serviciosFavoritos = ref([])
const cargando = ref(true)

const cargarFavoritos = async () => {
  try {
    cargando.value = true
    
    const idsGuardados = []

    if (idsGuardados.length === 0) {
      serviciosFavoritos.value = []
      return
    }

    const res = await fetch('/servicios.json')
    const todosLosServicios = await res.json()

    serviciosFavoritos.value = todosLosServicios.filter(s => idsGuardados.includes(s.id))
  } catch (error) {
    console.error('Error al cargar los servicios favoritos:', error)
  } finally {
    cargando.value = false
  }
}


onMounted(() => {
  cargarFavoritos()
})
</script>