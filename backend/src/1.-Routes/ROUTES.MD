# 01.-Estructura de Rutas
El proyecto contiene una estructura de rutas organizada de la siguiente manera:

### 1.1.-Routes
La carpeta principal `1.-Routes` contiene los archivos relacionados con las rutas de la aplicación.
El Archivo principal que importa y utiliza los subrouters de cada perfil de usuario para configurar las rutas principales de la aplicación se llama `mainRouter.js`

### 1.2Carpetas de Perfiles de Usuario
Dentro del folder `1.-Routes`, hay subcarpetas que representan los diferentes perfiles de usuario:

- **/1.1.-Admin**: Contiene las rutas relacionadas con la gestión administrativa, contiene a `subRouterAdmin.js` quien gestiona todos los métodos que configuran las rutas
- **/1.2.-Coordinators**: Contiene las rutas y métodos relacionadas con la administración de los coordinadores, contiene a `subRouterCoordinators.js` quien gestiona todos los métodos que configuran las rutas
- **/1.3.-Teachers**: Contiene las rutas relacionadas con la administración de los docentes, contiene a `subRouterTeachers.js` quien gestiona todos los métodos que configuran las rutas

### delAdminRouter

- DELETE /coordinators/:id
- DELETE /groups/:id
- DELETE /teachers/:id
- DELETE /contract/:id
- DELETE /administrativeassistant/:id
- DELETE /cuentamecollaborator/:id
- DELETE /nutricollaborator/:id
- DELETE /psysocial/:id

### getAdminRouter

- GET /coordinators/
- GET /coordinators/:id
- GET /users
- GET /contract
- GET /contract/:id
- GET /users/:id
- GET /groups
- GET /groups/:id
- GET /teachers/:id
- GET /teachers

### postAdminRouter

- POST /coordinators/
- POST /contract/
- POST /teachers
- POST /groups
- POST /nutritionist
- POST /psysocial
- POST /administrative
- POST /informationsystems

### patchAdminRouter

- PATCH /coordinators/:id
- PATCH /users/:id
- PATCH /groups/:id
- PATCH /teachers/:id
- PATCH /contract/:id
- PATCH /administrativeassistant/:id
- PATCH /psysocial/:id
- PATCH /informationsystems/:id
- PATCH /nutritionist/:id

### delCoordinatorsRouter

- DELETE /groups/:id
- DELETE /teachers/:id
- DELETE /users/:id

### getCoordinatorsRouter

- GET /contract/:id
- GET /users
- GET /users/:id
- GET /groups
- GET /coordinators/:contractId
- GET /groups/:id
- GET /teachers
- GET /teachers/:id

### postCoordinatorsRouter

- POST /teachers
- POST /groups
- POST /psysocial
- POST /nutri

### patchCoordinatorsRouter

- PATCH /users/:id
- PATCH /groups/:id
- PATCH /teachers/:id
- PATCH /coordinator/:id
- PATCH /nutri/:id
- PATCH /psysoc/:id

### getTeachersRouter

- GET /coordinators/:id
- GET /users
- GET /users/:id
- GET /contract/:id
- GET /groups
- GET /groups/:id
- GET /teachers

### postTeachersRouter

- POST /users
- POST /users/:id

### patchTeacherRouter

- PATCH /users/:id
- PATCH /groups/:id
- PATCH /teachers/:id
- PATCH /administrativeassiatant/:id
- PATCH /cuentame/:id
- PATCH /nutrition/:id
