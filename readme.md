📦 Amigo Secreto App - README
<div align="center"> <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript" alt="JavaScript"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3"> <img src="https://img.shields.io/badge/license-MIT-blue" alt="License"> </div>

✨ Una aplicación web elegante y funcional para organizar tu juego de Amigo Secreto ✨
🌟 Características principales

    🎯 Interfaz intuitiva con diseño moderno y responsive

    👥 Gestión de participantes: añade y elimina amigos fácilmente

    🎲 Algoritmo inteligente de sorteo que garantiza:

        Nadie sale con sí mismo

        Emparejamientos 100% aleatorios

        Manejo de casos especiales

    🎁 Visualización clara de los resultados con animaciones

    📱 Compatible con móviles y tablets

🚀 Cómo usar

    Añade participantes:

        Escribe el nombre en el campo de texto

        Haz click en "Añadir" o presiona Enter

    Gestiona la lista:

        Elimina participantes con el botón ×

        Verifica que todos estén correctamente añadidos

    Realiza el sorteo:

        Haz click en "Sortear amigo"

        ¡Disfruta de la animación que revela los resultados!

    Comparte los resultados:

        Cada participante recibe el nombre de su amigo secreto

🛠️ Tecnologías utilizadas
Tecnología	Descripción
https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white	Estructura semántica del documento
https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white	Estilos modernos y animaciones
https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black	Lógica de la aplicación y algoritmo de sorteo
https://img.shields.io/badge/-Google_Fonts-4285F4?logo=googlefonts&logoColor=white	Tipografías Inter y Merriweather
📂 Estructura del proyecto
text

amigo-secreto/
├── index.html          # Archivo principal HTML
├── style.css           # Estilos principales
├── app.js              # Lógica de la aplicación
├── assets/             # Directorio de recursos
│   ├── amigo-secreto.png
│   ├── arrow_right.png
│   ├── close.png
│   └── play_circle_outline.png
└── README.md           # Este archivo

🌈 Diseño UI/UX

    Tipografía elegante: Combinación de Inter (sans-serif) y Merriweather (serif)

    Colores armoniosos: Paleta suave con azules como color principal

    Microinteracciones:

        Hover effects en botones

        Animación al revelar resultados

        Feedback visual al añadir/eliminar participantes

⚙️ Algoritmo de sorteo

El corazón de la aplicación utiliza un algoritmo de emparejamiento con reintentos que:

    Crea una copia de la lista de participantes

    Asigna aleatoriamente evitando auto-emparejamientos

    Si encuentra conflicto, reintenta automáticamente (hasta 100 veces)

    Garantiza resultados válidos o muestra mensaje de error claro

javascript

// Pseudocódigo del algoritmo
function sortearAmigos() {
  while (intentos < 100) {
    try {
      // Intentar emparejamiento
      if (emparejamientoValido) {
        return resultados;
      }
    } catch {
      intentos++;
    }
  }
  throw new Error("No se pudo completar el sorteo");
}

📱 Responsive Design

La aplicación se adapta perfectamente a:

    Pantallas grandes (desktop)

    Tablets

    Teléfonos móviles

css

@media (max-width: 600px) {
  .input-wrapper {
    flex-direction: column;
  }
}

🎨 Personalización

Fácilmente puedes personalizar:

    Colores: Modifica las variables CSS

    Fuentes: Cambia las importaciones de Google Fonts

    Iconos: Reemplaza los SVG en la carpeta assets

📜 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo LICENSE para más detalles.
<div align="center"> <h3>¿Te gustó el proyecto?</h3> <p>¡Dale una ⭐ y compártelo con tus amigos!</p> <p>🎄 Perfecto para navidades, cumpleaños o cualquier evento especial 🎉</p> </div>
