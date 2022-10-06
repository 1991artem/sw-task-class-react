import React from "react";
import {ProductCard} from "./ProductCard";
import { ICategories, IProduct } from "../interfaces";
import Title from "./Title";

interface IContainer {
  category: ICategories
}

export class Container extends React.Component <IContainer> {
  render(): React.ReactNode {
    const {name, products} = this.props.category
    return (
      <>
      <Title name={name}></Title>
        <div className="main-container_product">
          {products.map((item: IProduct) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </div>
      </>
    );
  }
}
