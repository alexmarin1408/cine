const form = document.getElementById("age-form");
const ageInput = document.getElementById("age");
const result = document.getElementById("recommendation");


const catalogo = [
    {
        min: 0,
        max: 12,
        categoria: "👦 Niños (0 - 12 años)",
        pelicula: {
            titulo: "Cuentos del Jardín Mágico",
            imagen: "img/niños.png",
            anio: 2026,
            imdb: "6.8/10",
            clasificacion: "Para todos los públicos",
            duracion: "71 min",
            descripcion:
                "Tres hermanos visitan a su abuelo después de la pérdida de su abuela. Para llenar el vacío que dejó la narradora de cuentos de la familia, comienzan a crear sus propias historias y descubren el poder de la imaginación para superar momentos difíciles."
        }
    },
    {
        min: 13,
        max: 17,
        categoria: "🧑 Jóvenes (13 - 17 años)",
        pelicula: {
            titulo: "Spider-Man: Un Nuevo Día",
            imagen: "img/jovenes.png",
            anio: 2026,
            imdb: "8.0/10",
            clasificacion: "Mayores de 12 años",
            duracion: "2 h 25 min",
            descripcion:
                "Peter Parker intenta continuar con su vida universitaria mientras trata de dejar atrás su identidad como Spider-Man. Sin embargo, una nueva amenaza pone en peligro a sus amigos y lo obliga a volver a ponerse el traje."
        }
    },
    {
        min: 18,
        max: 120,
        categoria: "👨 Adultos (18+)",
        pelicula: {
            titulo: "La Odisea",
            imagen: "img/adultos.png",
            anio: 2026,
            director: "Christopher Nolan",
            imdb: "8.4/10",
            clasificacion: "Adultos",
            duracion: "2 h 52 min",
            descripcion:
                "Después de la guerra de Troya, Odiseo emprende un peligroso viaje de regreso a Ítaca. Durante su recorrido se enfrenta a criaturas y personajes de la mitología griega, como el cíclope Polifemo, las sirenas y Calipso."
        }
    }
];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const edad = parseInt(ageInput.value, 10);

    if (isNaN(edad) || edad < 1 || edad > 120) {
        result.innerHTML = '<p class="error">Por favor ingresa una edad válida (entre 1 y 120).</p>';
        return;
    }

    const grupo = catalogo.find((g) => edad >= g.min && edad <= g.max);
    const p = grupo.pelicula;

    result.innerHTML = `
        <h2>${grupo.categoria}</h2>
        <article class="card-movie">
            <img class="poster" src="${p.imagen}" alt="Póster de ${p.titulo}"
                 onerror="this.style.display='none'">
            <h3>🎬 ${p.titulo}</h3>
            <ul class="meta">
                <li><strong>Año:</strong> ${p.anio}</li>
                ${p.director ? `<li><strong>Director:</strong> ${p.director}</li>` : ""}
                <li><strong>IMDb:</strong> ⭐ ${p.imdb}</li>
                <li><strong>Clasificación:</strong> ${p.clasificacion}</li>
                <li><strong>Duración:</strong> ${p.duracion}</li>
            </ul>
            <p class="sinopsis">${p.descripcion}</p>
        </article>
    `;
});

// Botón "Borrar búsqueda": limpia la edad y quita la recomendación
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
    form.reset();
    result.innerHTML = "";
    ageInput.focus();
});