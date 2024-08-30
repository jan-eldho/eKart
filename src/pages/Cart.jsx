import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';


function Cart() {
  const cartArray = useSelector(state => state.cartReducer);
  console.log('cart items');
  //hook to navigate a particular path or page
  const navigate=useNavigate()
  console.log(cartArray);

  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    const sum = cartArray.reduce((acc, cu) => {
      return acc + cu.price;
    }, 0);
    setTotal(sum);
  };

  useEffect(() => {
    getTotal();
  }, [cartArray]);

  const handleCart=()=>{
   
    alert("Thank you..your order placed successsfully")
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <>
      <div style={{ marginTop: '100px' }}>
        {
          cartArray?.length > 0 ?
            <div className="row w-100">
              <div className="col-lg-6 m-5">
                <table className="table shadow border">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Title</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartArray.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.title.slice(0, 20)}...</td>
                            <td><img src={item.image} alt="image" height="50px" width="50px" /></td>
                            <td>₹ {item.price}</td>
                            <td><Button variant="outline-danger" onClick={() => dispatch(removeFromCart(item.id))}><i className="fa-solid fa-trash"></i></Button></td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
              <div className='col-lg-4'>
                <div className='border shadow p-5'>
                  <h3 className='text-primary'>Cart Summary</h3>
                  <h5>Total Number of products: <span className='text-warning fw-bolder'>{cartArray?.length}</span></h5>
                  <h5>Total Price: <span className='text-warning fw-bolder'>₹ {total}</span></h5>
                  <button className='btn btn-success rounded w-100' onClick={handleCart}>Checkout</button>
                </div>
              </div>
            </div>
            :
            <div style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center flex-column">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiWTl2ki2CWTJ0-AnnZ3Vg2AoGCjzqh8ysQ&s" alt="" height="300px" />
              <h3 className="text-danger fw-bolder">Your Cart is Empty..</h3>
            </div>
        }
      </div>
    </>
  );
}

export default Cart;
