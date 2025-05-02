class Persona {
    constructor(nombre, apellido, edad, genero, clase) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
        this.clase = clase;
    }

    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }

    getEdad() {
        return this.edad;
    }

    getGenero() {
        return this.genero;
    }

    getClase() {
        return this.clase;
    }

    setNombre(nombre) { this.nombre = nombre; }
    setApellido(apellido) { this.apellido = apellido; }
    setEdad(edad) { this.edad = edad; }
    setGenero(genero) { this.genero = genero; }
    setClase(clase) { this.clase = clase; }

    esMayorDeEdad() {
        return this.edad >= 18;
    }
}

class Estudiante extends Persona {
    constructor(nombre, apellido, edad, genero, clase, email, telefono) {
        super(nombre, apellido, edad, genero, clase);
        this.email = email;
        this.telefono = telefono;
    }

    inscribirse(clase) {
        this.clase = clase;
    }

    desinscribirse() {
        this.clase = null;
    }

    getContacto() {
        return `Email: ${this.email}, Teléfono: ${this.telefono}`;
    }
}

class Profesor extends Persona {
    constructor(nombre, apellido, edad, genero, clase) {
        super(nombre, apellido, edad, genero, clase);
    }

    presentarse() {
        return `${this.getNombreCompleto()} enseña${this.clase}`;
    }
}

const estudiantes = [];
const profesores = [];

const form = document.getElementById("form");
const listaEstudiantes = document.getElementById("lista-estudiantes");
const listaProfesores = document.getElementById("lista-profesores");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const tipo = document.getElementById("tipo").value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = parseInt(document.getElementById("edad").value);
  const genero = document.getElementById("genero").value;
  const clase = document.getElementById("clase").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;

  if (tipo === "estudiante") {
    const nuevo = new Estudiante(nombre, apellido, edad, genero, clase, email, telefono);
    estudiantes.push(nuevo);
    mostrarEstudiantes();
  } else if (tipo === "profesor") {
    const nuevo = new Profesor(nombre, apellido, edad, genero, clase);
    profesores.push(nuevo);
    mostrarProfesores();
  }

  form.reset();
});

function mostrarEstudiantes() {
  listaEstudiantes.innerHTML = "";
  estudiantes.forEach((e, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${e.getNombreCompleto()} - ${e.getClase()}<br>${e.getContacto()} 
    <button onclick="eliminarEstudiante(${index})" class="btn-eliminar">Eliminar</button>`;
    listaEstudiantes.appendChild(li);
  });
}

function mostrarProfesores() {
  listaProfesores.innerHTML = "";
  profesores.forEach((p, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${p.presentarse()} 
    <button onclick="eliminarProfesor(${index})" class="btn-eliminar">Eliminar</button>`;
    listaProfesores.appendChild(li);
  });
}

function eliminarEstudiante(index) {
  estudiantes.splice(index, 1);
  mostrarEstudiantes();
}

function eliminarProfesor(index) {
  profesores.splice(index, 1);
  mostrarProfesores();
}

function filtrarPorNivel(nivel) {
  const tarjetas = document.querySelectorAll('.tarjeta');
  tarjetas.forEach(t => {
    const fondo = t.querySelector('.fondo-nivel');
    if (nivel === 'todos' || fondo.classList.contains(nivel)) {
      t.style.display = 'block';
    } else {
      t.style.display = 'none';
    }
  });
}