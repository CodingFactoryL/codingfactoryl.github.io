function emailProgrammOeffnen(){
    let geschlecht = document.getElementById("geschlechtFeld").value;
    let name = document.getElementById("namenFeld").value;
    let telefonnummer = document.getElementById("telefonNummernFeld").value;
    let betreff = document.getElementById("betreffFeld").value;
    let nachricht = document.getElementById("nachrichtenFeld").value;

    if(geschlecht === "Divers"){
        geschlecht = "";
    }

    nachricht += `\n\r\n\r\n\rvon ${geschlecht} ${name}`

    if(telefonnummer !== ""){
        nachricht += ` mit der Telefonnummer ${telefonnummer}`;
    }

    if(geschlecht !== "" &&  name !== "" && betreff !== "" && nachricht !== ""){
        window.open(`mailto:codingfactoryl0@gmail.com?subject=${betreff}&body=${nachricht}`);
    }
}

function telefonnummerGeaendert(){
    if(parseInt(document.getElementById("telefonNummernFeld").value, 10) < 0){
        document.getElementById("telefonNummernFeld").value = "";
    }
}