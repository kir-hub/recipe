import React, {useState, useCallback, useEffect, useMemo} from 'react'
import getMeal from '../utils/api/meal'

export default function Item(props) {
    const [isFull, setFull] = useState(false)
    const [meal, setMeal] = useState('')
    
    const showCard = useCallback(()=>setFull(prevState => !prevState),[])
    const fetchMeal= async()=>{
        try {
            const response = await getMeal()
            const {data: {meals =[]} = {}} = response || {}
            const data = meals[0] || {}
            setMeal(data)
        } catch (e) {
            console.error(e);
        }
    }
    
    useEffect(()=>{
        fetchMeal()
    },[])

    const arr = useMemo(()=> {
         const arr = []
        for(let i = 1; i <=20; i++){
            const key = `strIngredient${i}`
            if(meal[key] !== "" && meal[key] !== null){
                arr.push(meal[key])
            }
        }
        return arr
    })
    
    return (
        <div>
            {
                isFull ?
                <>
                <h1 onClick={showCard}>title: {meal.strMeal}</h1>
                <p>meal-type: {meal.strCategory}</p>
                <p>ingredients: <ul>{arr.map((item,index)=><li key={index}>{item}</li>)} </ul> </p>
                <p>steps: {meal.strInstructions}<ul></ul> </p>
                </> : 
                <h1 onClick={showCard}>title: {meal.strMeal}</h1>
            }
        </div>
    )
}
