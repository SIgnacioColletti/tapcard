# TapCard Rosario - Landing Page

Landing page premium para TapCard, tarjetas NFC personalizadas de lujo para networking profesional.

## Descripción

Sitio web moderno y elegante desarrollado para promocionar TapCard, tarjetas de presentación digitales con tecnología NFC. Diseño premium en negro y dorado que refleja la calidad del producto.

## Características

- **Diseño Premium**: Paleta de colores negro y dorado con gradientes elegantes
- **Responsive**: Adaptado perfectamente a móviles, tablets y desktop
- **Banner Promocional**: Sistema de ofertas con cierre animado
- **Secciones Completas**:
  - Hero con estadísticas y CTA
  - Beneficios del producto
  - Cómo funciona (paso a paso)
  - Casos de uso
  - FAQ interactivo
  - Contacto multi-canal
- **Animaciones Sutiles**: Efectos fade-in y transiciones suaves
- **Botón Flotante WhatsApp**: Acceso directo a contacto
- **SEO Optimizado**: Meta tags y Open Graph para redes sociales

## Tecnologías Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla)
- SVG para gráficos vectoriales
- Font Awesome / Emojis para iconografía

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/signaciocolletti/tapcard.git
```

2. Abre el proyecto:
```bash
cd tapcard
```

3. Abre `index.html` en tu navegador o usa un servidor local:
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server
```

## Estructura del Proyecto

```
tapcard/
│
├── index.html          # Página principal
├── styles.css          # Estilos globales
├── script.js           # Funcionalidad JavaScript
├── favicon.png         # Icono del sitio
└── README.md          # Este archivo
```

## Secciones

### 1. Banner Promocional
Banner sticky con oferta destacada (20% OFF) y botón de cierre funcional.

### 2. Header / Navegación
- Logo TapCard
- Menú de navegación
- Botón CTA "Solicitar Info"

### 3. Hero Section
- Título principal
- Estadísticas destacadas
- Tarjeta 3D animada (SVG)
- Botones de acción

### 4. Beneficios
Grid de 6 beneficios clave con iconos y descripciones.

### 5. Cómo Funciona
Proceso de 3 pasos explicado visualmente.

### 6. Casos de Uso
4 perfiles de usuario objetivo (Ejecutivos, Creativos, Empresas, Emprendedores).

### 7. FAQ
Acordeón interactivo con preguntas frecuentes.

### 8. Contacto
- WhatsApp
- Email
- Instagram

### 9. Footer
Links de navegación, legal e información de contacto.

## Personalización

### Colores
Las variables principales están en `styles.css`:
- Dorado: `#d4af37` / `#f4d03f`
- Negro: `#0a0a0a` / `#1a1a1a`

### Contenido
Modifica el texto directamente en `index.html`.

### Banner Promocional
Activa/desactiva o modifica el banner en las líneas 39-48 de `index.html`.

## JavaScript

### Funciones Principales

**closeBanner()**: Cierra el banner promocional con animación
```javascript
function closeBanner() {
    const banner = document.getElementById('promoBanner');
    banner.classList.add('hidden');
}
```

## Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px
- **Mobile**: 480px
- **Mobile Small**: 360px

## Optimización SEO

- Meta description optimizada
- Open Graph tags para redes sociales
- Twitter Cards
- URLs canónicas
- Estructura semántica HTML5

## Deploy

El sitio está desplegado en GitHub Pages:
```
https://signaciocolletti.github.io/tapcard/
```

Para deployar cambios:
1. Commit y push a la rama `main`
2. GitHub Pages actualiza automáticamente

## Contacto

- **Email**: info@tapcard.com.ar
- **Instagram**: [@tapcard.ar](https://instagram.com/tapcardrosario)
- **WhatsApp**: +54 9 341 324-5783

## Licencia

© 2024 TapCard Premium. Todos los derechos reservados.

---

**Desarrollado por**: Signacio Colletti  
**Ubicación**: Rosario, Santa Fe, Argentina
