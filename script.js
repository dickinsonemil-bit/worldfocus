let countries = [];
let currentCountry = null;


async function loadCountries() {

    const response = await fetch("countries.json");

    countries = await response.json();


    chooseDailyCountry();

}



function chooseDailyCountry() {

    const today = new Date();

    const dayNumber =
        today.getFullYear() * 10000 +
        (today.getMonth() + 1) * 100 +
        today.getDate();


    const index = dayNumber % countries.length;


    currentCountry = countries[index];


    showCountry(currentCountry);

}



function showCountry(country) {

    document.getElementById("flag").innerHTML = country.flag;

    document.getElementById("countryName").innerHTML = country.name;

    document.getElementById("capital").innerHTML = country.capital;

    document.getElementById("currency").innerHTML = country.currency;

    document.getElementById("population").innerHTML = country.population;

    document.getElementById("description").innerHTML = country.history;


    document.getElementById("day").innerHTML =
        "🌍 Pays du jour";


    document.getElementById("news").innerHTML = `
        <article>
            <b>📰 Actualités</b>
            <p>
            Les actualités de ${country.name}
            seront ajoutées dans la prochaine version.
            </p>
        </article>
    `;

}



function newCountry() {

    let randomIndex =
        Math.floor(Math.random() * countries.length);


    showCountry(countries[randomIndex]);

}



loadCountries();
