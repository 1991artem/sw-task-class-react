import React from 'react';
import { DataFilter } from '../DataFilter';
import { ErrorPage } from '../ErrorPage';
import { IProduct } from '../interfaces';
import ProductCardInfo from "./ProductCardInfo";
import ProductImg from './ProductImg';

interface IMainPlaceCard {
    id: string | undefined
}


export default class MainPlaceCard extends React.Component<IMainPlaceCard>{
    render(): React.ReactNode {
        let productItem: IProduct | null = this.props.id ? DataFilter.getProductDataForCard(this.props.id) : null;
        return (
                productItem?<div className="product-card-page-main">
                            <ProductImg product={productItem}/>
                            <ProductCardInfo product={productItem}/>
                        </div> : <ErrorPage/>
        )
    }
}