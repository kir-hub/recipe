import React, {useState, useCallback, useEffect} from 'react'
import getMeal from './api'
import response from './api'

export default function Item(props) {
    const [isFull, setFull] = useState(false)
    const [meal, setMeal] = useState('')
    
    const showCard = useCallback(()=>setFull(prevState => !prevState))
    const fetchMeal= async()=>{
        const response = await getMeal()
        const data = response.data.meals[0]
        setMeal(data)
    }
    
    useEffect(()=>{
        fetchMeal()
    },[])

    const ingredient = ()=>{
        const arr = []
        for(let i = 1; i <=20; i++){
            const key = `strIngredient${i}`
            if(meal[key] !== "" && meal[key] !== null){
                arr.push(meal[key])
            }
        }
        return arr
    }
    const arr = ingredient()
    
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
