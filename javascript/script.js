const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    darkModeToggle.classList.toggle("dark");

    if (body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "🌚"; // Altera o texto para "Modo Claro"
    } else {
        darkModeToggle.textContent = "🌞"; // Altera o texto de volta para "Modo Escuro"
    }
});
