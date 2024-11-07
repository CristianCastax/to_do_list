document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggle-theme");
  
  toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");

    // Cambia el texto y el estilo del botón según el tema
    if (document.body.classList.contains("light-mode")) {
      toggleThemeButton.textContent = "Modo Oscuro";
      toggleThemeButton.classList.add("btn-outline-dark");
      toggleThemeButton.classList.remove("btn-outline-light");
    } else {
      toggleThemeButton.textContent = "Modo Claro";
      toggleThemeButton.classList.add("btn-outline-light");
      toggleThemeButton.classList.remove("btn-outline-dark");
    }
  });
});
