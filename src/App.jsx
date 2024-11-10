import React, { useEffect } from 'react'
import styled from 'styled-components';
import {  useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import Header from './component/Header';
import { addToCart, emptyCart, removeFromCart } from './redux/action';
import { productList } from './redux/productAction';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
`;
const BodyContainer = styled.div`
  display: flex;
`;
const CartButton = styled.button`  
  background: #000;
  color: #fff;
  width: auto;
  padding: 10px 20px;
  border-radius: 5px;
`;

console.warn('store: ', store);

const product = {
  id: '1',
  name : "test khelna",
  price: 100,
  color: 'red'
}


const App = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state)=>state.productData);
  console.warn('productList', productData);

  useEffect(() => {
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(console.log)
  });

  return(
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <BodyContainer>
        <CartButton onClick={ () => {dispatch(addToCart(product))} }>Add To Cart</CartButton>
        <CartButton onClick={ () => {dispatch(removeFromCart(product))} }>Remove To Cart</CartButton>
        <CartButton onClick={ () => {dispatch(emptyCart(product))} }>Empty Cart</CartButton>
        <CartButton onClick={ () => {dispatch(productList(product))} }>Get Product list</CartButton>
      </BodyContainer>
    </Container>
  )
}

export default App;