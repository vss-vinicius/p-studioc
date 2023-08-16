const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const contatoImg = document.getElementById("contato-img");

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    darkModeToggle.classList.toggle("dark");

    // Verifica se está no modo escuro ou claro e altera a imagem
    if (body.classList.contains("dark-mode")) {
        contatoImg.src = "images/StudioC_WhatsAppQR_fbranco.png"; // Substitua pelo nome da sua imagem com fundo branco
        darkModeToggle.textContent = "🌚"; // Altera o texto para "Modo Claro"
    } else {
        contatoImg.src = "images/StudioC_WhatsAppQR.png"; // Substitua pelo nome da sua imagem original com fundo transparente
        darkModeToggle.textContent = "🌞"; // Altera o texto de volta para "Modo Escuro"
    }
});
