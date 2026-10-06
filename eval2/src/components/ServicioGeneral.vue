<template>
  <div class="card border p-3 rounded mb-3">
    <h3>{{ servicio.nombre }}</h3>
    <p><strong>Categoría:</strong> {{ servicio.categoria }}</p>
    <p>{{ servicio.descripcion }}</p>
    <p><strong>Precio:</strong> ${{ servicio.precio.toLocaleString('es-CL') }}</p>
    <p>
      <strong>Estado:</strong> 
      <span v-if="servicio.disponible" class="text-success">Disponible</span>
      <span v-else class="text-danger">No Disponible</span>
    </p>
    
    <div class="d-flex gap-2 align-items-center">
      <router-link :to="`/servicios/${servicio.id}`" class="btn btn-primary">
        Ver Detalle
      </router-link>

      <button 
        @click="$emit('toggle-favorito', servicio.id)" 
        class="btn"
        :class="esFavorito ? 'btn-warning' : 'btn-outline-warning'"
      >
        {{ esFavorito ? '★ En Favoritos' : '☆ Agregar a Favoritos' }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  servicio: { type: Object, required: true },
  esFavorito: { type: Boolean, default: false }
})

defineEmits(['toggle-favorito'])
</script>