# Guía de Personalización de Branding

Esta guía te permite cambiar fácilmente los colores, tipografía y otros elementos visuales de la landing page sin tocar el código HTML.

## Cambiar Colores

Todos los colores están definidos como **variables CSS** en el archivo `styles.css`. Para cambiarlos:

1. Abre `styles.css`
2. Busca la sección `:root { ... }` al inicio del archivo
3. Modifica los valores de color:

```css
:root {
    /* Paleta de Colores */
    --color-primary: #F4C430;           /* Amarillo mostaza - Cambiar aquí */
    --color-secondary: #FFFFFF;         /* Blanco */
    --color-tertiary: #FFF8E7;          /* Beige claro - Cambiar aquí */
    --color-accent: #D97706;            /* Naranja/marrón - Cambiar aquí */
    --color-text: #2D3748;              /* Gris oscuro - Cambiar aquí */
    --color-text-light: #718096;        /* Gris claro */
    --color-border: #E2E8F0;            /* Gris muy claro */
}
```

### Ejemplos de cambios rápidos:

**Cambiar a tonos más oscuros:**
```css
--color-primary: #D4A017;      /* Oro más oscuro */
--color-accent: #8B4513;       /* Marrón más oscuro */
--color-tertiary: #F5DEB3;     /* Trigo */
```

**Cambiar a tonos más claros:**
```css
--color-primary: #FFD700;      /* Oro brillante */
--color-accent: #FF8C00;       /* Naranja oscuro */
--color-tertiary: #FFFACD;     /* Limón claro */
```

---

## Cambiar Tipografía

### Cambiar la fuente principal

1. En `styles.css`, busca:
```css
--font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

2. Reemplaza `'Inter'` con otra fuente de Google Fonts:
```css
--font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

3. En `index.html`, actualiza el link de Google Fonts:
```html
<!-- Cambiar esta línea -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Cambiar tamaños de fuente

En `styles.css`, modifica los valores en `:root`:
```css
--font-size-base: 16px;    /* Tamaño base */
--font-size-lg: 18px;      /* Grande */
--font-size-xl: 24px;      /* Extra grande */
--font-size-2xl: 32px;     /* 2x grande */
--font-size-3xl: 48px;     /* 3x grande */
--font-size-4xl: 64px;     /* 4x grande */
```

### Cambiar pesos de fuente

```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

---

## Cambiar Espaciado

Todos los espacios (padding, margin, gap) usan variables CSS:

```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
--spacing-3xl: 64px;
```

Para hacer la página más "aireada", aumenta estos valores:
```css
--spacing-lg: 32px;    /* Era 24px */
--spacing-xl: 40px;    /* Era 32px */
--spacing-2xl: 56px;   /* Era 48px */
```

---

## Cambiar Bordes y Esquinas

### Radius (esquinas redondeadas)

```css
--radius-sm: 8px;      /* Pequeño */
--radius-md: 16px;     /* Mediano */
--radius-lg: 24px;     /* Grande */
--radius-full: 9999px; /* Completamente redondeado */
```

Para hacer las esquinas más redondeadas:
```css
--radius-md: 20px;     /* Más redondo */
--radius-lg: 32px;     /* Mucho más redondo */
```

### Sombras

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

Para sombras más suaves:
```css
--shadow-md: 0 2px 4px -1px rgba(0, 0, 0, 0.05);
--shadow-lg: 0 5px 10px -3px rgba(0, 0, 0, 0.05);
```

---

## Cambiar Transiciones y Animaciones

### Velocidad de transiciones

```css
--transition-fast: 150ms ease-in-out;
--transition-base: 300ms ease-in-out;
--transition-slow: 500ms ease-in-out;
```

Para animaciones más rápidas:
```css
--transition-fast: 100ms ease-in-out;
--transition-base: 200ms ease-in-out;
```

---

## Cambiar Número de WhatsApp

1. Abre `script.js`
2. Busca la sección `CONFIG`:
```javascript
const CONFIG = {
    WHATSAPP_NUMBER: '0982810040',  // Cambia este número
    WHATSAPP_COUNTRY_CODE: '593',   // Código de país (Ecuador)
    // ...
};
```

3. Reemplaza `0982810040` con el nuevo número

---

## Cambiar Mensajes de WhatsApp

1. Abre `script.js`
2. Busca la función `generateWhatsAppURL()`:
```javascript
function generateWhatsAppURL(tamalType = 'general') {
    const baseMessage = 'Hola, vengo de la página de tamales de San Sebastián en Loja y quiero hacer un pedido';
    // Cambia este mensaje
    // ...
}
```

