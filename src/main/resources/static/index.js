
const form = document.getElementById("form");
const antall = document.getElementById("antall");
const fornavn = document.getElementById("Fornavn");
const etternavn = document.getElementById("Etternavn");
const epost = document.getElementById("Epost");
const telefonnr = document.getElementById("Telefonnr");

form.addEventListener("kjøp billett",e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
}

const validateInputs = () => {
    const antallValue = antall.value.trim();
    const fornavnValue = fornavn.value.trim();
    const etternavn = etternavn.value.trim();
    const telefonnrValue = telefonnr.value.trim();
    const epostValue = epost.value.trim();

    if(antallValue ===" ") {
        setError(antall, "antall må velges");
    }  else {
        setSuccess(antall);
    }

    if(fornavnValue ==="") {
        setError(fornavn, "fornavn må fylles inn");
    } else {
        SetSuccess(fornavn);
    }
    if(etternavnValue ==="") {
        setError(etternavn, "etternavn må fylles inn");
    }  else {
        setSuccess(etternavn);
    }
    if(telefonnrValue ==="") {
        setError(telefonnr, "telefonnr må fylles inn");
    } else {
        setSuccess(telefonnr);
    }
    if(epostValue ==="") {
        setError(epost, "epost må være gyldig");
    } else {
        setSuccess(epost);
    }










}