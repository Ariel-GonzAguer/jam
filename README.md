
# JAM Stack Project

Este proyecto es una demostración moderna de JAM Stack utilizando Astro, React, Markdown, Tailwind CSS y la API de OpenAI.

## Tecnologías principales

- **Astro**: Framework para construir sitios web rápidos y eficientes, permitiendo el uso de componentes de diferentes frameworks.
- **React**: Biblioteca para construir interfaces de usuario interactivas y reutilizables.
- **Markdown**: Los artículos y contenidos se gestionan en formato Markdown, facilitando la edición y organización.
- **Tailwind CSS**: Framework de utilidades para estilos rápidos y personalizables.
- **OpenAI API**: Integración para generar resúmenes automáticos de los artículos usando IA.

## Estructura del proyecto

```
astro.config.mjs
package.json
tsconfig.json
src/
  content.config.ts
  api/
  components/
    ProyectCard.tsx
    Resumen.tsx
  content/
    articulos/
      react.md
      jam-stack.md
      tailwind.md
      astro.md
      vercel.md
      typescript.md
  layouts/
    Layout.astro
  pages/
    index.astro
    api/
      openAI_Service.js
  styles/
    global.css
```

## Funcionalidades

- Visualización de artículos en formato Markdown sobre tecnologías JAM Stack.
- Cada artículo puede ser resumido automáticamente usando la API de OpenAI.
- Interfaz moderna y responsiva gracias a Tailwind CSS.
- Componentes reutilizables en React y Astro.

## Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd jam
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura tu archivo `.env` con tu API Key de OpenAI:
   ```env
   OPENAI_API_KEY=tu_clave_aqui
   ```
4. Inicia el proyecto:
   ```bash
   npm run dev
   ```
5. Accede a `http://localhost:4321` para ver la aplicación.

## Notas de seguridad

- La API Key de OpenAI nunca se expone al frontend; todas las llamadas se gestionan desde el backend.

## Licencia

MIT

---

### Creado por Ariel GonzAgüer 🚀