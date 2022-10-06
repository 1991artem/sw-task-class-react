import React from "react";
import { NavLink } from "react-router-dom";
import { StoreContext } from "../../App";
import { IStorePropsObj } from "../interfaces";

export default class NavBar extends React.Component {
    context!: React.ContextType<typeof StoreContext>
    constructor(props: {} | Readonly<{}>){
        super(props)
        NavBar.contextType = StoreContext
    }
    render(): React.ReactNode {
        const { data }: IStorePropsObj = this.context;
        return (
            <div className="nav">
                <ul>
                    <li className="link">
                        <NavLink to={`${data[0].name}`} className={({isActive})=>
                        isActive || ['/', '/all', '/index', '/home', '/card'].includes(document.location.pathname)?
                        'header-link active': "header-link"}>
                            {data[0].name}
                        </NavLink>
                    </li>
                    <li className="link">
                        <NavLink to={`${data[1].name}`} className="header-link">
                            {data[1].name}
                        </NavLink>
                    </li>
                    <li className="link">
                        <NavLink to={`${data[2].name}`} className="header-link">
                            {data[2].name}
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