---

## Cambiar Contenido de Texto

Todos los textos están en `index.html`. Simplemente:

1. Abre `index.html`
2. Busca el texto que quieres cambiar
3. Reemplázalo

Ejemplos:
- **Título principal**: `<h1>Tamales tradicionales en San Sebastián, Loja</h1>`
- **Descripción del hero**: `<p class="hero-subtitle">Preparo tamales...</p>`
- **Nombres de productos**: `<h3>Tamal de Chancho</h3>`

---

## Cambiar Emojis

Los emojis están distribuidos en `index.html`:
- Hero: `🫔`
- Productos: `🫔`
- Momentos: `☀️`, `🌥️`, `🎉`
- Footer: `📍`, `📱`

Simplemente reemplázalos con otros emojis que prefieras.

---

## Cambiar Estructura de Secciones

Si quieres reordenar las secciones:

1. Abre `index.html`
2. Busca los `<section>` tags
3. Muévelos en el orden que prefieras

Las secciones son:
- `<!-- HERO SECTION -->`
- `<!-- PRODUCTOS SECTION -->`
- `<!-- MOMENTOS SECTION -->`
- `<!-- AUTORIDAD SECTION -->`
- `<!-- UBICACIÓN SECTION -->`
- `<!-- CONFIANZA SECTION -->`
- `<!-- CIERRE SECTION -->`

---

## Agregar Nuevas Secciones

Para agregar una nueva sección:

1. En `index.html`, agrega antes de `</body>`:
```html
<section class="mi-seccion" id="mi-seccion">
    <div class="container">
        <h2>Título de mi sección</h2>
        <p>Contenido aquí</p>
    </div>
</section>
```

2. En `styles.css`, agrega estilos:
```css
.mi-seccion {
    padding: var(--spacing-3xl) 0;
    background-color: var(--color-secondary);
}
```

---

## Cambiar Imágenes

Actualmente, la página usa emojis como placeholders. Para agregar imágenes reales:

1. Coloca tus imágenes en una carpeta `images/`
2. En `index.html`, reemplaza:
```html
<div class="image-placeholder">🫔</div>
```

Con:
```html
<img src="images/tamal.jpg" alt="Tamal tradicional de San Sebastián" class="hero-image">
```

3. En `styles.css`, agrega:
```css
.hero-image {
    width: 100%;
    max-width: 500px;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
}
```

---

## Cambiar Responsividad

Los breakpoints están en `styles.css`:

```css
@media (max-width: 768px) {
    /* Estilos para tablets y móviles */
}

@media (max-width: 480px) {
    /* Estilos para móviles pequeños */
}
```

Para cambiar los breakpoints:
```css
@media (max-width: 1024px) {
    /* Cambiar 768px a 1024px para tablets más grandes */
}
```

---

## Guardar Cambios

Después de hacer cambios:

1. Guarda los archivos (Ctrl+S o Cmd+S)
2. Recarga la página en el navegador (F5 o Cmd+R)
3. Limpia el caché si es necesario (Ctrl+Shift+R)

---

## Ejemplos de Temas Personalizados

### Tema Rojo y Oro (Elegante)
```css
--color-primary: #DC143C;      /* Rojo carmesí */
--color-accent: #FFD700;       /* Oro */
--color-tertiary: #FFF8DC;     /* Cornsilk */
```

### Tema Verde y Crema (Natural)
```css
--color-primary: #228B22;      /* Verde forestal */
--color-accent: #8B4513;       /* Marrón silla */
--color-tertiary: #FFFACD;     /* Limón claro */
```

### Tema Azul y Naranja (Moderno)
```css
--color-primary: #1E90FF;      /* Azul dodger */
--color-accent: #FF6347;       /* Rojo tomate */
--color-tertiary: #F0F8FF;     /* Azul Alice */
```

---

## Preguntas Frecuentes

**P: ¿Cómo hago que el texto sea más grande?**
R: Aumenta `--font-size-base` en `:root`

**P: ¿Cómo cambio el color de un botón específico?**
R: Modifica `.btn-primary` o `.btn-secondary` en `styles.css`

**P: ¿Cómo hago la página más rápida?**
R: Optimiza las imágenes y reduce el tamaño de los archivos CSS/JS

**P: ¿Cómo agrego un logo?**
R: Coloca una imagen en `images/logo.png` y agrégala en el header

---

¡Diviértete personalizando tu landing page! 🎨
