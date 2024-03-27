import { useState, useEffect } from 'react'
import Card from './components/Card.jsx'
import Cart from './components/Cart.jsx'
import items from './items.js'
import './App.css'

function App() {

  const [shoppingCart, setShoppingCart] = useState([])
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState('')
  const [alert, setAlert] = useState(false)

  function handleClick(id) {
    if (shoppingCart.some(item => item.id === id)) {
      return;
    } else {
      const newItem = items.find(item => item.id === id);
      setShoppingCart(prevState => [...prevState, newItem]);
    }
  }

  function removeItem(id) {
    console.log(id)
    setShoppingCart(prevState => prevState.filter(item => item.id !== id))
  }

  function addCount(id) {
    setShoppingCart(prevState => prevState.map(item => 
        item.id === id ? {...item, count: item.count +1 } : item
      ))
  }

  function removeCount(id) {
    setShoppingCart(prevState => prevState.map(item => 
      item.id === id ? {...item, count: item.count === 1 ? 1 : item.count -1 } : item
    ))
  }
  
  
  useEffect(() => {
    setTotal(shoppingCart.reduce((total, item) => total + (item.price * item.count), 0));
  }, [shoppingCart])


  const filteredCards = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  const cards = filteredCards.map((v, i) => 
    <Card 
    key={i} 
    id={v.id} 
    imgId={v.imgId} 
    name={v.name} 
    price={v.price} 
    handleClick={handleClick} 
    
    />
  )

  const cart = shoppingCart.map((v, i) =>
    
    <Cart
        key={i}
        id={v.id} 
        name={v.name} 
        imgId={v.imgId} 
        price={v.price} 
        removeItem={removeItem} 
        count={v.count} 
        addCount={addCount} 
        removeCount={removeCount}
        />
  )
  
    
  return (
    <>
    <div className='bg-blue-700 h-80 m-2'>
      <div className='flex flex-col justify-center items-center pt-20'>

      <h1 className='text-center font-bold text-yellow-400 text-3xl p-4'>Shopping Cart</h1>
      <input
        type='text'
        className='indent-4 rounded-lg w-1/4 h-10'
        placeholder='Search for products...'
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
    </div>
    <div className='flex flex-row flex-wrap justify-center items-center gap-6 mt-4 mb-20'>
      {cards}
    </div>
    <div className='bg-blue-700 h-1 m-2'></div>
    {alert &&
     <div class="flex items-center bg-blue-700 text-white text-sm font-bold px-4 py-3" role="alert">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
        <p>Payment function not implemented</p>
    </div>
    }
    {shoppingCart.length > 0 &&
    <div className='flex justify-center items-center mt-20'>

    <div className=' border border-blue-700 w-96 rounded-lg bg-blue-100'>
        {cart}
        <span className='text-2xl p-4'>Total Amount:</span>
        <span className='text-xl'>
          {total}€
        </span>
        <button
          className='bg-blue-700 text-yellow-400 rounded-3xl p-2 text-base hover:text-white w-1/2 m-2 float-right'
          onClick={() => setAlert(prevAlert => !prevAlert)}
         >Proceed to Payment</button>
    </div>
    </div>
    }
    </>
  )
}

export default App
