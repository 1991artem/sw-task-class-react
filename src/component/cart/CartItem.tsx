import React from 'react';
import { ICart } from '../interfaces';
import CartItemInfo from './CartItemInfo';
import CartCounter from './CartCounter';
import CartImg from './CartImg';
import { DataFilter } from '../DataFilter';

interface ICartItem {
    item: ICart;
    index: number;
    reload: ()=>void
}
export default class CartItem extends React.Component<ICartItem>{
    render(): React.ReactNode {
        const {item, index, reload} = this.props
        let product = DataFilter.getProductDataForCard(item.id)
        return(
            <div className='mini-cart-item'>
                <CartItemInfo product={product} params={item}/>
                <CartCounter item={item} index={index} reload={reload}/>
                <CartImg img={product.gallery}/>
            </div>
        )
    }

}