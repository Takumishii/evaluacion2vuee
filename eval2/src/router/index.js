import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/inicio.vue'
import Servicios from '../views/Servicios.vue'
import DetalleServicio from '../views/DetalleServicio.vue'
import Favoritos from '../views/Favoritos.vue'
import ContactoView from '../views/Contacto.vue'
import Error404 from '../views/Error404.vue'

const routes = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/servicios', name: 'Servicios', component: Servicios },
  { path: '/servicios/:id', name: 'Detalle', component: DetalleServicio },
  { path: '/favoritos', name: 'Favoritos', component: Favoritos },
  { path: '/contacto', name: 'Contacto', component: ContactoView },
  { path: '/:pathMatch(.*)*', name: 'Error404', component: Error404 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router