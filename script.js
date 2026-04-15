const form = document.querySelector("#fakultet-form");
const input = document.querySelector("#tall-input");
const resultatSpan = document.querySelector(".resultat");

// Funksjonen som regner ut fakultet (f.eks. 5 * 4 * 3 * 2 * 1)
function beregnFakultet(n) {
    if (n < 0) return "Feil (må være 0+)";
    if (n === 0 || n === 1) return 1;
    let resultat = 1;
    for (let i = 2; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}

// Lytter etter klikk på knappen
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Hindrer siden i å laste på nytt
    const tall = parseInt(input.value);
    const svar = beregnFakultet(tall);
    resultatSpan.textContent = svar; // Viser svaret i HTML-en
});