import axios from 'axios'

const BASE_URL = 'https://www.themealdb.com/api/json/';
const VERSION = 'v1/';
const SEARCH = '/1/search.php?s=';

const getMeal = () => axios.get(`${BASE_URL}${VERSION}${SEARCH}Arrabiata`)

export default getMeal









































// const getMeal = ()=>{   
//     try{
//  axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
//   .then(function (response) {
//   console.log(response.data)
//   return response
//   })
//     .catch(function(error) {
//     console.log(error)
// })
//     } catch (e){
//         console.log(e);
//     }
// }
// export default getMeal

// export const getMeal = ()=>{
//     try {
//         const response = axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
//         console.log(response);
//         return response
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const getMeal = async()=>{
//     try{
//         const response = await axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
//         console.log("res",response);
//         return response;
//     }catch(e){
//         console.log(e);
//     }
// }
// getMeal()

// const getMeal = async()=>{
//     try{
//         await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
//         .then((response) =>{
//             console.log(response);
//         })
//     }catch (e) {
//         console.log(e);
//     }
// }
// getMeal()

// const response = axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
// console.log(response);

