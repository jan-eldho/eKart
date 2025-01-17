import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removeFromWhishList } from '../redux/whishlistSlice';
import { Link } from 'react-router-dom';
import { addtoCart } from '../redux/cartSlice';

function Wishlist() {
  const wishListItem= useSelector(state=>state.wishlistReducer)
  console.log('wishishlist items in wishilist page');
  console.log(wishListItem);
  const dispatch=useDispatch()

  const handlewishlist=(item)=>{
    dispatch(addtoCart(item));
    dispatch(removeFromWhishList(item.id))
  }
  
  return (
    <>
     <button className='btn btn-success mt-4 ms-4'>
    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
    <i class="fa-solid fa-arrow-left me-2"></i>
    Back to Home
    </Link>
   

  </button>

<Row className='m-5'>
 
      {
        wishListItem?.length > 0 ?
        wishListItem.map((item)=>(

          <Col sm={12} md={6} lg={4} xl={3} className='mb-3' >
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} height='200px' className='p-3'/>
          <Card.Body>
            <Card.Title>{item.title.slice(0,20)}...</Card.Title>
            <Card.Text>
             <p>{item.description.slice(0,50)}...</p>
             <p className='fw-bolder'>Price: &#8377; {item.price}</p>
            </Card.Text>
    
            <div className='d-flex align-items-center justify-content-between'>
    
            <Button variant="outline-danger" onClick={()=>dispatch(removeFromWhishList(item.id))}>
              <i class="fa-solid fa-trash" ></i></Button>
            <Button variant="outline-success" onClick={()=>handlewishlist(item)}><i class="fa-solid fa-cart-shopping"></i></Button>
           
            </div>
           
          </Card.Body>
        </Card>
          </Col>
        )):
        <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiWTl2ki2CWTJ0-AnnZ3Vg2AoGCjzqh8ysQ&s"  alt="" height='300px' />
          <h3 className='text-danger fw-bolder'> Your Cart is Empty..</h3>
         
        </div>

      }
    

    </Row>


  
    </>
  )
}

export default Wishlist