import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CarItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json"




type ShoppingCartprops={
    isOpen:boolean
}


export function ShoppinCarrt({isOpen}:ShoppingCartprops){
    const { closeCart,cartItems }= useShoppingCart() 

    return(

        <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
    <Offcanvas.Header closeButton>
 <Offcanvas.Title>Cart</Offcanvas.Title>


    </Offcanvas.Header>
    <Offcanvas.Body>
        <Stack gap={3}>
        {cartItems.map(item=> (
            <CartItem key={item.id}{...item}/>)
        )}

<div className="ms-auto fw-bold fs-5">
                Total{""}
                {formatCurrency(
                    cartItems.reduce((total, cartItems)=>{
                        const item =storeItems.find(i=> i.id === cartItems.id)
                        return total + ( item?.price|| 0) * cartItems.quantity
                    },0)
                )}
        </div>
        </Stack>
        </Offcanvas.Body>
    </Offcanvas>
    )
}