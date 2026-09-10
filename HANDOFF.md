# Handoff - Meirah Group Web

Fecha: 2026-06-10
Proyecto: sitio web inmobiliario para **Meirah Group**
Workspace: `C:\Users\Diego\OneDrive\Documentos\New project`

## Estado actual

El proyecto sigue siendo una demo frontend estatica con persistencia local en `localStorage`.

Marca visible actual:
- UI y meta: `Meirah Group`
- Bot: `MeirahBot`
- Namespace tecnico: `meirahgroup.*`

Contacto activo:
- Telefono/WhatsApp: `+1 (829) 393-5951`
- WhatsApp numerico: `18293935951`
- Correo: `contacto@meirahgroup.com`

Paleta activa:
- principal: `#1e2e47`
- secundario: `#e7dbc3`
- tipografia/base oscura: `#101a24`

## Archivos principales

- `index.html`: estructura del sitio.
- `styles.css`: layout, responsive, hero, trust band, temas y componentes.
- `script.js`: i18n, datos demo, filtros, modal, reservas, admin, chatbot, moneda y tema.
- `server.cjs`: servidor HTTP simple en `127.0.0.1:4173`.
- `assets/brand/`: branding PNG disponible actualmente:
  - `1.png`
  - `2.png`
  - `3.png`
  - `4.png`
  - `5.png`
  - `logo-meirahgroup-black.png`
  - `logo-meirahgroup-white.png`

## Branding en uso ahora

- Favicon: `assets/brand/logo-meirahgroup-black.png`
- Header brand mark: `assets/brand/logo-meirahgroup-black.png` en claro / `assets/brand/logo-meirahgroup-white.png` en oscuro
- Footer brand mark: `assets/brand/logo-meirahgroup-white.png`

Nota:
- Los PNG `2.png`, `3.png` y `5.png` muestran la version vieja del nombre (`MeiraGroup`), por eso no se estan exponiendo directamente en la UI visible.

## Estructura visible actual

Header:
- marca
- nav: Propiedades, Calculadoras, Vende/Alquila, Agenda tu cita, Sobre nosotros, Contacto
- selector de idioma ES/EN/PT
- selector de moneda USD/EUR/DOP
- toggle de tema claro/oscuro
- boton de admin
- boton WhatsApp Business

Hero:
- muestra `Meirah Group`
- slogan: `Tu Esencia • Tu Espacio • Tu Patrimonio`
- ya no muestra otros textos
- ya no muestra botones

Trust Band:
- queda fusionada parcialmente con el Hero usando `--trust-band-overlap`
- overlap actual:
  - desktop: `56px`
  - tablet: `48px`
  - movil: `44px`
- desktop: 4 columnas
- tablet/movil: 2 columnas

Secciones actuales:
1. Hero
2. Trust Band
3. Filtros
4. Propiedades
5. Calculadoras
6. Reservas
7. Vende/Alquila
8. Agenda tu cita
9. Sobre nosotros
10. Referencias
11. Blog
12. Acceso privado
13. Contacto
14. Admin panel

## Funcionalidades implementadas

- Filtros por operacion, tipo, zona, precio, habitaciones y m2.
- Tarjetas de propiedades con favoritos y hover.
- Modal de propiedad con galeria, soporte imagen/video y rotacion automatica.
- Reserva estimada para propiedades de alquiler.
- Plan de pagos para venta.
- Comentarios adicionales en reserva y pagos.
- Calculadoras:
  - hipotecaria
  - refinanciacion
  - asequibilidad
  - alquilar vs comprar
  - auto-cobro demo
