# Image Collector
## Descripción

**Image Collector** es una aplicación que le permitirá a los usuarios construir una colección de imágenes de libre uso.

Los usuarios tendrán la posibilidad de ver la colección de imágenes de otros usuarios de la aplicación, y podrán marcar una colección como "favorita"

Los usuarios estarán almacenados en la base de datos, deberán estar logueados para agregar imágenes a su colección, y marcar una colección como favorita.

### Pre-condiciones del ejercicio

* No se realizará la registración de usuarios, estarán presentes en la BD.
* El usuario será identificado mediante un token JWT que deberá enviar a los endpoints que requieran seguridad.
* El mecanismo de seguridad ya está desarrollado.

### Configuración

Crear un archivo .env en el raíz del proyecto, con el siguiente contenido:

```ini
# URL al archivo de la base de datos SQLite
DATABASE_URL=file:./dev.db
# Secret para la firma de los token JWT
JWT_SECRET_KEY=some-random-string
```

## Dependencias

* Se utilizará la API de **Picsum** para obtener las imágenes disponibles para armar la colección

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Prisma stuff

### Migraciones

```bash
npx prisma migrate dev --name XXX
```