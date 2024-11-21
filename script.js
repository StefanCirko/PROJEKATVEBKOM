function prikazOpisa(x){
    let opis;
    if(x == 1){
        opis = alert("T-34 je bio sovjetski sredni(medium) tenk. Često označavan kao najbolji i najuticajniji tenk Drugog svetskog rata, iako su kasniji tenkovi iz tog perioda imali bolji oklop i naoružanje.");
    }
    else if(x == 2){
        opis = alert ("M4 Šerman je bio Američki (srednji) tenk i takođe glavni Američki tenk tokom Drugog svetskog rata. Osnovno naoružanje ovog tenka je činio top M2 Kalibra 75mm zahvaljujući kojem se Šerman bez problema mogao nositisa oklopom Nemačkog Panzer IV tenka sa kojim ćemo se dotaći detaljnije ispod.");
    } 
    else if(x == 3){
        opis = alert ("Tigar 1 je Nemački teški tenk. Tigar je najpoznatiji tenk Drugog svetskog rata. Kada je prvi put kročio na bojište imao je skoro neprobojan oklop, snažan top i samo svojom veličinom je ulivao strah tenkovskim posadama Alijanse.");
    }
    else if (x == 4){
        opis = alert ("Panter je Nemački srednji tenk. Panter je nastao kao odgovor na Sovjetski tenk T-34 koji se pokazao kao veliki problem. Panter je zamenio Pancer 3 i 4 tenkova u službi. Bio je jeftiniji za proizvodnju od Tigra 1 i neki su ga smatrali najboljim tenkom do kraja rata.");
    }
    else if (x == 5){
        opis = alert("Krusejder (Crusader) je bio jedan od glavnih tenkova Ujedinjenog Kraljevstva tokom Drugog svetskog rata. Jedan je od najpopularnijih tenkova zbog svojih operacija u severnoj Africi. Proizvedeno je preko 5.300 Krusejdera.");
    }
    return opis;
}  
let tenkovi = ["Tigar 1", "Panter","Crusader","M4 Sherman","T-34","Cromwell","Churchil","Placeholder"];
tenkovi.pop();
tenkovi.sort();
const tabela = document.getElementById("tabela");

function tabelaTenkova(y){
    let poruka;
    if(y == 1){
        poruka = alert("Klikni na sliku kako bi dobio ispis tabele koja sadrzi tenkove");
    }
    else if (y == 2){
        let tabelat="<table border=1><tr><th>Tenkovi u WW2</th></tr>"
        for (let i=0;i<tenkovi.length;i++){
            tabelat+="<tr><td>" + tenkovi[i] + "</td></tr>";
        }
        tabelat+="</table>"
        return tabela.innerHTML=tabelat;
    }
}
function promenaStila(z){
    if (z == 1) {
        document.getElementById("paragraf").style.color = "green";
    }
    else if (z == 2){
        document.getElementById("paragraf").style.color = "lightgray";
    }
}
function forma(event){
    event.preventDefault();
    var ime = document.getElementById('ime').value;
    var email = document.getElementById('e-mail').value;
    var textbox = document.getElementById('textbox').value;
    let ispisForme = [];
    if(ime !== "" && email !== "" && textbox !== ""){
        if(ime.length < 5 || ime.length > 20){
            alert("Ime mora imati više od 5, a manje od 20 karaktera!");
            return;
        }
        if(email.includes("@") === false){
            alert("Niste uneli pravu email adresu!");
            return;
        }
        if(textbox.length > 300){
            alert("Vaša poruka mora sadržati manje od 300 karaktera!");
            return;
        }
        else {
            let imecut = ime.trim();
            let emailcut = email.trim();
            let porukacut = textbox.trim();
            ispisForme.push(imecut, emailcut, porukacut);
            alert("Ime: " + imecut + "\nEmail: " + emailcut + "\nPoruka: " + porukacut);
        }
    }
    else {
        alert("Ostavili ste prazna polja!");
        return;
    }
}
function prikazVremena() {
    var datum = new Date();
    var sati = datum.getHours();
    var minuti = datum.getMinutes();
    var sekunde = datum.getSeconds();
    var datum2 = sati + ':' + minuti + ':' + sekunde;
    document.getElementById("vremeTekst").innerHTML = datum2;
}






