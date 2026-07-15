let countries = [];
let currentIndex = 0;


async function loadCountries() {

    const response = await fetch("countries.json");

    countries = await response.json();

    showCountry(countries[currentIndex]);
}



function showCountry(country) {

    document.getElementById("flag").innerHTML = country.flag;

    document.getElementById("countryName").innerHTML = country.name;

    document.getElementById("capital").innerHTML = country.capital;

    document.getElementById("currency").innerHTML = country.currency;

    document.getElementById("population").innerHTML = country.population;

    document.getElementById("description").innerHTML = country.history;


    document.getElementById("news").innerHTML = `
        <article>
            <b>📰 Actualités bientôt disponibles</b>
            <p>
            Les informations du jour pour ${country.name}
            seront ajoutées dans la prochaine version.
            </p>
        </article>
    `;
}



function newCountry() {

    currentIndex++;

    if (currentIndex >= countries.length) {
        currentIndex = 0;
    }

    showCountry(countries[currentIndex]);

}



loadCountries();
