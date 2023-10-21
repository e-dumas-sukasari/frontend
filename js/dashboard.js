fetch("https://e-dumas-sukasari.github.io/web-proposal/")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("imported-content").innerHTML = data;
  })
  .catch((error) => console.error(error));