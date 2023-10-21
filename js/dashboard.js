function loadContent() {
    fetch('https://e-dumas-sukasari.github.io/web-proposal')  // Ganti dengan URL atau lokasi file halaman yang ingin dimuat
        .then(response => response.text())
        .then(data => {
            document.getElementById('imported-content').innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Memanggil fungsi untuk memuat isi
loadContent();
