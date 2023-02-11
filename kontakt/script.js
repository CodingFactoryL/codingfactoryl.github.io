function emailProgrammOeffnen(){
    let betreff = document.getElementById("betreffFeld").value;
    let nachricht = document.getElementById("nachrichtenFeld").value;
    window.open(`mailto:codingfactoryl0@gmail.com?subject=${betreff}&body=${nachricht}`);
}