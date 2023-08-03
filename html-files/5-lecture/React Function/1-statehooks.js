// using hooks

import {React, state, useState  } from "react";



//function stars ko red and grey show krega

const star  = ({selected = false, onSelect = f => f }) => {
    <Fa color = {selected ? 'red': 'grey'} onClick = {onSelect}/>
}

// function use .. starRating

function starRating ({totalStars = 5}) {
    const [starSelected , setSelectedStar] = useState(0);
    return(
        createArray(totalStars).map((n,i) =>{
            <star key ={i}
            selected = {starSelected>i} // checking condition
            onSelect = {() =>setSelectedStar(i + 1)}
            />
        })
    )
}