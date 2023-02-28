import {useState} from 'react'

export default function increaseDecrease(val) {

    const [art, setArt] = useState(val)
    
    //function to increase quantity when adding to cart
    function increaseQuantity(id) {
        setArt(art.map(item => item.id == id 
          ? 
          {...item, quantity: item.quantity + 1}
          :
          item
          ))
      }
    
      //function to decrease quantity when adding to cart
      function decreaseQuantity(id) {
        setArt(art.map(item => item.id == id 
        ? 
        {...item, quantity: item.quantity <= 1? 1 : item.quantity - 1} 
        : 
        item
        ))
      }
  return { increaseQuantity, decreaseQuantity, art }
}
