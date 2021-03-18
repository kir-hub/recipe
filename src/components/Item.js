import React, {useState, useCallback} from 'react'
import data from './data.json'

export default function Item(props) {
    const [isFull, setFull] = useState(false)
    const showCard = useCallback(()=>setFull(!isFull))
    const displayFull = ()=>{
        if(isFull){
            return (
                <>
                <h1 onClick={showCard}>title: </h1>
                <p>meal-type: </p>
                <p> people it serves: </p>
                <p>difficulty: </p>
                <p>ingredients: <ul> </ul> </p>
                <p>steps: <ul></ul> </p>
                </>
            );
        }else{
            <h1 onClick={showCard}>title</h1>
        }
    }

    return (
        <div>
            {displayFull()}
        </div>
    )
}
