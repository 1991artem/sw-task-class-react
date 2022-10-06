import React from 'react';
import { StoreContext } from '../../App';
import { ICart } from '../interfaces';

interface ICartCounter {
    item: ICart;
    index: number;
    reload: ()=>void;
}

export default class CartCounter extends React.Component<ICartCounter>{
    context!: React.ContextType<typeof StoreContext>;
    state: {
        counter: number;
    }
    constructor(props: ICartCounter | Readonly<ICartCounter>){
        super(props);
        CartCounter.contextType = StoreContext;
        this.state = {
            counter: 0
        }
    }
    render(): React.ReactNode {
        const {cart} = this.context;
        const {index, item, reload} = this.props;
        const counterInc = () => {
            cart[index].count++;
            reload();
            this.setState({
                counter: cart[index].count
            })

        }
        const counterDec = () => {
            if(cart[index].count > 0){
                cart[index].count--;
                reload();
                this.setState({
                    counter: cart[index].count
                })
            }
        }
        return (
            <div className="cart-counter">
                <div className="cart-count-btn" onClick={counterInc}><p>+</p></div>
                <div className="cart-counter-count"><p>{item.count}</p></div>
                <div className="cart-count-btn" onClick={counterDec}><p>-</p></div>
            </div>
        )
    }

}