import React from "react";
import Action from "./Actions";
import Logo from "./Logo";
import NavBar from "./NavBar";


export default class Header extends React.Component{
    render(): React.ReactNode {
        return (
            <div className='header'>
                <NavBar />
                <Logo />
                <Action />
            </div>
        );
    }
    }
