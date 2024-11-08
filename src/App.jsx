import React from 'react'
import styled from 'styled-components';
import {  useDispatch } from 'react-redux';
import store from './redux/store';
import { addToCart , removeFromCart , emptyCart } from './redux/action';
import Header from './component/Header';

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
  return(
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <BodyContainer>
        <CartButton onClick={ () => {dispatch(addToCart(product))} }>Add To Cart</CartButton>
        <CartButton onClick={ () => {dispatch(removeFromCart(product))} }>Remove To Cart</CartButton>
        <CartButton onClick={ () => {dispatch(emptyCart(product))} }>Empty Cart</CartButton>
      </BodyContainer>
    </Container>
  )
}

export default App;