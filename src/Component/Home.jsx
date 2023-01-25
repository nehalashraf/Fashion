/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

export default function Home() {
  return (
   <>
   <div className="container-fluid mt-5">
   <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='Images/slide1.webp' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
        <h1 className='text-center mt-5'>FASHION CHANGING ALWAYS</h1>
        <a href="shop.html" class="btn" tabindex="-1">Shop Now</a>
      </div>
    </div>
    <div class="carousel-item">
    <img src='Images/slide2.webp' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
      <h1 className='text-center  mt-5'>FASHION CHANGING ALWAYS</h1>
      <a href="shop.html" class="btn" tabindex="-1">Shop Now</a>
      </div>
    </div>
    <div class="carousel-item">
    <img src='Images/slide3.webp' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
      <h1 className='text-center  mt-5'>FASHION CHANGING ALWAYS</h1>
      <a href="shop.html" class="btn" tabindex="-1">Shop Now</a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   </div>
   <div className="container-fluid mt-5 home" >
   <div className="row">
   <div className="col-lg-3 m-auto mt-5"> 
       <div className="img-wrapper">
       <img src="Images/home1.webp" className='w-100' alt="" />
        <div class="overlay"><span> GLASSES</span>
        <a href="shop.html" class="btn_1" tabindex="-1">Shop</a>
        </div>
       </div>
    </div>
    <div className="col-lg-3 m-auto mt-5">
    <div className="img-wrapper">
       <img src="Images/home2.webp" className='w-100' alt="" />
        <div class="overlay"><span> WATCHES</span>
        <a href="shop.html" class="btn_1" tabindex="-1">Shop</a>
        </div>
       </div>
    </div>
    <div className="col-lg-3  m-auto mt-5">
    <div className="img-wrapper">
       <img src="Images/home3.webp" className='w-100' alt="" />
        <div class="overlay"><span> JACKETS</span>
        <a href="shop.html" class="btn_1" tabindex="-1">Shop</a>
        </div>
       </div>
    </div>
    <div className="col-lg-3  m-auto mt-5">
    <div className="img-wrapper">
       <img src="Images/home4.webp" className='w-100' alt="" />
        <div class="overlay"><span> CLOTHES</span>
        <a href="shop.html" class="btn_1" tabindex="-1">Shop</a>
        </div>
       </div>
    </div>
   </div>
   </div>
   <div className="container mt-5">
    <div className="section_2">
    <h1 className='text-center'>NEW</h1>
    <h1 className='text-center'>ARRIVAL</h1>
    </div>
   </div>
   <div className="container">
    <div className="row">
        <div className="col-lg-3 mt-5">
        <div class="card">
  <img src="Images/img1.webp" class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h4 class="card-text tit" className='text-center mt-3'>Knnited Jumper</h4>
    <div className="position-absolute  start-50 translate-middle   stars mt-3" >
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>
    <p class="card-text" className='text-center mt-5'>$ 50.00</p>
  </div>
</div>
        </div>
        <div className="col-lg-3 mt-5">
        <div class="card">
  <img src="Images/img2.webp" class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h4 class="card-text tit" className='text-center mt-3'>Knnited Jumper</h4>
    <div className="position-absolute  start-50 translate-middle   stars mt-3" >
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>
    <p class="card-text" className='text-center mt-5'>$ 80.00</p>
  </div>
</div>
        </div>
        <div className="col-lg-3 mt-5">
        <div class="card">
  <img src="Images/img3.webp" class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h4 class="card-text tit" className='text-center mt-3'>Knnited Jumper</h4>
    <div className="position-absolute  start-50 translate-middle   stars mt-3" >
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>
    <p class="card-text" className='text-center mt-5'>$ 60.00</p>
  </div>
</div>
        </div>
        <div className="col-lg-3 mt-5">
        <div class="card">
  <img src="Images/img4.webp" class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h4 class="card-text tit" className='text-center mt-3'>Knnited Jumper</h4>
    <div className="position-absolute  start-50 translate-middle   stars mt-3" >
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>
    <p class="card-text" className='text-center mt-5'>$ 30.00</p>
  </div>
</div>
        </div>
      </div>
    </div>
    <div className="container">
    <div className="row">
        <div className="col-lg-3 mt-5">
        <div class="card">
  <img src="Images/img5.webp" class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h4 class="card-text tit" className='text-center mt-3'>Knnited Jumper</h4>
    <div className="position-absolute  start-50 translate-middle   stars mt-3" >
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>
    <p class="card-text" className='text-center mt-5'>$ 50.00</p>
  </div>
</div>
        </div>
        <div className="col-lg-3 mt-5">
        <div class="card">
  <img src="Images/img6.webp" class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h4 class="card-text tit" className='text-center mt-3'>Knnited Jumper</h4>
    <div className="position-absolute  start-50 translate-middle   stars mt-3" >
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>
    <p class="card-text" className='text-center mt-5'>$ 40.00</p>
  </div>
</div>
        </div>
        <div className="col-lg-3 mt-5">
        <div class="card">
  <img src="Images/img7.webp" class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h4 class="card-text tit" className='text-center mt-3'>Knnited Jumper</h4>
    <div className="position-absolute  start-50 translate-middle   stars mt-3" >
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>
    <p class="card-text" className='text-center mt-5'>$ 90.00</p>
  </div>
</div>
        </div>
        <div className="col-lg-3 mt-5">
        <div class="card">
  <img src="Images/img8.webp" class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h4 class="card-text tit" className='text-center mt-3'>Knnited Jumper</h4>
    <div className="position-absolute  start-50 translate-middle   stars mt-3" >
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>
    <p class="card-text" className='text-center mt-5'>$ 100.00</p>
  </div>
</div>
        </div>
      </div>
    </div>
    <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-lg-12 mt-5  ">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='Images/bg.webp' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
        <h1 className='text-center mt-3'>Established fact that by the Readble Content</h1>
        <a href="shop.html" class="btn" tabindex="-1">Read Me</a>
      </div>
    </div>
    </div>
    </div>
      </div>
      </div>
      </div>
   <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-lg-6 mt-5  bg_img">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='Images/home7.webp' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
        <h1 className='text-center mt-3'>Established fact that by the Readble Content</h1>
        <a href="shop.html" class="btn" tabindex="-1">Read Me</a>
      </div>
    </div>
    </div>
    </div>
      </div>
      <div className="col-lg-6 mt-5 bg_img">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='Images/home5.webp' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
        <h1 className='text-center '>Established fact that by the Readble Content</h1>
        <a href="shop.html" class="btn" tabindex="-1">Read Me</a>
      </div>
    </div>
    </div>
    </div>
      </div>
    </div>
   </div>
   <div className="container-fluid mt-5 social-icon">
    <div className="row">
      <div className="col-lg-3 mt-5 mb-5">
        <div className="cart">
          <img src="Images/icon1.svg" alt="" />
          <h4 className='mt-3'>Fast & Free Delivery</h4>
          <p className='mt-3'>Free delivery on all orders</p>
        </div>
      </div>
      <div className="col-lg-3 mt-5 mb-5">
        <div className="cart">
          <img src="Images/icon2.svg" alt="" />
          <h4 className='mt-3'>Fast & Free Delivery</h4>
          <p className='mt-3'>Free delivery on all orders</p>
        </div>
      </div>
      <div className="col-lg-3 mt-5 mb-5">
        <div className="cart">
          <img src="Images/icon3.svg" alt="" />
          <h4 className='mt-3'>Fast & Free Delivery</h4>
          <p className='mt-3'>Free delivery on all orders</p>
        </div>
      </div>
      <div className="col-lg-3 mt-5 mb-5">
        <div className="cart">
          <img src="Images/icon4.svg" alt="" />
          <h4 className='mt-3'>Fast & Free Delivery</h4>
          <p className='mt-3'>Free delivery on all orders</p>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}
