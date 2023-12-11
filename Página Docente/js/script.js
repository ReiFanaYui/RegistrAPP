function saveUsername(event) {
    // Evitar que el formulario se envíe de forma predeterminada
    event.preventDefault();

    var username = document.getElementById('usuario').value;

    // Configurar una cookie con una duración de 1 día
    document.cookie = "username=" + username + "; expires=" + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString();

    // Redirigir a la página de bienvenida
    window.location.href = 'bienvenida.html';
}

document.addEventListener("DOMContentLoaded", function() {
    // Recuperar el nombre de usuario almacenado en la cookie
    var username = getCookie('username');

    // Verificar si el nombre de usuario existe
    if (username) {
        // Mostrar el mensaje de bienvenida con el nombre de usuario
        document.getElementById('welcomeMessage').textContent = "Bienvenido, " + username;
    } else {
        // Redirigir a la página de inicio si no hay nombre de usuario
        window.location.href = 'index.html';
    }
});

function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

// Función para obtener y mostrar la fecha y hora actual
function mostrarFechaYHora() {
    // Obtener la fecha y hora actual
    var fechaHora = new Date();

    // Formatear la fecha y hora
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    var fechaHoraString = fechaHora.toLocaleDateString('es-ES', options);

    // Actualizar el contenido del elemento .current-time
    document.querySelector('.current-time').textContent = fechaHoraString;
}

// Llamar a mostrarFechaYHora cada segundo para actualizar la fecha y hora
setInterval(mostrarFechaYHora, 1000);

// Obtén la lista de estudiantes
var studentList = document.getElementById('student-list');
// Obtiene todas las filas de estudiantes
var studentRows = studentList.getElementsByClassName('list-group-item');

// Itera sobre las filas con un retraso de 0.5 segundos entre cada una
for (var i = 0; i < studentRows.length; i++) {
    (function (index) {
        setTimeout(function () {
            studentRows[index].style.display = 'flex'; // Ajusta la propiedad display a 'flex' para mostrar la fila
        }, 1000 * index);
    })(i);
}



function pasarAsistencia() {
    window.location.href = 'asistencia.html';
}

function revisarAsistidos() {
    window.location.href = 'asistidos.html';
}

function registrarAsistencia() {
    window.location.href = 'bienvenida.html';
}
