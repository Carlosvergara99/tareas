<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## Pre-requisitos :pencil:

- PHP : ≥8.0
- [Composer](https://getcomposer.org/download/).
- [Git](https://git-scm.com/).
- [Node.Js](https://nodejs.org/es//).
## Instalación :clipboard:

1. Abrir  la consola de comandos de Git (Windows) o la Terminal en sistemas basados en Unix (Mac o Linux) y posicionare en el directorio raíz.
2. Después Ejecutar el siguiente comando:  
```
git clone https://github.com/Carlosvergara99/prueba_backend.git
```
.
3. Luego debe ingresar a la carpeta del proyecto y ejecutar ejecuta el comando:
```
composer install
```
4. El siguiente paso es copiar el contenido del archivo **.env.example** en un nuevo archivo con el nombre **.env** , para eso debemos situarnos dentro del proyecto y ejecutar el siguiente comando:
 
```
cp .env.example .env

```
5. Generar APP_KEY, Para generar la **APP_KEY** del proyecto ejecuta el siguiente comando: 
```
php artisan key:generate

```

6. Crear una base de datos .
7. [Configurar la base de datos](https://laravel.com/docs/9.x/database)
8. Ejecutar las migraciones con el siguiente comando:

```
php artisan migrate 
npm install 
```


9. Para  configurar el envio de correo se debe configurar las siguientes variables en el archivo .env


| code |
| --- | 
| `MAIL_MAILER` 
  `MAIL_HOST` 
  `MAIL_PORT`
| `MAIL_USERNAME` 

10. Para ejecutar la aplicación se recomienda abrir una nueva terminal,situarse dentro del proyecto y ejecutar el siguiente comando:
```
 php artisan serve
 npm run dev
```

## Autor

Carlos Vergara
