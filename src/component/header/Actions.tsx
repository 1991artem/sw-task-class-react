import React from "react"
import Cart from "./Cart"
import Currency from "./Currency"

export default class Action extends React.Component{
    render(): React.ReactNode {
        return (
            <div className="header-actions">
                <div className="header-actions_empty"></div>
                <div className="header-actions_empty"></div>
                <Currency />
                <Cart />
            </div>
        )
    }
}