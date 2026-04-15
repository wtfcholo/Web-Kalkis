// 1. Henter referanser til elementene i HTML-en
const form = document.querySelector("#fakultet-form");
const input = document.querySelector("#tall-input");
const resultatSpan = document.querySelector(".resultat");

/**
 * 2. Funksjon som regner ut fakultet (n!)
 * Eksempel: 5! = 5 * 4 * 3 * 2 * 1 = 120
 */
function beregnFakultet(n) {
    if (n < 0) return "Feil (må være 0 eller mer)";
    if (n === 0 || n === 1) return 1;
    
    let resultat = 1;
    for (let i = 2; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}

// 3. Lytter etter når brukeren trykker på "Regn ut"-knappen
form.addEventListener("submit", (event) => {
    // Hindrer at nettsiden laster på nytt (standard oppførsel for skjemaer)
    event.preventDefault(); 
    
    // Henter tallet fra input-feltet og gjør det om til et heltall
    const verdi = parseInt(input.value);
    
    // Regner ut fakultetet ved hjelp av funksjonen over
    const svar = beregnFakultet(verdi);
    
    // Oppdaterer teksten i HTML-en slik at brukeren ser svaret
    resultatSpan.textContent = svar;
});