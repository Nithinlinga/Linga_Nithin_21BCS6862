import React from 'react'
import { Link } from 'react-router-dom';
import '../style.css';
const Home = () => {
  let search=document.querySelector('.search-box');

document.querySelector('.search-box').onclick=() =>{
     search.classList.toggle('active');
}


  return (
    <>
   <section className="home" id="home">
        <div className="home-text">
            <h1>We have every<br><span>Car </span>you have dreamt</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br>Labore dolorum molestiae quisquam? Consectetur,<br> cumque alias placeat cupiditate quisquam error ex reprehenderit vel enim<br> odit voluptatem nesciunt pariatur, saepe cum asperiores.
            </p>
            <a href="#" className="btn">Discover Now</a>
        </div>
    </section>
    <section className="cars" id="cars">
        <div className="heading">
            <span>All Cars</span>
            <h2>We have all types of cars</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil mollitia voluptate architecto dignissimos omnis, fuga alias nostrum autem ad fugit quisquam quia at laudantium dicta veniam cupiditate, amet delectus corporis!
            </p>
        </div>
        <div className="cars-container container">
            <div className="box">
                <img src="img/car1.jpg" alt="">
                <h2>
                    Prosche Car
                </h2>
            </div>
            <div className="box">
                <img src="img/car2.jpg" alt="">
                <h2>
                    Prosche Car
                </h2>
            </div>
            <div className="box">
                <img src="img/car3.jpg" alt="">
                <h2>
                    Prosche Car
                </h2>
            </div>
            <div className="box">
                <img src="img/car4.jpg" alt="">
                <h2>
                    Prosche Car
                </h2>
            </div>
            <div className="box">
                <img src="img/car5.jpg" alt="">
                <h2>
                    Prosche Car
                </h2>
            </div>
            <div className="box">
                <img src="img/car6.jpg" alt="">
                <h2>
                    Prosche Car
                </h2>
            </div>
        </div>
    </section>
    <section className="about container" id="about">
        <div className="about-img">
            <img src="img/about.png" alt="">
        </div>
        <div className="about-text">
            <span>About us</span>
            <h2>Cheap Prices <br> with quality cars</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br> Repudiandae nihil sunt temporibus mollitia tenetur saepe eius eligendi voluptatibus et error unde, atque quasi ducimus<br> incidunt veritatis consectetur laboriosam consequuntur quis.</p>

            <a href="#" className="btn">Learn More</a>
        </div>
    </section>
    <section className="footer">
        <div className="footer-container conatiner">
            <div className="footer-box">
                <a href="#" className="logo" >Car <span>Point</span></a>
                <div className="social">
                    <a href="#"><i className="bx bxl-facebook"></i></a>
                    <a href="#"><i className="bx bxl-twitter"></i></a>
                    <a href="#"><i className="bx bxl-instagram"></i></a>
                    <a href="#"><i className="bx bxl-youtube"></i></a>
                </div>
            </div>
            <div className="footer-box">
                <h3>Page</h3>
                <a href="#">Home</a>
                <a href="#">Cars</a>
                <a href="#">About</a>
                <a href="#">Sales</a>
            </div>
            <div className="footer-box">
                <h3>Legal</h3>
                <a href="#">Privacy</a>
                <a href="#">Return Poilcy</a>
                <a href="#">Cookies Poilcy</a>
            </div>
            <div className="footer-box">
                <h3>Contact</h3>
                <p>India</p>
                <p>Nepal</p>
                <p>USA</p>
                <p>Malaysia</p>
            </div>
        </div>

    </section>
    </>
  )
}

export default Home
