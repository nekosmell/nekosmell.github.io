let currentPage = 1;
const totalPages = 5; // 今回は5枚として
const filePrefix = "bonmane_01_";

function updateImage() {
  const img = document.getElementById("comic-image");
  img.src = `${filePrefix}${String(currentPage).padStart(2, '2')}.jpg`;
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updateImage();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updateImage();
  }
}

window.onload = updateImage;
