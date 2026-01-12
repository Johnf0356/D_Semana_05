const urlInput = document.getElementById("urlInput");
const btnAdd = document.getElementById("btnAdd");
const btnDelete = document.getElementById("btnDelete");
const gallery = document.querySelector("#gallery");

let selectedImage = null;

urlInput.addEventListener("input", function () {
  const text = urlInput.value.trim();
  btnAdd.disabled = (text === "");
});

btnAdd.addEventListener("click", function () {
  addImage();
});

btnDelete.addEventListener("click", function () {
  deleteSelected();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && document.activeElement === urlInput) {
    addImage();
  }

  if (e.key === "Delete" || e.key === "Backspace") {
    deleteSelected();
  }

  if (e.key === "Escape") {
    if (selectedImage !== null) {
      selectedImage.classList.remove("selected");
      selectedImage = null;
    }
  }
});

function addImage() {
  const url = urlInput.value.trim();
  if (url === "") return;

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen";

  img.addEventListener("click", function () {
    if (selectedImage !== null) {
      selectedImage.classList.remove("selected");
    }
    img.classList.add("selected");
    selectedImage = img;
  });

  gallery.appendChild(img);
  urlInput.value = "";
  btnAdd.disabled = true;
}

function deleteSelected() {
  if (selectedImage === null) return;
  selectedImage.remove();
  selectedImage = null;
}
