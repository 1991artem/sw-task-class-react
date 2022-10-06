import React from 'react';
import {StoreContext} from '../../App';
import { IStorePropsObj } from '../interfaces';

interface ICurrencyValue {
    value: string;
    sign: string
}

export default class Currency extends React.Component{
    context!: React.ContextType<typeof StoreContext>;
    currencyValue: ICurrencyValue[];
    state: {
        currency: string
    }
    constructor(props: {} | Readonly<{}>){
        super(props)
        Currency.contextType = StoreContext;
        this.state = {
            currency: 'USD'
        };
        this.currencyValue = [
            {
                value: 'USD',
                sign: '$'
            },
            {
                value: 'GBP',
                sign: '£'
            },
            {
                value: 'AUD',
                sign: 'A$'
            },
            {
                value: 'JPY',
                sign: '¥'
            },
            {
                value: 'RUB',
                sign: '₽'
            },
        ];
    }
    render(): React.ReactNode {
    const {currency}: IStorePropsObj = this.context;
    const handleClick = (event:React.ChangeEvent):void =>{
        currency[0](((event.target) as HTMLSelectElement).value);
        this.setState({
            currency: (((event.target) as HTMLSelectElement).value)
        })
    }
    return (
        <select className="header-active_currency" onChange={handleClick} value={this.state.currency}>
            {
            this.currencyValue.map(value =>{
                return <option value={value.value} key={Date.now()*Math.random()}>{`${value.sign} ${value.value}`}</option>
            })
            }
        </select>
    )
    }
}