import React from "react";
import { Routes, Route } from "react-router-dom";
import {Container} from "./Container"
import { StoreContext } from "../../App";
import { IStorePropsObj } from "../interfaces";
import { ErrorPage } from "../ErrorPage";
import ProductCardPage from "../card/ProductCardPage";
import { MainCartContainer } from "../mainCart/MainCartContainer";

export default class Main extends React.Component{
    context!: React.ContextType<typeof StoreContext>
    constructor(props: {} | Readonly<{}>){
        super(props)
        Main.contextType = StoreContext;
    }
    render(){
    const { data }:IStorePropsObj = this.context;
    return (
        <div className="main">
                <Routes>
                    {
                        ['/', '/all', '/index', '/home', '/card'].map((path:string, index:number)=>
                        <Route path={path} element={<Container category={data[0]}/>} key={index}></Route>)
                    }
                    <Route path="clothes" element={<Container category={data[1]}/>}></Route>
                    <Route path="tech" element={<Container category={data[2]}/>}></Route>
                    <Route path="cart" element={<MainCartContainer />}></Route>
                    <Route path={`card/:id`} element={<ProductCardPage />}></Route>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
        </div>
    )
    }
}