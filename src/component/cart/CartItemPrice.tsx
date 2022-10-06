import React from 'react';
import { IProductPrice, IProduct } from '../interfaces';
import { StoreContext } from '../../App';

interface ICartItemInfo {
    product: IProduct
}
export default class CartItemPrice extends React.Component<ICartItemInfo>{
    context!: React.ContextType<typeof StoreContext>
    constructor(props: ICartItemInfo | Readonly<ICartItemInfo>){
        super(props)
        CartItemPrice.contextType = StoreContext;
    }
    render(): React.ReactNode {
        const { currency } = this.context;
        const { product } = this.props;
        let sectionName: string = '';
        let itemPrice: string = ':(';
        product.prices.forEach((price:IProductPrice)=>{
            if(price.currency.label === currency[1]) {
                itemPrice = `${price.amount} ${price.currency.symbol}`;
                sectionName = price.__typename as string;
            }
        })
        return(
            <>
                <p>{sectionName}</p>
                <h4>{itemPrice}</h4>
            </>
        )
    }

}