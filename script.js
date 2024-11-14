// Función para cambiar la imagen de perfil al hacer clic
function cambiarImagen() {
    var img = document.getElementById("profile-image");
    if (img.src.includes("pfp.png")) {
        img.src = "dibujo.jpg";
    } else {
        img.src = "pfp.png";
    }
}

function showDetails(title, description, imageUrl) {
    document.getElementById('detailsTitle').textContent = title;
    document.getElementById('detailsDescription').textContent = description;
    document.getElementById('detailsImage').src = imageUrl;
    document.getElementById('detailsOverlay').style.display = 'flex';
}

function closeDetails() {
    document.getElementById('detailsOverlay').style.display = 'none';
}
