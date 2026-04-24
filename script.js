
const nombre = document.getElementById("nombre");
const rol = document.getElementById("rol");
const ingresar = document.getElementById("btn-ingresar");

ingresar.addEventListener("click", function() {

    if (nombre.value.trim() === "" || rol.value.trim() === "") {
        alert("Agregue ambos datos");
        return;
    }

    if (nombre.value.length < 3 ) {
        alert("Nombre debe mantener mas de 3 letras");
        return;
    }


    if (rol.value === "admin") { 
        alert("Acceso total ilimitado");
        return;

    } else if (rol.value === "editor") {
        alert("Acceso limitado a editor");
        return;

    } else if ( rol.value === "visitante") {
        alert("Acceso solo lectura");
        return;

    } else {
        alert("Agregue un rol valido");
        return;
    }


})