import React from 'react';
import { ItemListContainer } from '../ItemListContainer';

export const CartWidget = ({allProducts, setAllProducts}) => {
  const onAddProduct = () => {
    console.log('add')
  }
  
    return ( 
        <div className="container-items">
		  {ItemListContainer.map(product => (
                <div className="item" key={product.id}>
				<figure>
					<img
						src={product.img} alt={product.nameProduct}/>
				</figure>
				<div className="info-product">
					<h2>{product.nameProduct}</h2>
					<p className="price">${product.price}</p>
					<button onClick={()=> onAddProduct()}>Añadir al carrito</button>
				</div>
                </div>
                 
            ))}	
            
		</div>
    );
      
};