let array = [];

function kjopBillett() {
    const filmer = {}
    let a = 0;

    if (document.getElementById('filmer').value === 'Velg film her') {
        document.getElementById('flfeilmelding').innerText = "velg en film"
        a++;

    } else {
        filmer.tattFilm = document.getElementById('filmer').value;

    }
    if (document.getElementById('antall').value === "") {
        document.getElementById('antallfeilmelding').innerText = "Må skrive noe inn i antall"
        a++;
    } else {

        let num = Number(document.getElementById('antall').value);
        if(isNaN(num)){
            document.getElementById('antallfeilmelding').innerText = "Må skrive antall"
            a++;
        }

        filmer.antall = document.getElementById('antall').value;

    }
    if (document.getElementById('fnavn').value === "") {
        document.getElementById('fofeilmelding').innerText = "Må skrive noe inn i fornavn"
        a++;
    } else {
        filmer.fnavn = document.getElementById('fnavn').value;

    }
    if (document.getElementById('enavn').value === "") {
        document.getElementById('efeilmelding').innerText = "Må skrive noe inn i etteernavn"
        a++;
    } else {
        filmer.enavn = document.getElementById('enavn').value;

    }
    if (document.getElementById('tel').value === "") {
        document.getElementById('tfeilmelding').innerText = "Må skrive noe inn i telefonnr"
        a++;
    } else {
        let num = Number(document.getElementById('tel').value);
        if(isNaN(num)){
            document.getElementById('tfeilmelding').innerText = "Må skrive antall"
            a++;
        }
        filmer.tel = (document.getElementById('tel').value);
    }
    if (document.getElementById('epost').value === "") {
        document.getElementById('epfeilmelding').innerText = "Må skrive noe inn i epost"
        a++;
    } else {
        filmer.epost = document.getElementById('epost').value;
    }

    if (a === 0 && document.getElementById('filmer').value !== 'Velg film her') {
        array.push(filmer)

        let ut = "<table id='table'><tr>" + "<th>Filmer</th><th>Antall</th><th>fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";

        for (let o of array) {
            ut += "<tr>";
            ut += "<td>" + o.tattFilm + "</td><td>" + o.antall + "</td><td>"
                + o.fnavn + "</td><td>" + o.enavn + "</td><td>"
                + o.tel + "</td><td>" + o.epost + "</td>";
            ut += "</tr>";
            ut += "<tr>";
        }
        ut += "</table>";
        document.getElementById('booket').innerHTML = ut;
        blankInput();
    }
}

function blankInput() {
    document.getElementById('filmer').value = 'Velg film her';
    document.getElementById('fnavn').value = "";
    document.getElementById('antall').value = "";
    document.getElementById('enavn').value = "";
    document.getElementById('tel').value = "";
    document.getElementById('epost').value = "";
    document.getElementById('flfeilmelding').innerText = "";
    document.getElementById('antallfeilmelding').innerText = "";
    document.getElementById('fofeilmelding').innerText = "";
    document.getElementById('efeilmelding').innerText = "";
    document.getElementById('tfeilmelding').innerText = "";
    document.getElementById('epfeilmelding').innerText = "";
    console.log(array);

}

function sletteAlle() {
    document.getElementById('booket').innerHTML = "";
    console.log(array)
}