import axios from 'axios'

const BASE_URL = 'https://www.themealdb.com/api/json/';
const VERSION = 'v1/';
const SEARCH = '/1/search.php?s=';
const NEW_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f='

const getMeal = (firstLetter) => axios.get(`${NEW_URL}${firstLetter}`)

export default getMeal