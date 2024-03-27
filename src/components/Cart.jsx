import React from 'react'

export default function Cart(props) {
    return(
        <div>
        <div className='flex flex-row p-4 gap-8'>
          <div className='w-20 h-20 bg-blue-700 rounded-full flex justify-center items-center'>
                <img src={`/${props.imgId}.png`} className='w-14' />
            </div>
            <div>
              <h1 className='text-3xl p-2'>{props.name}</h1>
              <p className='p-2 text-xl'>Price: {props.price * props.count}€</p>
            </div>
        </div>
    
            <div className='p-2 flex flex-row gap-4 '>
              <button className='bg-blue-700 text-yellow-400 rounded-3xl p-2 text-base hover:text-white w-1/2'
              onClick={() => props.removeItem(props.id)}
              >Remove Product</button>
              <button className='bg-blue-700 text-yellow-400 rounded-full text-lg hover:text-white h-8 w-8 self-center'
                onClick={() => props.addCount(props.id)}
              >+</button>
              <span className='self-center text-xl'>
                {props.count}
                
                </span>
              <button className='bg-blue-700 text-yellow-400 rounded-full text-lg hover:text-white h-8 w-8 self-center'
                onClick={() => props.removeCount(props.id)}
              >-</button>
            </div>
              <div className='bg-blue-700 h-1 m-2'></div>
      </div>
    )
}