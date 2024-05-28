import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppinCarrt } from "../components/ShoppingCart";



type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number,
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    inreasQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    removeQuantity: (id: number) => void
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
    cartItems: CartItem[]

}

const ShoppingCartContext = createContext({} as ShoppingCartContext);



export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}




export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const [isOpen ,setisOpen]=useState(false)

    const cartQuantity =cartItems.reduce((quantity ,item)=> item.quantity + quantity,0)

    const closeCart=()=> setisOpen(false)
    const openCart=()=>setisOpen(true)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function inreasQuantity(id: number) {
        setCartItems(currentItem => {
            if (currentItem.find(item => item.id === id) == null) {


                return [...currentItem, { id, quantity: 1 }]
            } else {
                return currentItem.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }


        })
    }
    function decreaseQuantity(id: number) {
        setCartItems(currentItem => {
            if (currentItem.find(item => item.id === 1)) {
                return currentItem.filter(item => item.id !== id)


            } else {
                return currentItem.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }


        })
    }
    function removeQuantity(id: number) {
        setCartItems(currentItem => {

            return currentItem.filter(item => item.id !== id)


        })
    }
    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, inreasQuantity, decreaseQuantity, removeQuantity ,cartItems,cartQuantity,openCart,closeCart }}>
            {children}
            <ShoppinCarrt isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}