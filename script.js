const urlInput = document.getElementById("urlInput");
const btnAdd = document.getElementById("btnAdd");
const btnDelete = document.getElementById("btnDelete");
const gallery = document.getElementById("gallery");

let selectedImage = null;

// 1) Agregar imagen
btnAdd.addEventListener("click", function () {
  const url = urlInput.value;

  if (url === "") {
    alert("Escribe una URL primero");
    return;
  }

  // Crear la imagen
  const img = document.createElement("img");
  img.src = url;

  // 2) Seleccionar imagen al hacer click
  img.addEventListener("click", function () {

    // quitar selección de la anterior
    if (selectedImage !== null) {
      selectedImage.classList.remove("selected");
    }

    // seleccionar esta
    img.classList.add("selected");
    selectedImage = img;
  });

  // Agregar al contenedor
  gallery.appendChild(img);

  // limpiar input
  urlInput.value = "";
});

// 3) Eliminar imagen seleccionada
btnDelete.addEventListener("click", function () {
  if (selectedImage === null) {
    alert("No has seleccionado ninguna imagen");
    return;
  }

  selectedImage.remove();
  selectedImage = null;
});

// Extra: tecla Delete para eliminar
document.addEventListener("keydown", function (e) {
  if (e.key === "Delete") {
    if (selectedImage !== null) {
      selectedImage.remove();
      selectedImage = null;
    }
  }
});
