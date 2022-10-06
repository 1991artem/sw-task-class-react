import React from "react";
import Loading from "./Loading";
import Scandiweb from "./Scandiweb";

export default class EndWindow extends React.Component{
    render(){
        return(
            <div className="end-window">
                <div className="dark-body">
                    <Scandiweb />
                    <Loading />
                </div>
            </div>
        )
    }
}