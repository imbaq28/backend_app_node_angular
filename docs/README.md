# Instalar y Habilitar Sequelize y Sequelize-CLI
- para migraciones, modelos y seeders y conexion con BD

## 1. Instalar Sequelize
```bash
npm i sequelize
```
## 2. Instalar Sequelize-cli
```bash
npm install --save-dev sequelize-cli
```
## 3. Configurar .sequelizerc
```js
const path = require('path');

module.exports = {
  'config': path.resolve('src/config', 'database.json'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'seeders'),
  'migrations-path': path.resolve('src', 'migrations')
};
```
## 4. Iniciar un nuevo proyecto con sequelize-cli
```bash
npx sequelize-cli init
```

------
# Comandos GIT y GitHub
## Descargar e Instalar GIT
```
http://git-scm.com/
```
- Luego Instalar
- Para configurar agregar usuario y correo y luego ejecutar
```
git config --global user.name "su nombre"
git config --global user.mail "micorreo@mail.com"
```
- Crear una cuenta github, bitbucket o Gitlab

## Inicializar un nuevo respositorio local o clonar
- para clonar un repositorio
```bash
git clone
```
- para crear un nuevo respositorio
```bash
git init
```

- para ignorar archivos y/o carpetas
- creamos un archivo (.gitignore) y registramos los archivos y carpetas
```
/node_module
/dist
package-lock.json
.env
```

## Registrar el repositorio remote (GITHUB), BITBUCKET O GITLAB)
- En este caso con GITHUB
```
git remote add origin git remote add origin https://github.com/imbaq28/backend_app_node_angular.git
```
-----
## Para registrar o agregar todos los archivos al (index)
```
git add .
```
## Para agregar o registrar los cambios los cambios agregamos un mensaje commit (head)
```
git commit -m "Configuracion base de proyecto node"
```
## Para subir todos los cambios al repositorio remoto
```
git push -u origin master
```
