 const datosIniciales = {
    nombre: "Juan Pérez",
    edad: 25,
    fechaNacimiento: "1999-03-15"
};

function mostrarMensajeInicial() {
    const mensaje = `¡Bienvenido ${datosIniciales.nombre}!, Edad: ${datosIniciales.edad}, Fecha de Nacimiento: ${datosIniciales.fechaNacimiento}`;
    document.getElementById('welcomeMessage').textContent = mensaje;
}

function calcularDiasVividos(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    const diferencia = hoy - nacimiento;
    return Math.floor(diferencia / (1000 * 60 * 60 * 24));
}

document.getElementById('formUsuario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    
    const mensajeBienvenida = `¡Bienvenido ${nombre}! Edad: ${edad}, Fecha de Nacimiento: ${fechaNacimiento}`;
    document.getElementById('bienvenida').textContent = mensajeBienvenida;
    
    const diasVividos = calcularDiasVividos(fechaNacimiento);
    const mensajeDias = `Has vivido aproximadamente ${diasVividos} días desde tu nacimiento.`;
    document.getElementById('diasVividos').textContent = mensajeDias;
});

window.onload = mostrarMensajeInicial;