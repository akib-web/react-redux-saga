import React, { useEffect } from 'react'
import styled from 'styled-components';
import {  useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import Header from './component/Header';
import { addToCart, emptyCart, removeFromCart } from './redux/action';
import { productList } from './redux/productAction';
import FancyText from './component/FancyText';
import './App.css'

const Container = styled.div`
  // width: 100vw;
  // height: 100vh;
  padding: 0 10px;
`;
const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
`;
const BodyContainer = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  margin-top: 10px;
`;
const CartButton = styled.button`  
  background: #000;
  color: #fff;
  width: auto;
  padding: 10px 20px;
  border-radius: 5px;
`;

console.warn('store: ', store);

const App = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state)=>state.productData.products);
  console.warn('productList', productData);

  const getData = async () => {
    let data = await fetch('https://dummyjson.com/products')
    data = await data.json()
    console.log(data)
};

  useEffect(()=>{
    dispatch(productList())
  },[])

  return(
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
        {/* <FancyText /> */}
      <BodyContainer>
        {/* <CartButton onClick={ () => {dispatch(addToCart(product))} }>Add To Cart</CartButton>
        <CartButton onClick={ () => {dispatch(removeFromCart(product))} }>Remove To Cart</CartButton>
        <CartButton onClick={ () => {dispatch(emptyCart(product))} }>Empty Cart</CartButton>
        <CartButton onClick={ () => {dispatch(productList(product))} }>Get Product list</CartButton>
        <CartButton onClick={ () => {getData()} }>fetch Products</CartButton> */}

        <div className='product-container'>
          {
          productData.map((item,index)=>
            <div className='product-item'>
              {/* {console.log(item)} */}
              <div className='product-thumb'>
                <img src={item.thumbnail} alt="" />
              </div>
              <div className='product-detail'>
                <div>Name : {item.title} </div>
                <div>Price : {item.price} </div>
                <div>Category : {item.category} </div>
                <div>Brand : {item.brand} </div>
                <div>
                  <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Remove to Cart</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </BodyContainer>
    </Container>
  )
}

export default App;