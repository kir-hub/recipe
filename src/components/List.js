import React, {useState, useEffect} from 'react'
import Item from './Item'

export default function List() {
    const [items, setItems] = useState([])

    const fetchItems =()=>{
        setItems([<Item  />, ...items])
    }
  
    useEffect(()=>{
        fetchItems()
    },[])

    return (
        <div>
                {items.map((item, index)=> <li key={item}>{item}</li>)}
        </div>
    )
}
