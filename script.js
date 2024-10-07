// Función para cambiar la imagen de perfil al hacer clic
function cambiarImagen() {
    var img = document.getElementById("profile-image");
    if (img.src.includes("pfp.png")) {
        img.src = "dibujo.jpg";
    } else {
        img.src = "pfp.png";
    }
}