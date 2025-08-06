📦 Amigo Secreto App - README
<div align="center"> <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript" alt="JavaScript"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3"> </div>

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

📂 Estructura del proyecto

```text

amigo-secreto-alura/
├── index.html          # Archivo principal HTML
├── style.css           # Estilos principales
├── app.js              # Lógica de la aplicación
├── assets/             # Directorio de recursos
│   ├── amigo-secreto.png
│   ├── arrow_right.png
│   ├── close.png
│   └── play_circle_outline.png
└── README.md           # Este archivo
```

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

```javascript

javascript


function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    if (amigos.length < 2) {
        resultado.innerHTML = '<li class="result-item">Necesitas al menos 2 amigos para sortear</li>';
        return;
    }
    
    let emparejamientos = [];
    let disponibles = [...amigos];
    
    // Intentar hacer el sorteo (puede fallar y necesitar reintentos)
    let intentos = 0;
    const MAX_INTENTOS = 100;
    
    while (intentos < MAX_INTENTOS) {
        try {
            disponibles = [...amigos];
            emparejamientos = [];
            
            for (let i = 0; i < amigos.length; i++) {
                const persona = amigos[i];
                // Filtrar para que no sea el mismo y no repita emparejamientos
                let opciones = disponibles.filter(a => a !== persona);
                
                // Si no hay opciones válidas, lanzar error para reintentar
                if (opciones.length === 0) {
                    throw new Error("Necesita reintento");
                }
                
                // Seleccionar aleatoriamente
                const indiceAleatorio = Math.floor(Math.random() * opciones.length);
                const amigoSecreto = opciones[indiceAleatorio];
                
                emparejamientos.push({
                    persona: persona,
                    secreto: amigoSecreto
                });
                
                // Eliminar el amigo secreto de disponibles
                disponibles = disponibles.filter(a => a !== amigoSecreto);
            }
            
            // Si llegamos aquí, el sorteo fue exitoso
            break;
        } catch (e) {
            intentos++;
            if (intentos >= MAX_INTENTOS) {
                resultado.innerHTML = '<li class="result-item">No se pudo realizar el sorteo. Intenta nuevamente.</li>';
                return;
            }
        }
    }
    
    // Mostrar resultados
    let html = '';
    emparejamientos.forEach(par => {
        html += `
            <li class="result-item">
                <span class="persona">${par.persona}</span>
                <span class="amigo-secreto"> > </span>
                <span class="amigo-secreto">${par.secreto}</span>
            </li>
        `;
    });
    
    resultado.innerHTML = html;
    
    revelarResultados();
}
}
```

📱 Responsive Design

La aplicación se adapta perfectamente a:

    Pantallas grandes (desktop)

    Tablets

    Teléfonos móviles

```css
css

@media (max-width: 600px) {
  .input-wrapper {
    flex-direction: column;
  }
}
```

🎨 Personalización

Fácilmente puedes personalizar:

    Colores: Modifica las variables CSS

    Fuentes: Cambia las importaciones de Google Fonts

    Iconos: Reemplaza los SVG en la carpeta assets


<div align="center"> <h3>¿Te gustó el proyecto?</h3> <p>¡Dale una ⭐ y compártelo con tus amigos!</p> <p>🎄 Perfecto para navidades, cumpleaños o cualquier evento especial 🎉</p> </div>
