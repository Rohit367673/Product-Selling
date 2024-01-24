import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useSelector ,useDispatch } from 'react-redux'
import { addToCart, calculatePrice, decrement, deleteCart } from '../redux/CartSlice'



function Cart() {
  
const dispatch= useDispatch()
  const incrementHandler=(id)=>{
    dispatch(
     addToCart({ id })
    )
    dispatch(calculatePrice())
  
  }
  const decrementHandler=(id)=>{
    dispatch(decrement({id}))
 
    dispatch(calculatePrice())
  }
  const deleteHandler=(id)=>{
    dispatch(deleteCart(id))
    dispatch(calculatePrice())
  }

const {subTotal,Total,shipping}=useSelector((state)=>state.cart)
  const Item=useSelector((state)=>state.cart.cartItems)


  const CartItem =({imgsrc,name,id,qty,price,deleteHandler,increment,decrement})=>(
    <div className="cartItem">
      <img src={imgsrc} alt={name} />
      <article>
        <h3>{name}</h3>
        <p className="ml-2">{price}$</p>
      </article>
      <div>
        <button onClick={()=>decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={()=>increment(id)}>+</button>
      </div>
      <AiFillDelete onClick={()=>deleteHandler(id)}/>
    </div>
  )
  return (
    <div className="cart">
      <main>
 {
  

 Item.length>0 ?(
    Item.map((i)=>( 
      <CartItem key={i.id}
      imgsrc={i.imgsrc}
      name={i.name}
      price={i.price}
      qty={i.quantity}
      id={i.id}
      
      decrement={decrementHandler}
      increment={incrementHandler}
      deleteHandler={deleteHandler}
    
    /> 
    ))
 ):( <h1>No Item</h1> )
  
 }
 
 
   
  
      </main>
      <aside>
        <h2>SubTotal:{subTotal}$</h2>
        <h2>Shipping:{shipping}$</h2>
        <h2>Total:{Total}$</h2>

      </aside>
     
    </div>
  )
}

export default Cart
