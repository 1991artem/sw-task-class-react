import React from "react";
import { IProductAttributes, IProductAttributesItems } from "../interfaces"

export default class CartAttributes extends React.Component<IProductAttributes>{
    render(){
        const {attributes, params} = this.props;
        return(
            <div className='product-card-mini-main-info-attributes'>
            <p>{attributes.name}</p>
            <div>
            {
            attributes.items.map((item:IProductAttributesItems)=>{
                let style = {
                    backgroundColor: '',
                    border: '',
                    color: ''
                };
                let className:string[] = ['product-mini-card-main-info-attributes_value'];
                if(attributes.name === 'Color'){
                    style.backgroundColor = item.displayValue.toLocaleLowerCase();
                    style.border = 'solid 3px #cacecb';
                    style.color = item.displayValue.toLocaleLowerCase();
                }
                for(let i = 0; i < params.params.length; i++){
                    if(params?.params[i][1] === item.displayValue) {
                        style.border = 'solid 3px #5ECE7B';
                    };
                }
                return(
                    <div
                    className={className.join(' ')}
                    style={style}
                    key={Date.now()*Math.random()}>
                        <p>{item.displayValue}</p>
                    </div>
                )
            })
            }
            </div>
        </div>
        )
    }
}