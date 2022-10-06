export interface ICategories {
    name: string;
    products: IProduct[];
    __typename: string
}

export interface IProduct {
    attributes: [];
    brand: string;
    category: string;
    description: string;
    gallery: string[]
    id: string;
    inStock: boolean
    name: string;
    prices: IProductPrice[];
    __typename?: string;
}

export interface IProductPrice {
    amount: number;
    __typename?: string;
    currency: {
        label: string;
        symbol: string
    }
}

export interface IProductForMain {
    name: string,
    img: string,
    id: string,
    price: IPrice
}
export interface IPrice {
    value: number
    label: string;
    symbol: string
}

export interface IAttributes{
        id: string;
        items: IProductAttributesItems[];
        name: string;
        type: string;
        __typename: string;
}

export interface IProductAttributes{
    attributes: IAttributes;
    params: ICart
}

export interface IProductAttributesItems {
    displayValue: string;
    id: string;
    value: string;
}
export interface IProductPriceItem {
    price: IProductPrice[];
    currency:string;
}
export interface IProductTransfer {
    product: IProduct
}

export interface ICart {
    id: string;
    count: number;
    price: number;
    params: Array<string>[];
}

export interface IStorePropsObj {
    currency: [
        (currency: string)=> void,
        string
    ];
    cart: ICart[];
    data: ICategories[];
}