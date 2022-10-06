import { ICategories, IProduct, IProductPrice} from './interfaces';

export class DataFilter {
  static data: ICategories[]
  constructor(data: ICategories[]){
    DataFilter.data = data;
  }
    static getProductDataForCard(id:string): IProduct{
      const product = {} as IProduct
      this.data.forEach((category: ICategories) => {
        category.products.forEach((element: IProduct)=>{
          if(element.id === id){
            Object.assign(product, element)
          }
        })
      })
      return product as IProduct;
    }
    static getPrice(currency: string, product: IProduct){
      const productPrice = {
        value: 0,
        symbol: '',
        sectionName: ':('
      }
      product.prices.forEach((price:IProductPrice)=>{
        if(price.currency.label === currency) {
          productPrice.value = price.amount;
          productPrice.symbol = price.currency.symbol;
          productPrice.sectionName = price.__typename as string;
        }
    })
    return productPrice;
    }
}