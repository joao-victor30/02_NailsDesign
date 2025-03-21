document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const buttons = document.querySelectorAll("button");

    // Esconde todas as seções inicialmente
    sections.forEach((section) => {
        section.style.display = "none";
    });

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            // Esconde todas as seções
            sections.forEach((section) => {
                section.style.display = "none";
            });

            // Mostra apenas a seção correspondente ao botão clicado
            const targetSection = document.querySelector(`#${button.id.replace("-btn", "")}`);
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });

    // Exibe a home por padrão ao carregar a página
    document.querySelector("#home").style.display = "block";
});
