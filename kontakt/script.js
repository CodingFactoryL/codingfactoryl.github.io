function emailProgrammOeffnen(){
    let betreff = "Nachricht an CodingFactoryL";
    let nachricht = "Hallo, das ist ein Test";
    window.open(`mailto:codingfactoryl0@gmail.com?subject=${betreff}&body=${nachricht}`);
}