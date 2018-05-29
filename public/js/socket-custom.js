var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'Pedro',
    mensaje: 'Hola Mundo'
}, function(msg) {
    console.log('From server:', msg);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});