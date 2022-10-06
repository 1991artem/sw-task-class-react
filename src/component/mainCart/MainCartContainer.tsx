import React from "react";
import { ICart } from '../interfaces';
import { StoreContext } from "../../App";
import CartItem from "../cart/CartItem";
import EndWindow from '../EndWindow';

export class MainCartContainer extends React.Component{
    context!: React.ContextType<typeof StoreContext>
    state: {
        state: boolean;
        reload:boolean;
    }
    constructor(props: {} | Readonly<{}>){
        super(props)
        MainCartContainer.contextType = StoreContext;
        this.state = {
            state: true,
            reload:false
        }
    }

    render(){
        const {cart, currency} = this.context;
        const {state} = this.state;
        let totalPrice = 0;
        let quantity = 0;
        cart.forEach((item: ICart)=>{
            totalPrice += item.price * item.count;
            quantity += item.count;
        })
        const reload = () => {
            this.setState({
                reload: !reload
            })
        }
        const endOrder = () => {
            cart.length = 0;
            localStorage.removeItem('cart');
            this.setState({
                state: !state
            })
            setTimeout(()=>{window.location.reload()},1500);
        }
        return(
            <>{state?
                <div className="cart">
                    <div className="cart-title">
                        <h6>{`CART`}</h6>
                    </div>
                {
                    cart.map((item, index) => {
                        return (
                            <CartItem item={item} index={index} reload={reload} key={Date.now()*Math.random()}/>
                        )
                    })
                }
                <div className="cart-price-discr">
                <div className="mini-cart-total-price"><p>Tax 21%</p><h3>{`${Math.floor(totalPrice*100*0.21)/100} ${currency[1]}`}</h3></div>
                <div className="mini-cart-total-price"><p>Quantity</p><h3>{`${quantity}`}</h3></div>
                <div className="mini-cart-total-price"><p>Total</p><h3>{`${Math.floor(totalPrice*100)/100} ${currency[1]}`}</h3></div>
                    <div className="main-cart-btn">
                        <button className="cart-btn-order" onClick={endOrder}>ERASE ALL</button>
                    </div>
                </div>
                </div>
                : <EndWindow />
            }
            </>
        )
    }
}