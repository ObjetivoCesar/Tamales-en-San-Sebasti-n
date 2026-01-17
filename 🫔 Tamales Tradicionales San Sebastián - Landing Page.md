# 🫔 Tamales Tradicionales San Sebastián - Landing Page

Landing page estática optimizada para conversión y SEO local para la venta de tamales tradicionales en San Sebastián, Loja, Ecuador.

## 📋 Características

✅ **Optimizado para SEO Local**
- Palabras clave locales: "tamales San Sebastián", "tamales Loja", "tamal lojano"
- Schema JSON para Local Business
- Meta tags optimizados
- Sitemap y robots.txt

✅ **Integración WhatsApp**
- Botones CTA con mensajes predefinidos rastreables
- Número de contacto: Rosa Quezada (0982810040)
- Mensajes personalizados por tipo de tamal

✅ **Registro de Clics**
- Almacenamiento local en navegador (localStorage)
- Tracking de sesión, IP, dispositivo y timestamp
- Exportación a CSV

✅ **Sincronización Google Sheets**
- Envío automático de clics a Google Sheets
- Webhook configurable
- Estadísticas en tiempo real

✅ **Branding Modular**
- Variables CSS para cambiar colores fácilmente
- Tipografía personalizable
- Sistema de espaciado flexible

✅ **Responsive Design**
- Mobile-first
- Optimizado para todos los dispositivos
- Animaciones suaves

✅ **Accesibilidad**
- WCAG 2.1 compliant
- Focus visible
- Soporte para motion preferences

## 📁 Estructura de Archivos

```
tamales-san-sebastian/
├── index.html                 # Página principal
├── styles.css                 # Estilos CSS con variables
├── script.js                  # Lógica JavaScript
├── robots.txt                 # SEO
├── sitemap.xml                # SEO
├── README.md                  # Este archivo
├── BRANDING_GUIDE.md          # Guía de personalización
├── GOOGLE_SHEETS_SETUP.md     # Configuración de Google Sheets
└── images/                    # (Opcional) Carpeta para imágenes
```

## 🚀 Inicio Rápido

### 1. Descargar los archivos

Descarga todos los archivos de la landing page.

### 2. Abrir en navegador

Simplemente abre `index.html` en tu navegador:
```bash
# En macOS/Linux
open index.html

# En Windows
start index.html
```

O arrastra `index.html` a tu navegador.

### 3. Configurar Google Sheets (Opcional)

Para sincronizar clics a Google Sheets:

1. Lee el archivo `GOOGLE_SHEETS_SETUP.md`
2. Sigue los pasos para crear un Google Apps Script
3. Configura el webhook en la consola del navegador

### 4. Personalizar Branding

Para cambiar colores, tipografía y contenido:

1. Lee el archivo `BRANDING_GUIDE.md`
2. Edita `styles.css` para cambiar colores
3. Edita `index.html` para cambiar textos

## 📊 Monitoreo de Clics

### Ver estadísticas

Abre la consola del navegador (F12) y ejecuta:

```javascript
window.tamalesAdmin.logStats();
```

### Exportar clics como CSV

```javascript
window.tamalesAdmin.exportCSV();
```

### Ver todos los clics

```javascript
window.tamalesAdmin.getAllClicks();
```

### Sincronizar a Google Sheets

```javascript
window.tamalesAdmin.syncToSheets();
```

## 🎨 Personalización

### Cambiar colores

Edita `styles.css` y modifica las variables en `:root`:

```css
:root {
    --color-primary: #F4C430;      /* Amarillo mostaza */
    --color-accent: #D97706;       /* Naranja/marrón */
    --color-tertiary: #FFF8E7;     /* Beige */
    --color-text: #2D3748;         /* Gris oscuro */
}
```

### Cambiar número de WhatsApp

Edita `script.js`:

