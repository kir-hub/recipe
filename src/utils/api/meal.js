import axios from 'axios'

const BASE_URL = 'https://www.themealdb.com/api/json/';
const VERSION = 'v1/';
const SEARCH = '/1/search.php?s=';

const getMeal = () => axios.get(`${BASE_URL}${VERSION}${SEARCH}Arrabiata`)

export default getMeal