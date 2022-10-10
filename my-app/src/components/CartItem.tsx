import React from 'react'
import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/shoppingCartContext';
import StoreItems from '../data/items.json';
import { formatCurrency } from '../utils/formatCurrency';

interface Props{ 
    id: number;
    quantity: number

}
const CartItem = ({id, quantity}: Props) => {
    const { removeFromCart} = useShoppingCart()
    const item = StoreItems.find(i => i.id === id)
    if(item == null) return null

  return (
    <Stack direction='horizontal' gap={2} className="d-flex align-items-center">
        <img src={item.imgUrl} alt="itemImage" style={{width: "125px", height: "75px",  objectFit: "cover"}} />
        <div className="me-auto">

            <div>
                {item.name} {quantity > 1 && (
                <span className="text-muted" style={{fontSize: ".60rem"}}>{quantity}x</span>
                )}
            </div>
            <div className="text-muted" style={{fontSize: ".75rem"}}>{formatCurrency(item.price)}</div>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>x</Button>
    </Stack>
  )
}

export default CartItem