# Enlaces oficiales MPBA

Landing propia del Ministerio Público de la Provincia de Buenos Aires para reemplazar el Linktree de **@mpbaoficial**. No tiene publicidad ni marcas de terceros y se edita desde un panel con contraseña.

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página pública |
| `admin.html` | Panel: enlaces, apariencia, encabezado, redes e historial |
| `assets/enlaces.js` | El contenido publicado (lo escribe el panel) |
| `assets/config.js` | Conexión del panel con GitHub, con el token cifrado (lo escribe el panel) |
| `assets/core.js` | Íconos, estilos predefinidos y tipografías |
| `api.php`, `data/`, `uploads/` | Solo para publicar en un servidor propio con PHP (ver punto 2) |

---

## 1. Publicación en GitHub Pages

### Puesta en marcha (una sola vez)
1. Subir el contenido de esta carpeta a la raíz del repositorio.
2. **Settings → Pages → Deploy from a branch → `main` / `(root)`**.
3. Crear un token en **GitHub → Settings → Developer settings → Fine-grained tokens → Generate new token**:
   - *Repository access*: **Only select repositories** → este repositorio.
   - *Permissions → Repository permissions → Contents*: **Read and write**.
   - *Expiration*: la que defina el área (al vencer, se carga uno nuevo; ver abajo).
4. Abrir `https://<usuario>.github.io/<repo>/admin.html`. Aparece **Configurar el panel**:
   - Repositorio (se completa solo), rama `main`, el token y la contraseña del panel.
   - Al guardar, el panel escribe `assets/config.js` en el repo con el token **cifrado** con esa contraseña (AES-256-GCM, clave derivada con PBKDF2 de 310.000 iteraciones). El token nunca queda legible en el repositorio.

### Uso diario
- Ingresar a `admin.html` con la contraseña, editar y tocar **Publicar cambios**.
- Cada publicación es un commit en el repo. GitHub reconstruye la página y los cambios se ven en **uno o dos minutos**.
- **Historial** lista las versiones publicadas y permite restaurar cualquiera.

### Cambiar la contraseña o renovar el token
En la pantalla de ingreso, **Restablecer acceso**: se vuelve a cargar el token (uno nuevo o el mismo) y se define una contraseña nueva. Sin un token válido no se puede restablecer, así que nadie puede tomar el control solo con acceso al panel.

### Recomendaciones
- Contraseña larga (por ejemplo, una frase de 4 o 5 palabras): el archivo cifrado es público.
- El token debe tener acceso **solo a este repositorio** y **solo a Contents**.
- Si se sospecha una filtración: revocar el token en GitHub y usar *Restablecer acceso*.

---

## 2. Pase al dominio del MPBA (Desarrollo)

**Opción A: servidor con PHP 8+ (recomendada).** El panel guarda directamente en el servidor, sin GitHub.
1. Copiar la carpeta al servidor, por ejemplo en `https://www.mpba.gov.ar/enlaces/`.
2. Dar permiso de escritura al servidor web sobre `data/`, `data/backups/`, `uploads/` y `assets/enlaces.js`.
3. Entrar a `admin.html`. Al detectar `api.php`, pide **crear la contraseña** (hacerlo apenas se sube).
4. La seguridad la da el servidor: contraseña con `password_hash`, bloqueo tras 5 intentos, sesión HttpOnly/SameSite, anti-CSRF, validación de todo el contenido y respaldo de las últimas 30 versiones.
5. Nginx no lee `.htaccess`, así que hay que agregar:
   ```nginx
   location ^~ /enlaces/data/ { deny all; }
   location ~ ^/enlaces/uploads/.*\.(php|phtml|phar)$ { deny all; }
   ```
6. Si se olvida la contraseña: borrar `data/auth.json` y volver a entrar.

**Opción B: hosting estático.** Funciona igual que en GitHub Pages si el sitio se publica desde el mismo repositorio.

Para cualquiera de las dos opciones, actualizar el link en las bios de las redes y redirigir el Linktree a la nueva dirección.
