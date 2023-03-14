import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Badge, Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState} from "react";



function App() {
 
   const [show,setShow] = useState(false);
  const data=[
    {
      productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGB9WlL9AF6l0_ToR09eNLkAeDo5h7fB7hudpvMGPZo50JJLs77tW5r6XuAGiIRHklsxU&usqp=CAU',
      productName : "samsung",
      Price1 : '$ 10000',
      Price2 : '- $ 16000',
    },
    {
      productImage:'https://s3b.cashify.in/gpro/uploads/2023/01/11045528/5-1.jpg',
      productName :" redmi",
      Price1 : '$ 10000',
      Price2 : '- $ 15000',
    },
    {
      productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19Ka02q-tMk39w8WXsIpvoDFRdjKYxvcrtw&usqp=CAU',
      productName : "realme",
      Price1 :' $ 10000',
      
    },
    {
      productImage:'https://cdn.nerdschalk.com/wp-content/uploads/2017/05/gionee-s10-ram.jpg',
      productName : "gio",
      star : '⭐',
      Price1 : '$ 10000',
      Price2 : '- $ 13000',
    },
    {
      productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6GQx1Q_-IDJEL1RdYTQVRzWqMKBEphwXhA&usqp=CAU',
      productName :" oppo",
      Price1 : '$ 10000',
      Price2 : '- $ 19000',
    },
    {
      productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdKyh6qM_0IfReTMoj9cAoMklhZWVfO7cKg&usqp=CAU',
      productName : "realme",
      Price1 : '$ 10000',
      Price2 : '- $ 17000',
    },
    {
      productImage:'https://s3b.cashify.in/gpro/uploads/2023/01/11045528/5-1.jpg',
      productName : "redmi",
      star : '⭐',
      Price1 : '$ 10000',
      Price2 : '- $ 15000',
    },
    {
      productImage:'https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/09/iphone11-1.jpg',
      productName : "iphone",
      star : '⭐',
      Price1 :'$ 30000',
      Price2 : '- $ 50000',
    }
   
  ]
  const [count, setCount] = useState(0);
  return (

<div className='App'>


<div className='nave'>
<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> famous shop </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Badge className='badge' bg="success"> Cart  - {count}</Badge>
      </Container>
    </Navbar>
    </div>

<div className='Box'><h1>shop in style</h1>
<p>with the shop home templeate </p> </div>


<div className="Scan">
{data.map((prod,idx)=><Cards
idx={idx}
prod={prod}
count={count}
setCount={setCount}
/>)}

</div>


<div className='bottom'>
   CopyRight @ Your Website 2023
</div>
</div> 





)}

export default App;

function Cards({prod,idx,count,setCount}){
  const [show, setShow] = useState(false);

function addToCart(){
  setShow(!show)
  setCount(count+1)
}
function removeFromCart(){
  setShow(!show)
  setCount(count-1)
}
  return(    
<Card key = {idx} style={{ width: '15rem' }}>
    <Card.Img variant="top" src={prod.productImage} />
    <Card.Body>
      <Card.Title>{prod.productName}</Card.Title>
      <Card.Text>
       {prod.star}{prod.star}{prod.star}{prod.star}{prod.star}
      </Card.Text>
      <Card.Text>
       { prod.Price1} { prod.Price2}
      </Card.Text>

     {!show? <Button variant="primary"
      onClick={addToCart}
      >buy now</Button> : ""}

       {show ? <Button variant="danger"
      onClick={removeFromCart }
      >remove now</Button> : ""}

    </Card.Body>
  </Card>
  
  )}