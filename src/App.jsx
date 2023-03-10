import { useState } from 'react'
import { NavBar } from './components/Navbar';
import { CartWidget } from './components/CartWidget';

function App() {
    
    const[allProducts, setAllProducts] = useState([]);
    const[total, setTotal] = useState(0);
    const[countProducts, setCountProducts] = useState(0);

  return(
    <>
    <NavBar
     allProducts={allProducts}
     setAllProducts={setAllProducts}
     total={total}
     setTotal={setTotal}
     countProducts={countProducts}
     setCountProducts={setCountProducts}
    />
    <CartWidget
     allProducts={allProducts}
     setAllProducts={setAllProducts}
     total={total}
     setTotal={setTotal}
     countProducts={countProducts}
     setCountProducts={setCountProducts}   
    />
    </>
  );
}

export default App
