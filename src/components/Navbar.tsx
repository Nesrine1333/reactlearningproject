import { Button, Container, Nav, Navbar as Navbarcomp } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar(){
return(
    <>

    <Navbarcomp className="bg-white shadow-sm mb-3" sticky="top">
    <Container>
        <Nav className="me-auto">
        <Nav.Link to="/home" as={NavLink}>Home</Nav.Link>
        <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>

        <Nav.Link to="/about" as={NavLink}>About</Nav.Link>

        </Nav>
        <Button variant="outline-primary" className="rounded-circle" style={{position:"relative" , width:"3rem", height:"3rem"}}>
           
<svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5996 21.57C19.7042 21.57 20.5996 20.6746 20.5996 19.57C20.5996 18.4654 19.7042 17.57 18.5996 17.57C17.495 17.57 16.5996 18.4654 16.5996 19.57C16.5996 20.6746 17.495 21.57 18.5996 21.57Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.59961 21.57C9.70418 21.57 10.5996 20.6746 10.5996 19.57C10.5996 18.4654 9.70418 17.57 8.59961 17.57C7.49504 17.57 6.59961 18.4654 6.59961 19.57C6.59961 20.6746 7.49504 21.57 8.59961 21.57Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 3.55997C2 3.55997 6.64 3.49997 6 7.55997L5.31006 11.62C5.20774 12.1068 5.21778 12.6105 5.33954 13.0929C5.46129 13.5752 5.69152 14.0234 6.01263 14.4034C6.33375 14.7833 6.73733 15.0849 7.19263 15.2854C7.64793 15.4858 8.14294 15.5797 8.64001 15.56H16.64C17.7479 15.5271 18.8119 15.1196 19.6583 14.404C20.5046 13.6884 21.0834 12.7069 21.3 11.62L21.9901 7.50998C22.0993 7.0177 22.0939 6.50689 21.9744 6.017C21.8548 5.52712 21.6242 5.07126 21.3005 4.68467C20.9767 4.29807 20.5684 3.99107 20.1071 3.78739C19.6458 3.58371 19.1438 3.48881 18.64 3.50998H9.94" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div className="rounded-circle bg-danger d-flex justify-contetn-centter algin-item-center" style={{color:"white",width:"1.5rem", height:"1.5rem" ,position:"absolute" ,bottom:"0",right:"0" }}>
 3
    </div>
    
    </Button>
    </Container>
    </Navbarcomp>
    </>
)
}