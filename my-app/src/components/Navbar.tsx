import {Button, Container, Nav, Navbar as NavB } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import {BiShoppingBag} from 'react-icons/bi'
import { useShoppingCart } from '../context/shoppingCartContext'

const Navbar = () => {
    const { openCart, cartQuantity} = useShoppingCart()
  return (
    <NavB className='bg-white shadow-sm mb-3' sticky="top">
<Container>
    <Nav className='me-auto'>
        <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
        <Nav.Link to={"/store"} as={NavLink}>Store</Nav.Link>
        <Nav.Link to={"/about"} as={NavLink}>About</Nav.Link>
    </Nav>
    {cartQuantity > 0  && (
 <Button onClick={openCart} variant='outline-primary' style={{width: "3rem", height: "3rem", display: "flex", position: "relative"}}><BiShoppingBag style={{width: "2rem", height: "2rem"}}/><span className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%" }}>{cartQuantity}</span></Button>
    )}
</Container>
    </NavB>
  )
}

export default Navbar