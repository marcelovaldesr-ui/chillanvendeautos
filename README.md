# Chillán Vende Autos 🇨🇱 🚙

Compraventa y concesionaria líder de autos clásicos, muscle cars y camionetas de colección en Chillán, Región de Ñuble, Chile.

Sitio web oficial adaptado y localizado al 100% en español con la nueva identidad visual de **Chillán Vende Autos**, conservando los efectos visuales, estética "motor city / muscle car" de alto impacto, interactividad y optimizaciones para escritorio y móviles.

---

## 🚀 Características Principales

1. **Identidad de Marca Oficial:**
   - Logotipo oficial integrado en barra de navegación y pie de página: camioneta clásica roja Chevrolet C10 con cordillera y tipografía emblemática.
   - Favicon oficial y badges de garantía.
   - Colores corporativos: Negro carbón (`#0d0d0d` / `#000000`), Rojo carrera (`#ce1f26`), Acentos en dorado y verde WhatsApp.

2. **Catálogo & Showroom en Vivo (`/inventory`):**
   - Catálogo interactivo de vehículos con filtrado por categoría (*Camionetas Clásicas*, *Chevrolet*, *Ford*, *Mopar / Dodge*).
   - Buscador dinámico en tiempo real.
   - Fichas técnicas completas: Motor, Transmisión, Potencia, Kilometraje, Precio en Pesos Chilenos ($ CLP) y USD de referencia.
   - Botón directo de cotización vía WhatsApp para cada auto.

3. **Páginas Especializadas Dedicadas:**
   - **Inicio (`/`)**: Portada con video en bucle de alta definición, vitrina destacada, comunidad de redes sociales y testimonios.
   - **Inventario (`/inventory`)**: Catálogo completo con filtros y modal de ficha técnica.
   - **Vende Tu Auto (`/sell-us-your-car`)**: Formulario para tasación, consignación y compra directa.
   - **Financiamiento (`/financing`)**: Simulador interactivo de crédito automotriz en pesos chilenos con cálculo automático de cuota mensual.
   - **Quiénes Somos (`/about-us`)**: Historia institucional, taller técnico y despachos de Arica a Punta Arenas.
   - **Contacto (`/contact`)**: Dirección en Chillán, teléfono directo, WhatsApp y formulario de mensaje.

4. **Conversión y Atención Inmediata:**
   - Botón flotante de WhatsApp (+56 9 9474 9513) presente en todas las páginas.
   - Modales interactivos de contacto y mensaje rápido.

---

## 💻 Ejecución en Localhost

El sitio web ya está alojado y corriendo en tu máquina local:

```bash
# Servidor HTTP local en puerto 3000
http://localhost:3000
```

Para iniciarlo manualmente en cualquier momento:

```powershell
# En PowerShell o terminal:
python -m http.server 3000
# o con Node.js:
npx serve .
```

---

## 🌐 Despliegue en GitHub & Vercel

### 1. Subir a GitHub
Ya está inicializado el repositorio Git local con todos los archivos listos:

```bash
# 1. Crea un nuevo repositorio en https://github.com/new llamado "chillan-vende-autos"
# 2. Conecta el repositorio remoto:
git remote add origin https://github.com/marcelovaldesr-ui/chillan-vende-autos.git

# 3. Sube el código:
git branch -M main
git push -u origin main
```

### 2. Despliegue en Vercel
Gracias al archivo `vercel.json` incluido:
1. Conecta tu cuenta en [vercel.com](https://vercel.com).
2. Importa el repositorio `chillan-vende-autos`.
3. Haz clic en **Deploy** (no requiere configuración de build ni comandos extras).
4. ¡Listo! Tu sitio estará disponible en `https://chillan-vende-autos.vercel.app` o con tu dominio chileno personalizado `.cl`.

---

© 2026 Chillán Vende Autos. Chillán, Región de Ñuble, Chile. Todos los derechos reservados.
