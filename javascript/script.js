const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

if (darkModeToggle) {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const updateToggleAppearance = (darkMode) => {
        darkModeToggle.classList.toggle("dark", darkMode);
        darkModeToggle.textContent = darkMode ? "🌚" : "🌞";
        darkModeToggle.setAttribute("aria-pressed", String(darkMode));
        darkModeToggle.setAttribute(
            "aria-label",
            darkMode ? "Alternar para o modo claro" : "Alternar para o modo escuro"
        );
        darkModeToggle.setAttribute(
            "title",
            darkMode ? "Alternar para o modo claro" : "Alternar para o modo escuro"
        );
    };

    const applyMode = (darkMode) => {
        body.classList.toggle("dark-mode", darkMode);
        updateToggleAppearance(darkMode);
    };

    const storedPreference = localStorage.getItem("darkMode");
    const initialDarkMode =
        storedPreference !== null ? storedPreference === "true" : prefersDarkScheme.matches;

    applyMode(initialDarkMode);

    const persistPreference = (darkMode) => {
        if (darkMode === prefersDarkScheme.matches) {
            localStorage.removeItem("darkMode");
        } else {
            localStorage.setItem("darkMode", String(darkMode));
        }
    };

    const toggleMode = () => {
        const newDarkMode = !body.classList.contains("dark-mode");
        applyMode(newDarkMode);
        persistPreference(newDarkMode);
    };

    darkModeToggle.addEventListener("click", toggleMode);

    const handlePrefersChange = (event) => {
        if (localStorage.getItem("darkMode") === null) {
            applyMode(event.matches);
        }
    };

    if (typeof prefersDarkScheme.addEventListener === "function") {
        prefersDarkScheme.addEventListener("change", handlePrefersChange);
    } else if (typeof prefersDarkScheme.addListener === "function") {
        prefersDarkScheme.addListener(handlePrefersChange);
    }

    window.addEventListener("keydown", (event) => {
        if (
            event.key.toLowerCase() === "d" &&
            !event.altKey &&
            !event.ctrlKey &&
            !event.metaKey &&
            !event.isComposing
        ) {
            const tagName = event.target.tagName;
            if (!["INPUT", "TEXTAREA", "SELECT"].includes(tagName)) {
                toggleMode();
            }
        }
    });
}
