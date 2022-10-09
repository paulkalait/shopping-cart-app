import { createContext, ReactNode, useContext, useState } from "react"


interface Props{ 
    children: ReactNode
}

type CartItem = { 
    id: number;
    quantity: number
}

type ShoppingCartContext = { 
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const ShoppingCartProvider = ({children}: Props) =>{
    const [cartItems, setCartItems] = useState<CartItem[]>([])

const getItemQuantity = (id: number ) => {
    // * if we have a mathc get the quantity or return 0
    return cartItems.find(item => item.id === id)?.quantity || 0
}
const  increaseCartQuantity = (id: number) => {
   setCartItems(currItem => {
    if(currItem.find(item => item.id === id) == null){
        return [...currItem, { id, quantity: 1}]
    }else{ 
        return currItem.map(item => {
            if(item.id === id){
                return { ...item, quantity: item.quantity + 1}
            }else{ 
                return item
            }
        })
    }
   })
}
const decreaseCartQuantity = (id: number) => {
   setCartItems(currItem => {
    if(currItem.find(item => item.id !== id)?.quantity === 1){
        return currItem.filter(item => item.id !== id)
    }else{ 
        return currItem.map(item => {
            if(item.id === id){
                return { ...item, quantity: item.quantity - 1}
            }else{ 
                return item
            }
        })
    }
   })
}
const removeFromCart = (id: number) => {
    setCartItems(currItem => {
        return currItem.filter(item => item.id !== id)
    })
}
    return <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
        {children}
    </ShoppingCartContext.Provider>
}