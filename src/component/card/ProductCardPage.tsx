import React from "react";
import MainPlaceCard from "./MainPlaceCard"

export default class ProductCardPage extends React.Component{
    render(): React.ReactNode {
        let id= document.location.pathname;
        if(id){
            id = id.split('/:')[1];
        }
            return(
                <div className="product-card">
                    <MainPlaceCard id={id}/>
                </div>
            )
    }
}