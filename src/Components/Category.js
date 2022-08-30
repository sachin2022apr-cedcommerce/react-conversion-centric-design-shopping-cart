import React from 'react';
import './Category.css';
import { useLocation } from 'react-router-dom';

export default function Category(props) {
    var navigation = useLocation();
    var Category = navigation.state.Category;

    var addToCart = (cartItem) => {

        props.products.map((item, index) => {
            // flag for changing quantity
            var quantityFlag = 0;

            // product already exist in cart array
            if (item.id === cartItem.id) {
                quantityFlag = 0; 
                props.productCart.map((item, index) => {
                    if (item.id === cartItem.id) {
                        quantityFlag = 1;
                        let t = props.productCart;
                        t[index].quantity += 1;
                        props.setProductCart([...t])
                    }
                })
                // product does not exist in cart array push in cart array
                if (quantityFlag === 0) {
                    props.setProductCart([
                        ...props.productCart, {
                            id: item.id,
                            name: item.name,
                            image: item.image,
                            price: item.price,
                            category: item.category,
                            quantity: 1
                        }
                    ])
                }
            }
        })
    }
    return (<>
        <h2 className='heading'>Trending "{Category}"</h2>
        <div className='productPage'>
            {props.products.map((item, index) => {
                return <>
                    {(item.category === Category) ? <div className='product'>
                        <img src={item.image} alt='t2.png' />
                        <h3>{item.name}</h3>
                        <div style={{ gap: "5px", width: "95%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                            <h5>${item.price}</h5> <h4><i class="fa-solid fa-tag"></i> {item.category}</h4>
                        </div>
                        <button onClick={() => addToCart(item)}>Add To Cart</button>
                    </div> : <></>}
                </>
            })}
        </div>
    </>
    )
}
