import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { addToCart, calculatePrice,  } from "../redux/CartSlice";
function Collection() {
  
 
  const img1="/pic/logo3.png"
  const productList=[
    {
      name:"mack",
      price:144000,
      imgsrc:img1,
      id:"eehhuiefan1e1uibngnndgdgd"
    },
    {
      name:"mack",
      price:144000,
      imgsrc:img1,
      id:"ehmhmhvbuehhuiefai1uibd"
    },
    {
      name:"mack",
      price:144000,
      imgsrc:img1,
      id:"kmlmhf1uibd"
    },
    {
      name:"mack",
      price:144000,
      imgsrc:img1,
      id:"enffaeaebd"
    },
    {
      name:"mack",
      price:144000,
      imgsrc:img1,
      id:"en11ufeead"
    },
    {
      name:"mack",
      price:144000,
      imgsrc:img1,
      id:"en1ehhuied"
    },
    {
      name:"mack",
      price:144000,
      imgsrc:img1,
      id:"enufeead"
    },
    {
      name:"mack",
      price:144000,
      imgsrc:img1,
      id:"enefa1ufeead"
    },
    {
      name:"mack",
      price:144000,
      imgsrc:img1,
      id:"fa1ufeead"
    },
    {
      name:"mack",
      price:144000,
      imgsrc:img1,
      id:"en1eeead"
    },
    {
      name:"mack",
      price:144000,
      imgsrc:img1,
      id:"iefa1ufeead"
    },
    {
      name:"mack",
      price:144000,
      imgsrc:img1,
      id:"en1ehead"
    },
  ]
  const ProductCard=({name,id,price,handler,imgsrc})=>(
    <div className="productCard">
      <img src={imgsrc} alt={name} />
      <p>{name}</p>
      <h4>{price}$</h4>
      <div className="btnval h-12  bg-white">
      <button onClick={()=>handler({name,price,id,imgsrc,quantity:1})} > <Link>Add</Link></button>
      </div>
    </div>
  )
  const dispatch= useDispatch()
  const addToCartHandler=(options)=> {
    dispatch(addToCart(options))
    dispatch(calculatePrice())
     toast.success("Added To Cart");
     console.log(options)

    
  }


  return (
    <> 
    <div className=" flex p-12 flex-wrap content-center">
      {
        productList.map((i)=>(
          <ProductCard key={i.id}
          imgsrc={i.imgsrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}/>
        ))
      }
      
    </div>
   
     
    </>

  );
}

export default Collection;
