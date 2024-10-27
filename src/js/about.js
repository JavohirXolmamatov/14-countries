import '../css/main.css'
import '../js/mode'
import { request } from './request'

import { createCountrieInfo } from './updateUI'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const countrie = urlParams.get('countrie')
const countrieAPI = `https://restcountries.com/v3.1/${countrie}`

request(countrieAPI).then((data) => {
    createCountrieInfo(data)
}).catch((err) => {
    alert(err.message)
})
