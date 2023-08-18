// Seleciona o elemento com o ID "dark-mode-toggle"
const darkModeToggle = document.getElementById("dark-mode-toggle");
// Seleciona o elemento <body> da página
const body = document.body;

// Função para aplicar o modo claro/escuro
const applyMode = (darkMode) => {
    if (darkMode) {
        body.classList.add("dark-mode");
        darkModeToggle.classList.add("dark");
        darkModeToggle.textContent = "🌚"; // Altera o texto para "Modo Claro"
    } else {
        body.classList.remove("dark-mode");
        darkModeToggle.classList.remove("dark");
        darkModeToggle.textContent = "🌞"; // Altera o texto de volta para "Modo Escuro"
    }
};

// Verifica se a preferência já está salva no localStorage
const savedDarkMode = localStorage.getItem("darkMode");

// Aplica o modo de acordo com a preferência salva
applyMode(savedDarkMode === "true");

// Adiciona um ouvinte de evento ao botão de alternar
darkModeToggle.addEventListener("click", () => {
    // Toggles (alterna) a classe "dark-mode" no elemento <body>
    body.classList.toggle("dark-mode");
    // Toggles (alterna) a classe "dark" no elemento darkModeToggle (botão)
    darkModeToggle.classList.toggle("dark");

    // Verifica se a classe "dark-mode" está presente no <body>
    if (body.classList.contains("dark-mode")) {
        // Salva a preferência no localStorage como "true"
        localStorage.setItem("darkMode", "true");
        darkModeToggle.textContent = "🌚"; // Altera o texto para "Modo Claro"
    } else {
        // Remove a preferência do localStorage
        localStorage.removeItem("darkMode");
        darkModeToggle.textContent = "🌞"; // Altera o texto de volta para "Modo Escuro"
    }
});