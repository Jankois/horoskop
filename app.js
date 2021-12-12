let znamenia = {
    vodnar:{
        order: 1,
        name: "AQUARIAS",
        image: "vodnar.png" ,
        start: "21.01.",
        end: "19.02.",
        popis:"V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
    },
    strelec:{
        //Todo:
        start: "23.11.",
        end: "21.12."
    },
    //Todo: Doplniť
}

/*
Funkcia ktorá sa spustí po kliknutí na tlačítko Potvrdenia dátumu
 */
function changeDateTime(event){
    //Toto zastaví defaultne správanie tlačítka (odoslanie formulára) - skús to zakomentovať a uvidíš ako to funguje
    event.preventDefault();

    console.log("Toto sa objavi v konzole")


    //Todo: Vyber dátum ktorý je aktuálne zadaný v inpute - https://www.w3schools.com/jsref/prop_text_value.asp


    //Todo: Vytvor si objekt Date a dostaň doň aktuálny dátum - https://www.w3schools.com/js/js_dates.asp


    //Todo: Porovnaj dátum s tými v premennej znamenia (pomož si premennou order)
    let objektZnamenia = getZnamenie();

    //Todo: Zmeň obrazok na aktualne znamenie

    //Todo: Zmeň Meno na aktualne znamenie

    //Todo: Zmeň popis znamenia


    //Todo: Bonus - skus spraviť nejaku animaciu (obrazok, text...)
}


/*
TATO FUNKCIA BY MALA SLUŽIŤ PRE VYBER AKTUALNEHO ZNAMENIA PODĽA ZADANEHO DATUMU
ABY SME ODDELILI LOGIKU //Todo:
 */
function getZnamenie(){
    let current;

    //Todo: skontroluj ktore znamenie vyhovuje datumu ( start a end) - nezabudni si upraviť aby datumi mali rovnaky format


    //Todo: Bonus -  prestupne roky poriešiť



    return current;

}

