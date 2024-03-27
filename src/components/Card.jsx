import React from 'react'

export default function Card(props) {

    return(
    <div className='w-1/4 border border-blue-700 rounded-xl h-96 flex flex-col justify-center items-center hover:bg-blue-100 hover:scale-105'>
        <div className='w-40 h-40 bg-blue-700 rounded-full flex justify-center items-center'>
            <img src={`/${props.imgId}.png`} />
        </div>
        <h1 className='text-3xl p-4'>{props.name}</h1>
        <p className='p-2 text-xl'>Price: {props.price}€</p>
        <button
         className='bg-blue-700 text-yellow-400 rounded-3xl p-3 text-lg hover:text-white '
         onClick={() => props.handleClick(props.id)}
         >Add to Shopping Cart</button>
    </div>
    )
}