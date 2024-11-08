import React from 'react';
import { useSelector } from 'react-redux';

const EcommerceHeader = () => {
  const result = useSelector((state)=>state.cartData);

  console.warn('result: ', result);

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src="../src/assets/react.svg" alt="E-Commerce Logo" style={styles.logoImage} />
        <h1 style={styles.title}>E-Commerce</h1>
      </div>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="/shop" style={styles.navLink}>Shop</a></li>
          <li style={styles.navItem}><a href="/cart" style={styles.navLink}>Cart</a></li>
          <li style={styles.navItem}><a href="/account" style={styles.navLink}>Account</a></li>
        </ul>
      </nav>
      <div style={styles.cart}>
        <a href="/cart" style={styles.cartLink}>
          <img src="../src/assets/cart1-1.png" alt="Cart" style={styles.cartIcon} />
          <span style={styles.cartCount}>{result.length??0}</span>
        </a>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '1rem',
    color: 'white'
  },
  logo: {
    display: 'flex',
    alignItems: 'center'
  },
  logoImage: {
    height: '40px',
    marginRight: '1rem'
  },
  title: {
    fontSize: '1.5rem',
    margin: 0
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  navItem: {
    marginLeft: '1rem'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none'
  },
  cart: {
    position: 'relative',
  },
  cartLink: {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  cartIcon: {
    height: '30px',
  },
  cartCount: {
    backgroundColor: 'red',
    borderRadius: '50%',
    color: 'white',
    padding: '0.2rem 0.5rem',
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    fontSize: '0.8rem'
  }
};

export default EcommerceHeader;
