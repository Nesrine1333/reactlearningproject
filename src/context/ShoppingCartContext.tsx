import { ReactNode, createContext, useContext, useState } from "react";



type ShoppingCartProviderProps={
    children: ReactNode
}

type CartItem={
    id:number,
    quantity:number
}

type ShoppingCartContext={
    getItemQuantity:(id:number) => number
    inreasQuantity:(id:number) => void
    decreaseQuantity:(id:number) => void
    removeQuantity:(id:number) => void 
}

const ShoppingCartContext = createContext({} as ShoppingCartContext) ;



export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}




export function  ShoppingCartProvider({children}:ShoppingCartProviderProps){
    const [cartItems,setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id:number){
            return cartItems.find(item => item.id === id )?.quantity || 0
    }

    function inreasQuantity(id:number){
       setCartItems( currentItem => {   
        if(currentItem.find(item => item.id  === id ) === null){
        
            
            return [...currentItem,{id,quantity: 1}

            ]
       }else{
        return currentItem.map(item=>{
            if (item.id===id){
                return {...item,quantity: item.quantity + 1}
            }   else{
                return item
               }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        })
       } 
    
    
     } ) 
    }
    function decreaseQuantity(id:number){
        setCartItems( currentItem => {   
         if(currentItem.find(item => item.id === 1)){
             return currentItem.filter(item => item.id !==id)
 
             
        }else{
         return currentItem.map(item=>{
             if (item.id===id){
                 return {...item,quantity: item.quantity - 1}
             }   else{
                 return item
                }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
         })
        } 
     
     
      } ) 
     }
     function removeQuantity(id:number){
        setCartItems( currentItem => {   
       
             return currentItem.filter(item => item.id !==id)
     
     
      } ) 
     }
    return (
        <ShoppingCartContext.Provider value={{getItemQuantity ,inreasQuantity,decreaseQuantity, removeQuantity}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}