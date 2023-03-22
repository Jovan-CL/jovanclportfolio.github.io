import pizzas from '../pizzas.json'
import drinks from '../drinks.json'
import { NavLink } from 'react-router-dom'

export const Home = () => {

  return (
    <div>
      <div className='home hero'>
        <div className='hero-description'>
        <h2 className='title'>Home</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Omnis maxime similique nemo. Sed molestias fugiat neque 
          ipsam nisi et perspiciatis?</p>
        </div>
      </div>
      <div className='container'>
      <h3 className='heading-three'>Featured products</h3>
      {/* For Pizza flavors */}

      <div className='cards'>
        <div className='card' key={pizzas[0].id}>
          <img className='product-image' src={pizzas[0].image} alt="pizza image" />
          <div className='product-name'>{pizzas[0].name}</div>
        </div>
        <div className='card' key={pizzas[1].id}>
          <img className='product-image' src={pizzas[1].image} alt="pizza image" />
          <div className='product-name'>{pizzas[1].name}</div>
        </div>
        <div className='card' key={pizzas[2].id}>
          <img className='product-image' src={pizzas[2].image} alt="pizza image" />
          <div className='product-name'>{pizzas[2].name}</div>
        </div>
      </div>
      <div className='button-container featured-button'>
        <NavLink className='see-more' to={'menu'}>
          <button className='button'>See more</button>
          </NavLink>
          </div>
        {/* For Drinks */}
        
        <div className='cards'>
        <div className='card' key={drinks[0].id}>
          <img className='product-image' src={drinks[0].image} alt="pizza image" />
          <div className='product-name'>{drinks[0].name}</div>
        </div>
        <div className='card' key={drinks[1].id}>
          <img className='product-image' src={drinks[1].image} alt="pizza image" />
          <div className='product-name'>{drinks[1].name}</div>
        </div>
        <div className='card' key={drinks[2].id}>
          <img className='product-image' src={drinks[2].image} alt="pizza image" />
          <div className='product-name'>{drinks[2].name}</div>
        </div>
        </div>
        <div className='button-container featured-button'>
          <NavLink className='see-more' to={'menu'}>
          <button className='button'>See more</button>
          </NavLink>
          </div>
      </div>
    </div>
    )
}
