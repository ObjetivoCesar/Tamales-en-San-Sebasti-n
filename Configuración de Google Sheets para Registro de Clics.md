# Configuración de Google Sheets para Registro de Clics

Esta guía te ayudará a configurar la sincronización automática de clics de WhatsApp a Google Sheets.

## Opción 1: Usando Google Apps Script (Recomendado)

### Paso 1: Crear una hoja de cálculo en Google Sheets

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo llamada "Tamales San Sebastián - Clics"
3. En la primera fila, crea estos encabezados:
   - A1: `ID`
   - B1: `Tipo de Tamal`
   - C1: `Fecha/Hora`
   - D1: `IP del Cliente`
   - E1: `Session ID`
   - F1: `Dispositivo`
   - G1: `URL de Referencia`
   - H1: `Timestamp`

### Paso 2: Crear un Google Apps Script

1. En la misma hoja, ve a **Extensiones > Apps Script**
2. Reemplaza el código por defecto con este:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Agrega una fila con los datos del clic
    sheet.appendRow([
      data.id,
      data.tamalType,
      data.formattedDateTime,
      data.clientIP,
      data.sessionId,
      data.deviceType,
      data.pageUrl,
      data.timestamp
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Clic registrado correctamente'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Guarda el proyecto con el nombre "Tamales Webhook"

### Paso 3: Desplegar como servicio web

1. En Apps Script, haz clic en **Desplegar > Nuevo despliegue**
2. Selecciona **Tipo: Aplicación web**
3. Configura:
   - **Ejecutar como**: Tu cuenta de Google
   - **Quién tiene acceso**: Cualquiera
4. Haz clic en **Desplegar**
5. Copia la **URL de despliegue** (se verá algo como: `https://script.google.com/macros/d/...`)

### Paso 4: Configurar el webhook en la página

1. Abre la consola del navegador (F12) en tu landing page
2. Ejecuta este comando con tu URL:

```javascript
window.tamalesAdmin.setGoogleSheetsWebhook('https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/usercontent');
```

Reemplaza `YOUR_DEPLOYMENT_ID` con el ID de tu despliegue.

¡Listo! Ahora cada clic en WhatsApp se registrará automáticamente en tu hoja de Google Sheets.

---

## Opción 2: Usando Google Forms (Más Simple)

Si prefieres una opción más simple sin código:

1. Crea un Google Form con estos campos:
   - Tipo de Tamal
   - Fecha/Hora
   - IP del Cliente
   - Dispositivo

2. Ve a **Respuestas > Seleccionar destino** y crea una nueva hoja de cálculo

3. Obtén la URL del formulario y modifica `script.js` para enviar datos al formulario

---

## Monitoreo de Clics

### Ver estadísticas en tiempo real

Abre la consola del navegador (F12) y ejecuta:

```javascript
window.tamalesAdmin.logStats();
```

### Exportar clics como CSV

```javascript
window.tamalesAdmin.exportCSV();
```

### Ver todos los clics guardados

```javascript
window.tamalesAdmin.getAllClicks();
```

### Sincronizar manualmente a Google Sheets

```javascript
window.tamalesAdmin.syncToSheets();
```

---

## Troubleshooting

### Los clics no se están guardando en Google Sheets

1. Verifica que el webhook esté configurado correctamente
2. Abre la consola del navegador (F12) y busca errores
3. Asegúrate de que el Apps Script esté desplegado correctamente

### ¿Cómo cambiar el número de WhatsApp?

En `script.js`, busca la sección `CONFIG` y cambia:
```javascript
WHATSAPP_NUMBER: '0982810040', // Cambia este número
```

### ¿Cómo personalizar los mensajes de WhatsApp?

En `script.js`, busca la función `generateWhatsAppURL()` y modifica el `baseMessage`.

---

## Seguridad

- Los clics se guardan localmente en el navegador (localStorage)
- Los datos se envían a Google Sheets de forma segura
- No se almacenan datos sensibles
- Puedes limpiar todos los datos con: `window.tamalesAdmin.clearAllClicks();`

---

## Soporte

Si tienes problemas, verifica:
1. La consola del navegador para errores (F12)
2. Que el webhook de Google Sheets esté configurado
3. Que los permisos de Google Sheets sean correctos
