function registrarUsuario(event) {
    event.preventDefault(); // ⛔ Evita que se recargue la página

    const nombre= document.getElementById('nombre').value;
    const curp = document.getElementById('curp').value;
    const rfc = document.getElementById('rfc').value;
    const domicilio = document.getElementById('domicilio').value;
    const telefono = document.getElementById('telefono').value;
    const password = document.getElementById('password').value;
    
    // Puedes guardar los datos, por ejemplo en localStorage
    const usuario = { nombre, curp, rfc, domicilio, telefono, password };
    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert('Usuario registrado correctamente');
    window.location.href = "index.html"; // Opcional: volver al cajero después de registrar

    
}