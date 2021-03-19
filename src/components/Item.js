import React, {useState, useCallback, useEffect, useMemo} from 'react'
import getMeal from '../utils/api/meal'

export default function Item(props) {
    const [isFull, setFull] = useState(false)
    const [meal, setMeal] = useState('')
    const [ind, setInd] = useState(0)
    
    const showCard = useCallback(()=>{
        setFull(prevState => !prevState)
    },[])

    const fetchMeal= async(letter)=>{
        try {
            const response = await getMeal(letter)
            const {data: {meals =[]} } = response || {}
            const data = meals || []
            setMeal(data)
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchMeal('b')
    },[])

    const arr =  useMemo(()=> {
        const arr = []
        if(meal[ind]){
                for(let i = 1; i <=20; i++){
                const key = `strIngredient${i}`
                if(meal[ind][key] !== "" && meal[ind][key] !== null){
                    arr.push(meal[ind][key])
                }
            }
        }else{
            return arr
        }   
        return arr
    })

    const getCard = useCallback((id)=>()=>{
        setInd(id)
        showCard()
    },[])
    
    return (
        <div>
            <ul>{meal ? meal.map((item,index)=> <li onClick={getCard(index)}>{item.strMeal}</li>) : 'loading...'}</ul>
            {
                isFull &&
                <>
                <h1 onClick={showCard}>title: {meal[ind].strMeal}</h1>
                <p>meal-type: {meal[ind].strCategory}</p>
                <p>ingredients: <ul>{arr.map((item,index)=><li key={index}>{item}</li>) } </ul> </p>
                <p>steps: {meal[ind].strInstructions}<ul></ul> </p>
                </> 
            }
        </div>
    )
}