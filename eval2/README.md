# Evaluación 2 

Aplicación web desarrollada en Vue.js 3 (Options API / Composition API) para la publicación, consulta, filtrado y gestión de favoritos de servicios profesionales en la Región de Ñuble.


## tecnologias usadas

- **Vue.js 3** (Framework JavaScript SPA)
- **Vue Router** (Enrutamiento del lado del cliente)
- **LocalStorage API** (Persistencia local de datos)
- **Fetch API** (Consumo de datos asíncronos JSON)
- **GitHub** (Control de versiones)


## Registro de Proceso

### ETAPA 0 – Preparación del Repositorio
- Creación e inicialización del repositorio Git.
- Configuración inicial del proyecto con Vue 3 y Vite.
- Verificación del correcto despliegue local del servidor de desarrollo (`npm run dev`).
- **Commit:** `Iniciooo`

---

### ETAPA 1 – Estructura Inicial de la Aplicación
Organización del proyecto bajo una arquitectura modular y limpia para separar responsabilidades:

src/
├── components/   # Componentes reutilizables (ServicioGeneral.vue)
├── views/        # Vistas principales de la aplicación
├── router/       # Configuración de rutas SPA
├── App.vue       # Componente raíz
└── main.js       # Punto de entrada de la aplicación

### Eteapa 2 Navegacion con Vue Router
Configuración de Vue Router para permitir navegación fluida de tipo Single Page Application (SPA) mediante <RouterLink> y <RouterView>:

/ -> Vista de Inicio
/servicios -> Catálogo completo de servicios
/servicios/:id -> Vista detallada por servicio (Ruta dinámica)
/favoritos -> Listado de servicios guardados
/contacto -> Formulario de contacto y validación
/:pathMatch(.*)* -> Redirección a vista 404 (Página no encontrada)

- **Commit:** `Estructura y rutas`
- **Commit:** `navbar, ruta y navegacion funcional`

(Tiene partes de la etapa 4 tambien)

### Etapa 3 Catálogo Dinamico y Componentes

Construcción de catálogo con un conjunto de 6 servicios dinámicos (ID, Nombre, Categoría, Descripción, Precio, Disponibilidad).

eSTÁ la directiva v-for para renderizar elementos dinámicamente sin duplicación de código HTML.

Creación del componente reutilizable ServicioGeneral.vue, el cual recibe la información de cada servicio mediante props.

- **Commit:** `Servicios y estilos`
- **Commit:** `etapa 3 catalogo dinamico`

### Etapa 4 Búsqueda, Filtros y Condicionales
Integración de barra de búsqueda por texto (nombre de servicio) y selector de categoría.

Enlace de controles mediante v-model de manera simultánea (búsqueda combinada).

Cálculo dinámico de la lista resultante mediante la propiedad reactiva computed.

Uso de directivas condicionales v-if / v-else para mostrar la lista o el mensaje alternativo: "No se encontraron servicios para los criterios seleccionados."

Los commits de este modulo estan divididos entre:
- **Commit:** `Estructura y rutas`


### ETAPA 5 – Ruta Dinámica y Detalle del Servicio
- Configuración de la vista `DetalleServicios.vue` asociada a la ruta dinámica `/servicios/:id`.
- Captura del parámetro identificador `:id` desde la URL utilizando el composable `useRoute()` de Vue Router.
- Renderizado de la información detallada del servicio seleccionado: nombre, categoría, descripción completa, precio y disponibilidad.
- tIENE Manejo de condicionales para validar si el `ID` ingresado en la ruta existe dentro de los datos; en caso contrario, se despliega una alerta indicando que el servicies nn exis
- **Commit:** `Etapa 5 dinamica y detalle de servicio`


### ETAPA 6 – Comunicación entre Componentes (Props y Emit)
- El componente `ServicioGeneral.vue` gestiona la acción de agregar o quitar de favoritos.
- El flujo de datos bidireccional entre componentes es:
  - **Padre a Hijo (`props`):** Pasa la información del servicio y el estado booleano (`esFavorito`) para adaptar la interfaz del botón.
  - **Hijo a Padre (`emit`):** El componente `ServicioGeneral.vue` emite el evento personalizado `@toggle-favorito` con el `id` del servicio al hacer clic, permitiendo que la vista padre administre el estado.
- Separación efectiva de responsabilidades entre la representación visual (componente hijo) y la lógica de estado (vista padre).
- **Commit:** `ETAPA 6 – Comunicación entre componentes`

### ETAPA 7 – Persistencia con localStorage
- Implementación de la vista `Favoritos.vue` para visualizar los servicios seleccionados por el usuario.
- Guardado y recuperación de los identificadores de servicios en el almacenamiento local del navegador mediante `localStorage`.
- Conversión de estructuras de datos con `JSON.stringify()` al guardar y `JSON.parse()` al leer la información.
- Permite la eliminación individual de elementos guardados y la actualización reactiva de la interfaz.
- Verificación del cumplimiento de la prueba obligatoria: los datos de favoritos persisten correctamente tras recargar el navegador (F5).
- **Commit:** `Etapa7 - Persistencia localStorage`