```javascript
const CONFIG = {
    WHATSAPP_NUMBER: '0982810040',  // Tu número aquí
    WHATSAPP_COUNTRY_CODE: '593',   // Código de país
};
```

### Cambiar contenido

Edita `index.html` directamente.

## 📱 Responsive Design

La página se adapta automáticamente a:
- **Desktop**: 1400px+
- **Tablet**: 768px - 1399px
- **Mobile**: < 768px

## 🔍 SEO

### Palabras clave optimizadas

- Tamales en San Sebastián
- Tamales en Loja Ecuador
- Tamal lojano tradicional
- Tamales de chancho en Loja
- Tamales con café
- Comida típica de Loja

### Meta tags

Los meta tags están configurados en `index.html` para:
- Title
- Description
- Keywords
- Open Graph (redes sociales)
- Schema JSON (Local Business)

## 🌐 Deployment

### Opción 1: Hosting Gratuito (Recomendado)

**GitHub Pages:**
1. Crea un repositorio en GitHub
2. Sube los archivos
3. Ve a Settings > Pages
4. Selecciona "main" como rama
5. Tu sitio estará en: `https://tu-usuario.github.io/tamales-san-sebastian`

**Netlify:**
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto
3. Tu sitio estará en línea en segundos

**Vercel:**
1. Ve a [vercel.com](https://vercel.com)
2. Importa el repositorio de GitHub
3. Tu sitio estará en línea automáticamente

### Opción 2: Hosting Pagado

- **Bluehost**: $2.95/mes
- **SiteGround**: $2.99/mes
- **HostGator**: $2.75/mes

Simplemente sube los archivos vía FTP.

### Opción 3: Dominio Personalizado

1. Compra un dominio en [Namecheap](https://namecheap.com) o similar
2. Apunta los DNS a tu hosting
3. Sube los archivos
4. Actualiza `sitemap.xml` con tu dominio

## 🔒 Seguridad

- No hay backend, por lo que no hay vulnerabilidades de servidor
- Los datos se almacenan localmente en el navegador
- Los datos se envían a Google Sheets de forma segura
- No se recopilan datos sensibles

## 📞 Contacto

- **WhatsApp**: Rosa Quezada - 0982810040
- **Ubicación**: Bajos de la Iglesia de San Sebastián, Loja, Ecuador

## 📄 Licencia

Este proyecto es de uso libre. Personalízalo como necesites.

## 🆘 Troubleshooting

### La página no se carga

- Asegúrate de que `index.html`, `styles.css` y `script.js` estén en la misma carpeta
- Intenta abrir en otro navegador
- Limpia el caché (Ctrl+Shift+R)

### Los clics no se guardan

- Abre la consola (F12) y busca errores
- Verifica que localStorage esté habilitado
- Intenta en modo incógnito

### Google Sheets no recibe datos

- Verifica que el webhook esté configurado correctamente
- Abre la consola y ejecuta: `window.tamalesAdmin.syncToSheets();`
- Revisa que el Apps Script esté desplegado

### Los botones de WhatsApp no funcionan

- Verifica que tengas WhatsApp instalado o una cuenta web
- Comprueba que el número sea correcto
- Intenta desde otro dispositivo

## 📚 Recursos

- [Google Sheets Setup](./GOOGLE_SHEETS_SETUP.md)
- [Branding Guide](./BRANDING_GUIDE.md)
- [Google Fonts](https://fonts.google.com)
- [Color Picker](https://htmlcolorcodes.com)
- [Emoji Picker](https://emojipedia.org)

## 🎯 Próximos Pasos

1. ✅ Personaliza los colores y textos
2. ✅ Configura Google Sheets
3. ✅ Prueba todos los botones de WhatsApp
4. ✅ Sube a un hosting
5. ✅ Compra un dominio personalizado
6. ✅ Comparte en redes sociales

---

**¡Buena suerte con tu negocio de tamales! 🫔**

Hecho con ❤️ para los tamales tradicionales de Loja
