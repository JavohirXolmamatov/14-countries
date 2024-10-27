
const ul = document.querySelector('.cards')

export const createCountries = (countries) => {
    ul.innerHTML = ''
    countries.forEach(element => {
        const commonName = element.name.common
        const population = element.population
        const region = element.region
        const capital = element.capital ? element.capital[0] : "No capital"
        const flag = element.flags.svg
        
        const li = document.createElement('li')
        li.classList.add('cards__item')

        li.innerHTML = `
            <a href="./about.html?countrie=name/${commonName}">
                <img src=${flag} alt="germany-flag" width="267" height="160">
                <div class="cards__item-inner">
                    <h3 class="cards__title">${commonName}</h3>
                    <p class="population">Population: <span>${population}</span></p>
                    <p class="region">Region: <span class = "span">${region}</span></p>
                    <p class="capital">Capital: <span>${capital}</span></p>
                </div>
            </a>
        `
        ul.appendChild(li)
                
    });
    
}

// const countryInfoEl = document.querySelector('.countriy-info')

// export const createCountrieInfo = (countrie) => {
//     console.log(countrie);
    
//     const {population, borders, capital, flags, name, region, tld, currencies, languages, subregion,} = countrie
    
//     // const nativeName = Object.values(name.nativeName)[0].official    
//     const currency = Object.values(currencies)[0].name
//     const language = Object.values(languages)

//     countryInfoEl.innerHTML = `

        
//         <img
//           class="country-info__img"
//           src=${flags.svg}
//           alt="${name.common} flag"
//           width="560"
//           height="400"
//         />
//         <div class="country-info__content">
//           <h2>${name.common}</h2>
//           <ul class="country-info__list">
//             <li class="country-info__item">
//               <p class="name">
//                 Native Name:
//                 <span>${nativeName}</span>
//               </p>
//               <p class="population">
//                 Population:
//                 <span>${population}</span>
//               </p>
//               <p class="region">
//                 Region:
//                 <span>${region}</span>
//               </p>
//               <p class="sub-region">
//                 Sub Region:
//                 <span>${subregion}</span>
//               </p>
//               <p class="capital">
//                 Capital:
//                 <span>${capital}</span>
//               </p>
//             </li>
//             <li class="country-info__item">
//               <p class="name">
//                 Top Level Domain:
//                 <span>${tld}</span>
//               </p>
//               <p class="population">
//                 Currencies:
//                 <span>${currency}</span>
//               </p>
//               <p class="region">
//                 Languages:
//                 <span>${language}</span>
//               </p>
//             </li>
//           </ul>

//           <div class="country-info__borders">
//             <h3>Border Countries:</h3>
//             ${borders ? borders.map((border) => {
//                 return `
//                     <a href = "./about.html?country=${border}">${border}</a>
//                 `
//             }) : "No borders"}
//           </div>
//         </div>
      

//     `
    
// }

const countryInfoEl = document.querySelector('.country-info'); // Klass nomini to'g'rilang

export const createCountrieInfo = (countrie) => {
    
    // countrie va name mavjudligini tekshirish
    if (!countrie) {
        countryInfoEl.innerHTML = '<p>Error: Country information is not available.</p>';
        console.log('countrie is null or undefined:', countrie);
        return;
    }

    const { population, borders, capital, flags, name, region, tld, currencies, languages, subregion } = countrie[0];

    // name mavjudligini tekshirish
    if (!name) {
        countryInfoEl.innerHTML = '<p>Error: Country name information is not available.</p>';
        console.log('name is null or undefined:', name);
        return;
    }

    // name.nativeName mavjudligini tekshirish
    const nativeName = name.nativeName && name.nativeName.eng && name.nativeName.eng.official ? name.nativeName.eng.official : 'No native name';

    // currencies mavjudligini tekshirish
    const currency = currencies && Object.values(currencies).length > 0 ? Object.values(currencies)[0]?.name : 'No currency';
    
    // languages mavjudligini tekshirish
    const language = languages && Object.values(languages).length > 0 ? Object.values(languages).join(', ') : 'No languages';
    
    // borders mavjudligini tekshirish va markup yaratish
    const bordersMarkup = borders && borders.length > 0 ? borders.map(border => `<a href="./about.html?countrie=alpha/${border}">${border}</a>`).join('') : 'No borders';

    countryInfoEl.innerHTML = `
        <img class="country-info__img" src="${flags.svg}" alt="${name.common} flag" width="560" height="400" />
        <div class="country-info__content">
          <h2>${name.common}</h2>
          <ul class="country-info__list">
            <li class="country-info__item">
              <p class="name">Native Name: <span>${nativeName}</span></p>
              <p class="population">Population: <span>${population}</span></p>
              <p class="region">Region: <span>${region}</span></p>
              <p class="sub-region">Sub Region: <span>${subregion || 'No subregion'}</span></p>
              <p class="capital">Capital: <span>${capital || 'No capital'}</span></p>
            </li>
            <li class="country-info__item">
              <p class="name">Top Level Domain: <span>${tld}</span></p>
              <p class="population">Currencies: <span>${currency}</span></p>
              <p class="region">Languages: <span>${language}</span></p>
            </li>
          </ul>
          <div class="country-info__borders">
            <h3>Border Countries:</h3>
            ${bordersMarkup}
          </div>
        </div>
    `;
};

