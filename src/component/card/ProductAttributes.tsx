import React from 'react';
import { IProductAttributes, IProductAttributesItems} from '../interfaces';


export default class ProductAttributes extends React.Component<IProductAttributes>{
    state: {
        select: string
    }
    constructor(props: IProductAttributes | Readonly<IProductAttributes>){
        super(props)
        this.state = {
            select: this.props.attributes? this.props.attributes.items[0].displayValue:''
        }
    }
    render(): React.ReactNode {
        const {attributes} = this.props;
        const {select} = this.state;
        const attributesHandler = (e: React.MouseEvent) => {
            this.setState({
                select: (e.target as HTMLElement).innerHTML
            })
        }
        return (
            <div className='product-card-main-info-attributes'>
                <h3>{attributes.name}</h3>
                <ul>
                {
                attributes.items.map((item:IProductAttributesItems)=>{
                    return(
                        <li
                        className={item.displayValue === select? 'product-card-main-info-attributes_value choise-active': 'product-card-main-info-attributes_value'}
                        data-value={`${attributes.name};${item.displayValue}`}
                        onClick={attributesHandler}
                        key={Date.now()*Math.random()}>
                        {item.displayValue}
                        </li>
                    )
                })
                }
                </ul>
            </div>
        )
    }

}