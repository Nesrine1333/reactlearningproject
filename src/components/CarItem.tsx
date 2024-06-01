import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps={
    id:number ,
    quantity:number 
}


export function CartItem({id,quantity}: CartItemProps){
  const { removeQuantity} = useShoppingCart()
  const item = storeItems.find(i=>i.id===id)
if(item==null)return null 
return(
    <Stack direction="horizontal" gap={2} >
        <img src={item.imgUrl} alt=""  style={{width:"125px",height:"50px", objectFit:"cover"}}/>
        <div className="me-auto">
            <div>
                {item.name}{""}
                {quantity > 1 &&( <span className="text-muted" style={{fontSize:"20px"}} >
                    {quantity}x
                    
                    </span>)}
            </div>
            <div className="text-muted" style={{fontSize:"20px"}}>{
                formatCurrency(item.price *quantity)
            }</div>
            <Button variant="outline-danger" size="sm" onClick={
                ()=> removeQuantity(item.id)
            }> x</Button>
        </div>
       
    </Stack>
)
}