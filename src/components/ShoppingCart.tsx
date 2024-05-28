import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartprops={
    isOpen:boolean
}


export function ShoppinCarrt({isOpen}:ShoppingCartprops){
    const { closeCart }= useShoppingCart() 

    return(

        <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
    <Offcanvas.Header closeButton>
 <Offcanvas.Title>Cart</Offcanvas.Title>

    </Offcanvas.Header>
    </Offcanvas>
    )
}