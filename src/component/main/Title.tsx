import React from 'react'

interface ITitle {
    name: string
}

export default class Title extends React.Component <ITitle>{
    render(): React.ReactNode {
        return (
            <div className="main-title">
                <p>{`Category ${this.props.name}`}</p>
            </div>
        )
    }

}