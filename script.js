const countries = [
    {
        name: "France",
        flag: "🇫🇷",
        capital: "Paris",
        currency: "Euro",
        population: "68 millions",
        description: "La France est un pays d'Europe occidentale connu pour son histoire, sa culture, sa gastronomie et son influence mondiale.",
        news: [
            "La politique française reste au centre de l'actualité.",
            "L'économie et la transition énergétique sont des sujets importants.",
            "La culture française continue d'avoir une forte influence internationale."
        ]
    },

    {
        name: "Népal",
        flag: "🇳🇵",
        capital: "Katmandou",
        currency: "Roupie népalaise",
        population: "30 millions",
        description: "Le Népal est un pays himalayen connu pour ses montagnes, ses traditions et l'Everest.",
        news: [
            "Le tourisme de montagne reste un moteur économique majeur.",
            "Le pays développe ses infrastructures hydroélectriques.",
            "La protection des zones naturelles est un enjeu important."
        ]
    },

    {
        name: "Namibie",
        flag: "🇳🇦",
        capital: "Windhoek",
        currency: "Dollar namibien",
        population: "2,5 millions",
        description: "La Namibie est un pays d'Afrique australe connu pour ses déserts, sa faune sauvage et ses grands espaces.",
        news: [
            "La conservation de la faune reste une priorité nationale.",
            "Le secteur minier joue un rôle majeur dans l'économie.",
            "Le tourisme naturel continue de progresser."
        ]
    }
];


let currentIndex = 0;


function showCountry(country) {

    document.getElementById("flag").innerHTML = country.flag;

    document.getElementById("countryName").innerHTML = country.name;

    document.getElementById("capital").innerHTML = country.capital;

    document.getElementById("currency").innerHTML = country.currency;

    document.getElementById("population").innerHTML = country.population;

    document.getElementById("description").innerHTML = country.description;


    let newsHTML = "";

    country.news.forEach(item => {

        newsHTML += `
        <article>
            <b>📰 Actualité</b>
            <p>${item}</p>
        </article>
        `;

    });


    document.getElementById("news").innerHTML = newsHTML;
}



function newCountry() {

    currentIndex++;

    if(currentIndex >= countries.length){
        currentIndex = 0;
    }


    showCountry(countries[currentIndex]);

}



showCountry(countries[currentIndex]);