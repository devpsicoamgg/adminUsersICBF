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



| Endpoint                          | Método | Descripción                                | Ruta localhost                                   |
|-----------------------------------|--------|--------------------------------------------|--------------------------------------------------|
| **Administradores** |
| /admin/coordinators/              | POST   | Crear un coordinador por administrador     | `http://localhost:3001/admin/coordinators/`      |
| /admin/contract/                  | POST   | Crear un contrato por administrador        | `http://localhost:3001/admin/contract/`          |
| /admin/teachers                   | POST   | Crear un docente por administrador        | `http://localhost:3001/admin/teachers`           |
| /admin/groups/                    | POST   | Crear un grupo por administrador           | `http://localhost:3001/admin/groups`             |
| /admin/coordinators/:id           | PATCH  | Actualizar coordinador por ID por admin    | `http://localhost:3001/admin/coordinators/:id`   |
| /admin/users/:id                  | PATCH  | Actualizar usuario por ID por admin        | `http://localhost:3001/admin/users/:id`          |
| /admin/groups/:id                 | PATCH  | Actualizar grupo por ID por admin          | `http://localhost:3001/admin/groups/:id`         |
| /admin/teachers/:id               | PATCH  | Actualizar docente por ID por admin       | `http://localhost:3001/admin/teachers/:id`       |
| /admin/contract/:id               | PATCH  | Actualizar contrato por ID por admin       | `http://localhost:3001/admin/contract/:id`       |
| /admin/coordinators/              | GET    | Obtiene todos los coordinadores            | `http://localhost:3001/admin/coordinators/`      |
| /admin/coordinators/:id           | GET    | Obtiene coordinador por ID                 | `http://localhost:3001/admin/coordinators/:id`   |
| /admin/teachers/                  | GET    | Obtiene todos los docentes                 | `http://localhost:3001/admin/teachers/`          |
| /admin/teachers/:id               | GET    | Obtiene docente por ID                    | `http://localhost:3001/admin/teachers/:id`       |
| /admin/groups/                    | GET    | Obtiene todos los grupos                   | `http://localhost:3001/admin/groups/ `           |
| /admin/groups/:id                 | GET    | Obtiene grupo por ID                       | `http://localhost:3001/admin/groups/:id`         |
| /admin/users/                     | GET    | Obtiene todos los usuarios                 | `http://localhost:3001/admin/users/`             |
| /admin/users/:id                  | GET    | Obtiene usuario por ID                     | `http://localhost:3001/admin/users/:id`          |
| **Coordinadores** |
| /coordinators/teachers            | POST   | Crear un docente por coordinador          | `http://localhost:3001/coordinators/teachers`    |
| /coordinators/groups              | POST   | Crear un grupo por coordinador             | `http://localhost:3001/coordinators/groups`      |
| /coordinators/users/:id           | PATCH  | Actualizar usuario por ID por coordinador  | `http://localhost:3001/coordinators/users/:id`   |
| /coordinators/groups/:id          | PATCH  | Actualizar grupo por ID por coordinador    | `http://localhost:3001/coordinators/groups/:id`  |
| /coordinators/teachers/:id        | PATCH  | Actualizar docente por ID por coordinador | `http://localhost:3001/coordinators/teachers/:id`|
| /coordinators/users/:id           | DELETE | Eliminar usuario por ID por coordinador    | `http://localhost:3001/coordinators/users/:id`   |
| /coordinators/groups/:id          | DELETE | Eliminar grupo por ID por coordinador      | `http://localhost:3001/coordinators/groups/:id`  |
| /coordinators/teachers/:id        | DELETE | Eliminar docente por ID por coordinador   | `http://localhost:3001/coordinators/teachers/:id`|
| /coordinators/contract/2          | GET    | Obtiene contrato                           | `http://localhost:3001/coordinators/contract/2`  |
| /coordinators/users/              | GET    | Obtiene todos los usuarios                 | `http://localhost:3001/coordinators/users/`      |
| /coordinators/users/:id           | GET    | Obtiene usuario por ID                     | `http://localhost:3001/coordinators/users/:id`   |
| /coordinators/groups              | GET    | Obtiene todos los grupos                   | `http://localhost:3001/coordinators/groups`      |
| /coordinators/groups/:id          | GET    | Obtiene grupo por ID                       | `http://localhost:3001/coordinators/groups/:id`  |
| /coordinators/teachers            | GET    | Obtiene todos los docentes                 | `http://localhost:3001/coordinators/teachers`    |
| **Docentes** |
| /teachers/coordinators            | GET    | Obtiene coordinadores                      | `http://localhost:3001/teachers/coordinators`   |
| /teachers/users/                  | POST   | Crea un usuario                            | `http://localhost:3001/teachers/users/`         |
| /teachers/users/:id               | PATCH  | Patchea un usuario                         | `http://localhost:3001/teachers/users/:id`       |
| /teachers/group/:id               | PATCH  | Patchea un grupo                           | `http://localhost:3001/teachers/group/:id`       |
| /teachers/teachers/:id            | PATCH  | Se patchea a él mismo                      | `http://localhost:3001/teachers/teachers/:id`    |
| /teachers/users/:id               | GET    | Obtiene usuario por ID                     | `http://localhost:3001/teachers/users/:id`      |
| /teachers/users/                  | GET    | Obtiene usuarios                           | `http://localhost:3001/teachers/users/`         |
| /teachers/contract/8              | GET    | Obtiene contrato por ID                    | `http://localhost:3001/teachers/contract/8`     |
| /teachers/groups/:id              | GET    | Obtiene grupo por ID                       | `http://localhost:3001/teachers/groups/:id`     |
| /teachers/groups/                 | GET    | Obtiene todos los grupos                   | `http://localhost:3001/teachers/groups/`        |
| /teachers/teachers/               | GET    | Obtiene todos los docentes                 | `http://localhost:3001/teachers/teachers/`      |