- Idiomas ES/EN/PT.
- Monedas USD/EUR/DOP.
- Tema claro/oscuro.
- Chatbot local.
- Agenda de citas con calendario visual, horarios por asesor, confirmacion y enlace de WhatsApp.
- Equipo interno persistente con roles, disponibilidad semanal, pausas, fechas bloqueadas y excepciones.
- Login interno obligatorio por nombre completo del perfil y contraseña, con sesión limitada a la pestaña actual.
- Vista administrativa de citas con filtros y cambio de estado.
- Citas pasadas con más de 7 días ocultas de la vista reciente y disponibles desde el historial, sin borrado de datos.
- CRM local de clientes con etapas Nuevo, Calificado, Visita, Oferta y Cierre; filtros, responsable, prioridad, fecha de seguimiento y notas internas.
- Admin permite:
  - crear/editar/eliminar propiedades
  - subir imagenes y videos
  - agregar enlaces
  - gestionar reservas en calendario admin

Persistencia local:
- `meirahgroup.properties`
- `meirahgroup.favorites`
- `meirahgroup.leads`
- `meirahgroup.reservations`
- `meirahgroup.appointments`
- `meirahgroup.staff`
- `meirahgroup.session`

Credenciales demo internas:
- Developer: nombre `Diego Cueto`, contraseña `1234`
- CEO: nombre `Melissa Hawa`, contraseña `1234`
- Los demás perfiles usan su nombre completo y contraseña `demo123`.

Permisos:
- `admin`: propiedades, reservas, usuarios, horarios, citas y leads.
- `asesor`: solo su horario y sus propias citas.
- `asistente`: citas y leads; sin propiedades ni gestion de usuarios.
- `meirahgroup.lang`
- `meirahgroup.currency`
- `meirahgroup.theme`
- `meirahgroup.members`

## Cambios recientes importantes

1. El mapa fue eliminado por completo.
2. Se reemplazo el bloque del mapa por `Agenda tu cita` como placeholder.
3. El Hero se simplifico a isotipo + titulo + slogan.
4. Se cambio la tipografia visible a `Manrope` + `Inter`.
5. La marca visible paso a `Meirah Group`.
6. La Trust Band ahora se fusiona parcialmente con el Hero.
7. Se conectaron PNG reales de branding a favicon, header, hero y footer.

## Detalles tecnicos clave

Funciones utiles en `script.js`:
- `loadProperties()`
- `normalizeProperties()`
- `renderProperties()`
- `renderReservationPreview()`
- `openPropertyModal()`
- `renderMortgage()`
- `renderRefinance()`
- `renderAffordability()`
- `renderRentBuy()`
- `renderAutopaySchedule()`
- `setupAdmin()`
- `saveAdminReservation()`
- `clearAdminReservations()`

Responsive:
- enfoque mobile-first con media queries principales en `900px`, `700px` y `560px`
- Hero y Trust Band tienen reglas dedicadas

## Riesgos y pendientes

1. `server.cjs` aun imprime:
   - `MeirahGroup running at http://127.0.0.1:4173/`
   La UI ya usa `Meirah Group`, pero el mensaje de consola no esta alineado.

2. `script.js` conserva claves de traduccion viejas del Hero:
   - `heroEyebrow`
   - `heroCopy`
   Ya no se usan en el HTML actual.

3. El slogan en EN/PT sigue igual que en espanol. Si se quiere localizacion real, hay que traducirlo.

4. `Agenda tu cita` sigue siendo placeholder. No tiene calendario real, slots, asesores ni confirmacion.

5. No hay backend real. Todo sigue en frontend + `localStorage`.

## Comandos utiles

Levantar servidor:

```powershell
node server.cjs
```

URL:

```text
http://127.0.0.1:4173/
```

Buscar marca:

```powershell
rg -n "Meirah Group|MeirahGroup|MeirahBot|meirahgroup"
```

Validar JS:

```powershell
C:\Users\Diego\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe --check script.js
```

## Siguiente paso recomendado

El siguiente bloque natural es convertir `Agenda tu cita` en una seccion funcional con:
- calendario
- tipo de cita
- asesor
- modalidad presencial o virtual
- slots
- confirmacion
- almacenamiento o integracion backend
