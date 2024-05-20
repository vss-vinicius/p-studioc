const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Função para aplicar o modo escuro/claro
const applyMode = (darkMode) => {
    body.classList.toggle("dark-mode", darkMode);
    darkModeToggle.classList.toggle("dark", darkMode);
    darkModeToggle.textContent = darkMode ? "🌚" : "🌞";
};

// Recuperar o modo salvo do localStorage (booleano)
const savedDarkMode = localStorage.getItem("darkMode") === "true";
applyMode(savedDarkMode);

// Função para alternar entre os modos e atualizar o localStorage
const toggleMode = () => {
    const isDarkMode = body.classList.toggle("dark-mode");
    darkModeToggle.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
    darkModeToggle.textContent = isDarkMode ? "🌚" : "🌞";
};

// Adicionar EventListener para alternar entre os modos
darkModeToggle.addEventListener("click", toggleMode);

// Adicionar EventListener para alternar entre os modos usando uma tecla de atalho (por exemplo, "d")
window.addEventListener("keydown", (event) => {
    if (event.key === "d") {
        toggleMode();
    }
});