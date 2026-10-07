# Colas Petshop — versión 1

Propuesta web estática, adaptable a móvil, lista para subir a un repositorio de GitHub y desplegar en Vercel. Abre `index.html` en un navegador o sirve esta carpeta con un servidor local.

## Estructura

```text
versión 1/
├── index.html
├── styles.css
├── script.js
├── README.md
├── brief-marca.md
└── assets/
    ├── logo-colas-petshop.png
    ├── hero-perro-gato-ai.png
    ├── alimento-perro-ai.png
    ├── juego-gato-ai.png
    └── cuidado-perro-ai.png
```

No usa dependencias de JavaScript ni requiere compilación. Las fuentes se cargan desde Google Fonts; si no hay conexión, se usan tipografías de sistema.

## Subir a GitHub y Vercel

1. Crea un repositorio de GitHub y sube **el contenido** de `versión 1` a la raíz del repositorio. `index.html` debe quedar en esa raíz.
2. Importa ese repositorio en Vercel.
3. Selecciona **Framework Preset: Other** y deja el comando de compilación vacío. Vercel puede servir esta carpeta directamente porque contiene `index.html` en la raíz.
4. Publica y revisa la URL generada, en especial el mapa y los enlaces externos.

La [documentación oficial de Vercel](https://vercel.com/docs/builds) indica que los sitios HTML/CSS/JS estáticos no necesitan un paso de compilación.

## Funcionalidad

- Navegación adaptable a móvil.
- Animaciones de entrada al desplazarse, con respeto a `prefers-reduced-motion`.
- Botones de consulta por categoría que abren WhatsApp con un mensaje prellenado.
- Consejo sobre juego felino basado en un estudio, con enlace a la fuente y consulta directa por juguetes.
- Mapa embebido y enlace alternativo a Google Maps.
- Metadatos SEO y datos estructurados del comercio.

## Fotografías y datos

El logo es el archivo entregado por el usuario. Las cuatro fotografías editoriales fueron generadas con IA para esta propuesta; no representan el local, su equipo, clientes ni inventario real. Las imágenes públicas de las redes eran principalmente piezas gráficas, capturas o fotografías de producto con calidad insuficiente para esta composición, por lo que no se integraron como fotos de portada. Detalles y fuentes en `brief-marca.md`.

La dirección actual **Nueva 2672, Villa Exótica, Calama** y el teléfono **+56 9 9080 3038** aparecen en la biografía de Instagram y en el aviso de traslado compartido por el usuario. Facebook aún muestra la dirección anterior en la sección de detalles. Los productos, precios y existencias concretos deben confirmarse antes de convertir esta propuesta en una tienda con pago en línea. Los botones actuales conducen a consulta por WhatsApp.

El mapa utiliza la inserción de la ficha de **COLA’s PetShop** en Google Maps, ubicada en Nueva 2672. Se incluyó una reseña pública atribuida. Los horarios publicados en la web siguen WhatsApp, como indicó el usuario. El tramo matinal del sábado aparece como “4:00–13:00” en la captura y se deja como consulta hasta aclararlo.
