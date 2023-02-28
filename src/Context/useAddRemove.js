import { useState } from 'react'

export default function addRemove() {
    const [cart, setCart] = useState([])

    function add(item) {
        setCart(prev => ([...prev, item]))
    }

    function remove(id) {
        setCart(prev => prev.filter(val => val.id !== id))
    }

  return {add, remove, cart}
}
