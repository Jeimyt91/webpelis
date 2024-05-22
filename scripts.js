// Supongamos que tenemos un array de Peliculas
const books = [
  // Aquí definimos objetos que representan Peliculas, cada objeto tiene propiedades como id, título, autor, etc.
  // Cada objeto representa una pelicula diferente en la cartelera.
  {
    id: 1,
    title: "El Planeta de los Simios: Nuevo Reino",
    author: "Pierre Boulle",
    genre: "Ciencia Ficción",
    year: 2024,
    synopsis: "El director Wes Ball le da nueva vida a la épica franquicia global situada varias generaciones en el futuro tras el reinado de César, en el que los simios son la especie dominante que vive en armonía y los humanos han quedado reducidos a vivir en las sombras. Mientras un nuevo y tiránico líder simio construye su imperio, un joven simio emprende un viaje desgarrador que le llevará a cuestionarse todo lo que sabe sobre el pasado y a tomar decisiones que definirán el futuro de simios y humanos por igual.",
    rating: 4.5,
    image: "./img/ElPlanetaDeLosSimios2.jpg"
  },
  {
    id: 2,
    title: "Furiosa: de la Saga de Mad Max",
    author: "George Miller, Byron Kennedy",
    genre: "Ciencia Ficción",
    year: 2014,
    synopsis: "Al caer el mundo, la joven Furiosa (Anya Taylor-Joy) es arrebatada del Lugar Verde de Muchas Madres y cae en manos de una gran Horda de Motoristas liderada por el Señor de la Guerra Dementus. Arrasando el Páramo, se topan con la Ciudadela presidida por El Inmortan Joe. Mientras los dos Tiranos luchan por el dominio, Furiosa debe sobrevivir a muchas pruebas mientras reúne los medios para encontrar el camino de vuelta a casa.Precuela de Mad Max: Furia en la carretera (2015)",
    rating: 4.8,
    image: "./img/FuriosaSagaMadMax.png"
  },
  {
    id: 3,
    title: "It: Tu tambien Flotaras",
    author: "King, Stephen",
    genre: "Terror",
    year: 2017,
    synopsis: "La película cuenta la historia de siete niños en Derry, Maine, que son aterrorizados por un ser epónimo, y deberán hacer frente a sus propios demonios personales para lograr enfrentarse a él",
    rating: 4.7,
    image: "./img/ItTuTambienFlotaras.png"
  },
  {
    id: 4,
    title: "Super Mario Bros",
    author: "Matthew Fogel",
    genre: "Infantil",
    year: 2023,
    synopsis: "Dos hermanos plomeros, Mario y Luigi, caen por las alcantarillas y llegan a un mundo subterráneo mágico en el que deben enfrentarse al malvado Bowser para rescatar a la princesa Peach, quien ha sido forzada a aceptar casarse con él.",
    rating: 4.6,
    image: "./img/superMarioBros.png"
  },
  {
    id: 5,
    title: "Rio Uno",
    author: "Don Rhymer",
    genre: "Infantil",
    year: 2011,
    synopsis: "Cuenta la historia de Blu, un guacamayo  macho domesticado que es llevado a Río de Janeiro para aparearse con una hembra de espíritu libre, la guacamaya  Perla. Los dos eventualmente se enamoran, y juntos tienen que escapar de ser contrabandeados por Nigel, una cacatúa.",
    rating: 4.9,
    image: "./img/rioUno.png"
  },
  {
    id: 6,
    title: "El Conjuro",
    author: "James Wan Chad Hayes Carey W. Hayes",
    genre: "Terror",
    year: 2013,
    synopsis: "Después de mudarse a una granja en Rhode Island, una familia experimenta fenómenos sobrenaturales y busca la ayuda de una famosa pareja de investigadores ",
    rating: 4.8,
    image: "./img/ElConjuro.png"
  }
];

// Función para mostrar los Peliculas en la página
function displayBooks(booksToShow) {
  // Obtener el elemento de la lista de Peliculas del DOM
  const bookList = document.getElementById("bookList");
  // Limpiar el contenido previo de la lista
  bookList.innerHTML = "";

  // Verificar si no hay Peliculas para mostrar
  if (booksToShow.length === 0) {
    // Si no hay Peliculas, mostrar un mensaje en la lista
    bookList.innerHTML = "<p>No se encontraron resultados.</p>";
  } else {
    // Iterar sobre cada libro para crear un elemento de tarjeta y agregarlo a la lista
    booksToShow.forEach(book => {
      const bookCard = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${book.image}" class="card-img-top" alt="${book.title}">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
              <p class="card-text">${book.synopsis}</p>
              <p class="card-text">Año: ${book.year}</p>
              <p class="card-text">Género: ${book.genre}</p>
              <p class="card-text">Puntuación: ${book.rating}</p>
              <button class="btn btn-warning details-btn" data-toggle="modal" data-target="#bookModal">Detalles</button>
            </div>
          </div>
        </div>
      `;
      // Agregar la tarjeta del libro al contenido de la lista
      bookList.innerHTML += bookCard;
    });
  }

// Agregar event listeners a los botones de detalles
const detailsButtons = document.querySelectorAll(".details-btn");
detailsButtons.forEach((button, index) => {
  // Para cada botón, agregar un event listener que muestra un modal con los detalles del libro correspondiente
  button.addEventListener("click", () => {
    const selectedBook = books[index];
    const modalBody = `
      <img src="${selectedBook.image}" class="img-fluid mb-3" alt="${selectedBook.title}">
      <p><strong>Título:</strong> ${selectedBook.title}</p>
      <p><strong>Autor:</strong> ${selectedBook.author}</p>
      <p><strong>Género:</strong> ${selectedBook.genre}</p>
      <p><strong>Año:</strong> ${selectedBook.year}</p>
      <p><strong>Puntuación:</strong> ${selectedBook.rating}</p>
      <p><strong>Sinopsis:</strong> ${selectedBook.synopsis}</p>
    `;
    // Obtener el cuerpo del modal y mostrar los detalles del libro seleccionado
    const modalBodyElement = document.getElementById("bookModalBody");
    modalBodyElement.innerHTML = modalBody;
    // Mostrar el modal
    const bookModal = new bootstrap.Modal(document.getElementById('bookModal'));
    bookModal.show();
  });
});
    
}

// Función para buscar Peliculas
function searchBooks(query) {
  // Limpiar y convertir el término de búsqueda en minúsculas para facilitar la comparación
  const searchTerm = query.trim().toLowerCase();
  
  // Filtrar los Peliculas que coincidan con el término de búsqueda
  const filteredBooks = books.filter(book => {
    return (
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm) ||
      String(book.year).includes(searchTerm)
    );
  });
  
  // Mostrar los Peliculas filtrados
  displayBooks(filteredBooks);
}

// Función para inicializar la página
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar todos los Peliculas al cargar la página
  displayBooks(books);
});

// Agregar un event listener al campo de búsqueda
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  // Llamar a la función de búsqueda cada vez que se ingresa texto en el campo de búsqueda
  searchBooks(searchInput.value);
});
