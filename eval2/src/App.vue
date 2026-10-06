<template>
  <div id="app">
    <Navbar />
    <!-- Agregamos la clase "content" para empujar el footer hacia abajo -->
    <main class="content">
      <router-view />
    </main>
    <!-- Agregamos la etiqueta del Footer aquí -->
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1; /* Esto hace que el contenido ocupe el espacio disponible y mande el footer al fondo */
}

/* Estilos globales básicos */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
}
.container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
</style>