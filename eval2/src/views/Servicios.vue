<template>
  <div class="container my-4">
    <h2>Catálogo de Servicios de Ñuble</h2>

    <div class="row mb-4">
      <div class="col-md-6 mb-2">
        <input 
          v-model="busqueda" 
          type="text" 
          class="form-control" 
          placeholder="Buscar servicio por nombre..."
        />
      </div>
      <div class="col-md-6 mb-2">
        <select v-model="categoriaSeleccionada" class="form-select">
          <option value="">Todas las categorías</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Finanzas">Finanzas</option>
          <option value="Servicios del Hogar">Servicios del Hogar</option>
          <option value="Legal">Legal</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>
    </div>

    <div v-if="cargando" class="alert alert-info">Cargando servicios...</div>
    <div v-else-if="error" class="alert alert-danger">{{ error }}</div>

    <div v-else>
      <div v-if="serviciosFiltrados.length > 0">
        <ServicioCard 
          v-for="item in serviciosFiltrados" 
          :key="item.id" 
          :servicio="item"
          :esFavorito="favoritosIds.includes(item.id)"
          @toggle-favorito="toggleFavorito"
        />
      </div>
      <div v-else class="alert alert-warning">
        No se encontraron servicios para los criterios seleccionados.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'

const servicios = ref([])
const cargando = ref(true)
const error = ref(null)
const busqueda = ref('')
const categoriaSeleccionada = ref('')
const favoritosIds = ref(JSON.parse(localStorage.getItem('favoritos')) || [])

const cargarServicios = async () => {
  try {
    cargando.value = true
    const response = await fetch('/servicios.json')
    if (!response.ok) throw new Error('Error al obtener los servicios.')
    servicios.value = await response.json()
  } catch (err) {
    error.value = 'No se pudo cargar la información. Intente más tarde.'
  } finally {
    cargando.value = false
  }
}

const serviciosFiltrados = computed(() => {
  return servicios.value.filter(s => {
    const coincideNombre = s.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    const coincideCategoria = categoriaSeleccionada.value === '' || s.categoria === categoriaSeleccionada.value
    return coincideNombre && coincideCategoria
  })
})

const toggleFavorito = (id) => {
  if (favoritosIds.value.includes(id)) {
    favoritosIds.value = favoritosIds.value.filter(favId => favId !== id)
  } else {
    favoritosIds.value.push(id)
  }
  localStorage.setItem('favoritos', JSON.stringify(favoritosIds.value))
}

onMounted(() => {
  cargarServicios()
})
</script>