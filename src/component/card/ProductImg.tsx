import React from 'react';
import { IProductTransfer } from '../interfaces';


export default class ProductImg extends React.Component<IProductTransfer> {
    state: {
        bigImg: string
    }
    constructor(props: IProductTransfer | Readonly<IProductTransfer>){
        super(props)
        this.state = {
            bigImg: this.props.product.gallery[0]
        }
    }
    render(): React.ReactNode {
        const {bigImg} = this.state;
        const {product} = this.props;
        const imgHandler = (e: React.MouseEvent) => {
            this.setState({
                bigImg: ((e.target as HTMLElement).getAttribute('src') as string)
            })
        }
        return (
            <div className="product-card-img-container">
                <div className="product-card-img-container_mini">
                    {
                        product.gallery.map((img: string) => {
                            return (
                                <div className="product-card_mini-img" key={Date.now() * Math.random()}><img src={img} alt={img} onClick={imgHandler} /></div>
                            )
                        })
                    }
                </div>
                <div className="product-card-page-main_img"><img src={bigImg} alt={product.name} /></div>
            </div>
        )
    }
}
