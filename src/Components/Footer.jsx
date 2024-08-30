import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div style={{width:'100%',height:'300px'}} className='d-flex justify-content-center align-items-center flex-column mt-5 bg-primary'>
      <div className='d-flex justify-content-evenly align-items-center mb-5 w-100' style={{color:'white'}}>
        <div style={{width:'400px', color:'white'}}>
          <h4><i style={{color:"white"}} class="fa-solid fa-cart-shopping fa-bounce me-3"></i> e-Kart</h4>
          <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo dignissimos blanditiis vel magnam eveniet error fuga sed, laborum ipsa omnis necessitatibus at veritatis reiciendis harum, quas nemo nisi quia voluptas.</h6>

        </div>
        <div className='d-flex flex-column'>
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
          <Link to={'/whislist'} style={{textDecoration:'none',color:'white'}}>Whish List</Link>
        </div>
        <div className='d-flex flex-column'>
          <h4>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}} target='_blank'>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}} target='_blank'>Bootswatch</Link>

        </div>

        <div>
          <h4>Contact</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter Email Id' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly mt-3'>
          <Link style={{textDecoration:'none'}} className='text-warning'><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link style={{textDecoration:'none'}} className='text-warning'><i  class="fa-brands fa-reddit fa-2x"></i></Link>
          <Link style={{textDecoration:'none'}} className='text-warning'><i  class="fa-brands fa-facebook fa-2x"></i></Link>
          <Link style={{textDecoration:'none'}} className='text-warning'><i  class="fa-brands fa-x-twitter fa-2x"></i></Link>
        </div>
        </div>


      </div>
      <p style={{color:'white'}}>copyright &#169;2024 e-Kart bulid with React Redux</p>

    </div>
    </>
  )
}

export default Footer