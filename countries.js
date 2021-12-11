// Write a function in Javascript that:
// - returns the number of countries in the world
// - finds the country with the most official languages, where they officially speak German (de). 
// - that counts all the official languages spoken in the listed countries.
// - to find the country with the highest number of official languages.
// - to find the most common official language(s), of all countries.
const countries = [{
    country: "US", languages: ["en"]
}, {
    country: "BE", languages: ["nl", "fr", "de"]
}, {
    country: "NL", languages: ["nl", "fy"]
}, {
    country: "DE", languages: ["de"]
}, {
    country: "ES", languages: ["es"]
}];

function computeCountries(countries) {
    const totalCountries = countries.length;
    const mostGermanSpeakers = countries
        .filter(el => el.languages.includes('de'))
        .sort((prev, next) => next.languages.length - prev.languages.length);
    const countOfficialLanguages = countries.map(element => {
        return { [element.country]: `Speaks ${element.languages.length} languages officially.` }
    });
    const mostOfficialLanguages = countries
        .sort((prev, next) => next.languages.length - prev.languages.length);
    const mostCommonReduced = countries.reduce((acc, curr) => {
        curr.languages.forEach(el => {
            if (acc[el]) {
                acc[el].push(el);
            } else {
                acc[el] = [el];
            }
        });
        return acc;
    }, {});

    let arrMostCommon = [];
    let majorSize = 0;
    for (let lng in mostCommonReduced) {
        const size = mostCommonReduced[lng].length;
        if (size > majorSize) {
            majorSize = size;
            arrMostCommon = [lng];
        } else if (size === majorSize) {
            arrMostCommon.push(lng);
        }
    }

    return {
        totalCountries: `Total of countries is: ${totalCountries}`,
        mostGermanSpeakers: `The most languages including 'de' is: ${mostGermanSpeakers[0].country}`,
        countOfficialLanguages,
        mostOfficialLanguages: `The country that speaks the most languages is: ${mostOfficialLanguages[0].country}`,
        allMostCommonLanguages: `All the most common official languages are: ${arrMostCommon}`
    }
}

const result = computeCountries(countries);
console.log(result);