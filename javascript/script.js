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

// Adicionar EventListener para alternar entre os modos
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    darkModeToggle.classList.toggle("dark");

    const isDarkMode = body.classList.contains("dark-mode");

    // Armazenar o modo no localStorage como booleano
    if (isDarkMode) {
        localStorage.setItem("darkMode", "true");
    } else {
        localStorage.removeItem("darkMode");
    }

    // Atualizar o texto do botão de acordo com o modo atual
    darkModeToggle.textContent = isDarkMode ? "🌚" : "🌞";
});

// Adicionar EventListener para alternar entre os modos usando uma tecla de atalho (por exemplo, "d")
window.addEventListener("keydown", (event) => {
    if (event.key === "d") {
        body.classList.toggle("dark-mode");
        darkModeToggle.classList.toggle("dark");

        const isDarkMode = body.classList.contains("dark-mode");

        // Armazenar o modo no localStorage como booleano
        if (isDarkMode) {
            localStorage.setItem("darkMode", "true");
        } else {
            localStorage.removeItem("darkMode");
        }

        // Atualizar o texto do botão de acordo com o modo atual
        darkModeToggle.textContent = isDarkMode ? "🌚" : "🌞";
    }
});