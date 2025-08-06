// Array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    if (nombre) {
        if (amigos.includes(nombre)) {
            alert('Este nombre ya está en la lista');
            return;
        }
        
        amigos.push(nombre);
        input.value = ''; // Limpiar el input
        mostrarAmigos(); // Mostrar la lista actualizada
    } else {
        alert('Por favor ingresa un nombre válido');
    }
}

// Función para mostrar todos los amigos en la lista
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    
    if (amigos.length === 0) {
        lista.innerHTML = '';
        return;
    }
    
    let html = '';
    amigos.forEach(amigo => {
        html += `
            <li class="name-item">
                <span>${amigo}</span>
                <button class="button-remove" onclick="eliminarAmigo('${amigo}')">
                    <span class="icon">🗑️</span>
                </button>
            </li>
        `;
    });
    
    lista.innerHTML = html;
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(nombre) {
    amigos = amigos.filter(amigo => amigo !== nombre);
    mostrarAmigos();
}

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

// Función para animar la revelación de resultados
function revelarResultados() {
    const items = document.querySelectorAll('.result-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 300);
    });
}

// Mostrar lista vacía al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarAmigos();
    
    // Opcional: permitir agregar con Enter
    document.getElementById('amigo').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarAmigo();
        }
    });
});