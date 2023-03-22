import pizzas from '../pizzas.json'
import drinks from '../drinks.json'
import { useState } from 'react';


export const Menu = () => {
  
  const [showPizza, setShowPizza] = useState(false)
  const [showDrink, setShowDrink] = useState(false)

  const showPizzas = () => setShowPizza(!showPizza)
  const showDrinks = () => setShowDrink(!showDrink)

const active = {backgroundBlendMode: "normal"}
const pizzaActiveStyle = showPizza ? active : null
const drinkActiveStyle = showDrink ? active : null

  return (
    <div>
      <div className='home hero'>
        <div className='hero-description'>
          <h2 className="title">Menu</h2>
        </div>
      </div>
    <div className="container">

        {/* For Pizzas section */}
      <div className='cards-container'>
        <div  style={pizzaActiveStyle} className='button-container menu-button-containers pizza-button'>
          <div >
            <h4 className='heading-four-menu'>Pizza Lab menu</h4>
            <button className='button menu-button' onClick={showPizzas}>See more</button>
          </div>
        </div>

        {/* Pizza flavor Options*/}
        { showPizza && 
        <div> 
            <div className='cards'>
             {pizzas && pizzas.map(pizza => {
              if(!pizza.image)return
              
              return ( 
                
                  <div className='card' key={pizza.id}>
                    <img className='product-image' src={pizza.image} alt="pizza image" />
                    <div className='product-name'>{pizza.name}</div>
                    <div className='product-price'>${pizza.price}</div>
                  </div>
              )
            })
            }
            </div>

            {/* Button close for pizza section */}
            <div className='button-container featured-button'>
              <button className='button' onClick={showPizzas}>
                Close
              </button>
            </div>
          </div>
          }
        </div>
        {/* For Drinks section */}
        <div  style={drinkActiveStyle} className='button-container menu-button-containers mango-button'>
          <div>
            <h4 className='heading-four-menu'>Mango Lab menu</h4>
            <button className='button menu-button' onClick={showDrinks}>See more</button>
          </div>
        </div>

        {/* Pizza flavor Options*/}
        {showDrink && <div>
        <div className='cards'>
        {
          drinks && drinks.map((drink) => {
            if(!drink.image)return
            return ( 
              <div className='card' key={drink.id}>
                <img className='product-image' src={drink.image} alt="drink image" />
                <div className='product-name'>{drink.name}</div>
                <div className='product-price'>${drink.price[0].small}</div>
                <div className='product-price'>${drink.price[0].large}</div>
              </div>
            )
          })
        }
        </div>
            {/* Button close for pizza section */}
            <div className='button-container featured-button'>
              <button className='button' onClick={showDrinks}>
                Close
              </button>
            </div>
        </div>
        }
    </div>
    </div>
  )
}
