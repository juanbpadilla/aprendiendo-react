import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'

export function Cart () {
  const cartCheckBoxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Google_Pixel_and_Pixel_XL_smartphones_%2830155272575%29.jpg/800px-Google_Pixel_and_Pixel_XL_smartphones_%2830155272575%29.jpg" 
              alt='Iphone' 
            />
            <div>
              <strong>iPhone</strong> - $1499
            </div>

            <footer>
              <small>
                Qty: 1
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}