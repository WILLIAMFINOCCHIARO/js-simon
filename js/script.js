// Carissimi ragazzi,
// eccoci all'ultimo esercizio di JavaScript
// Esercizio di oggi: Simon Says nome repo: js-simon
// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.



CreateClasses();




function CreateClasses () {
  
// Creo le classi attraverso un ciclo
for(let i= 0; i < 5; i++) {
// Seleziono i box in cui inserire le classi
  const ContainerBox = document.getElementById('container');
  const Internbox = document.createElement("div");
  Internbox.classList.add("intern-box");
  ContainerBox.appendChild(Internbox);

  const ClassNumber = document.createElement("div");
  ClassNumber.classList.add("number");
   Internbox.appendChild(ClassNumber);

  
//  Inserisco i numeri
let Random = Math.floor(Math.random()*99) + 1;
ClassNumber.innerHTML = (Random);


function TimeUtente () {
  ClassNumber.innerHTML = "";

};



}

setTimeout(TimeUtente,3000) ;

};





const UtenteNumeri = parseInt(prompt("Inserisci  cinque numeri che hai visto precedentemente"));




// Richiesta all'utente dei numeri


// // verifica(UtenteNumeri);


// // Verificare il prompt
// function verifica(member) {

// if (isNaN(member))
// {
// alert ("Non hai inserito un numero");

// return false;

// }} ;