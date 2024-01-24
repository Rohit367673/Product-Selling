import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <div className="branding">
          <h1> Brand Tag lines</h1>

          <div className="heading">
            <h1>Website</h1>
            <h1>Brand</h1>
            <h1>Name</h1>
          </div>
        </div>
        <div className="aboutw">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            vel est minima libero, nisi mollitia asperiores velit a quam
            eveniet!
          </p>
        </div>
        <div className="textani"></div>
        <div className="imageani">
          <div className="aleft">
            <div className="felem">
              <h3>Heading</h3>
              <h1>About the Heading that is given</h1>
              <h4> Design Development Product</h4>
            </div>
            <div className="felem">
              <h3>Heading</h3>
              <h1>About the Heading that is given</h1>
              <h4> Design Development Product</h4>
            </div>
            <div className="felem">
              <h3>Heading</h3>
              <h1>About the Heading that is given</h1>
              <h4> Design Development Product</h4>
            </div>
            <div className="felem">
              <h3>Heading</h3>
              <h1>About the Heading that is given</h1>
              <h4> Design Development Product</h4>
            </div>
          </div>

          <div className="aright">
            <div className="rimage">
              <img src="/pic/top.jpg" alt="" />
              <img src="/pic/t3.png" alt="" />
              <img src="/pic/t2.jpg" alt="" />
              <img src="/pic/index.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="btnval ml-96 p-16 px-80">
          <button>
            <Link to="/collection">All Product</Link>
          </button>
        </div>

        <div className="res">
          <h1>Development Resources</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            aperiam, nulla minus no n quis quo odit!
          </p>
        </div>
        <div className="slides">
          <div className="slide">
            <div className="img">
              <img src="/pic/logo3.png" alt="" srcset="" />
            </div>

            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <div className="btnval ml-24 mt-12" >
          
              <button>
              
                <Link to="/about">About</Link>
              </button>
            </div>
          </div>
          <div className="slide">
            <div className="img">
              <img src="/pic/logo3.png" alt="" srcset="" />
            </div>

            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <div className="btnval ml-24 mt-12">
             
              <button>
             
                <Link to="/about">About</Link>
              </button>
            </div>
          </div>
          <div className="slide">
            <div className="img">
              <img src="/pic/logo3.png" alt="" srcset="" />
            </div>

            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <div className="btnval  ml-24 mt-12">
              
              <button>
                
                <Link to="/about">About</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
