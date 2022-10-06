import React from 'react';
import { IStorePropsObj, IProductTransfer } from '../interfaces';
import { StoreContext } from '../../App';
import { DataFilter } from '../DataFilter';

export default class ProductPrice extends React.Component<IProductTransfer>{
    context!: React.ContextType<typeof StoreContext>
    constructor(props: IProductTransfer | Readonly<IProductTransfer>){
        super(props)
        ProductPrice.contextType = StoreContext;
    }
    render(): React.ReactNode {
        const {product} = this.props;
        const {currency}: IStorePropsObj = this.context;
        let price = DataFilter.getPrice(currency[1], product)
        return(
            <div className="product-card-main-info-price">
                <h3>{price.sectionName}</h3>
                <p>{`${price.value} ${price.symbol}`}</p>
            </div>
        )
    }

}