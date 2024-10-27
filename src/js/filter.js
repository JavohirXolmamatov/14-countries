
const searchFromEl = document.querySelector('.search')
const searchSelect = document.querySelector('.search__select-list')

searchFromEl.search.addEventListener('input', () => {
    const searchValue = searchFromEl.search.value.toLowerCase();
    const cardsItem = document.querySelectorAll('.cards__item')
    const cardsTitle = document.querySelectorAll('.cards__title')

    cardsTitle.forEach((title, i) => {
        
        if (title.textContent.toLowerCase().includes(searchValue)) {
            cardsItem[i].style.display = 'block'
            
        }else {
            cardsItem[i].style.display = 'none'
        }
    })
    
})

import {request} from './request'
import { createCountries } from './updateUI'


const searchSelectSpan = document.querySelector('.search__select span')

searchSelect.addEventListener('click', (event) => {
    searchSelectSpan.textContent = event.target.textContent

    let filterApi
    if (event.target.textContent == 'All') {
        filterApi = 'https://restcountries.com/v3.1/all'
    }else {
        filterApi = `https://restcountries.com/v3.1/region/${event.target.textContent}`
    }

    request(filterApi).then((data) => {
        // console.log(data);
        createCountries(data)
        
    }).catch((err) => {
        alert(err.message); 
    })
})







