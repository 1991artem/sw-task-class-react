import React from 'react';
import { gql } from '@apollo/client';
import { client } from './index';
import { IStorePropsObj, ICart, ICategories} from './component/interfaces';
import Header from './component/header/Header';
import Main from './component/main/Main';
import { ErrorPage } from './component/ErrorPage';
import { DataFilter } from './component/DataFilter';
import EndWindow from './component/EndWindow';

const query = gql`
            query   {
                categories {
                name
                products {
                    id
                    name
                    inStock
                    gallery
                    description
                    category
                    attributes {
                    id
                    name
                    type
                    items {
                        displayValue
                        value
                        id
                    }
                    }
                    prices {
                    currency {
                        label
                        symbol
                    }
                    amount
                    }
                    brand
                }
                }
            }
            `;

export const StoreContext = React.createContext({} as IStorePropsObj);

export default class App extends React.Component {

  data: any;
  state: {
    error: null;
    isLoaded: boolean;
    data: {
      categories: ICategories[];
    };
    currency: string;
  }
  constructor(props: {} | Readonly<{}>){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      data: {
        categories: []
      },
      currency: 'USD'
    }
  }
  componentDidMount() {
    client.query({query})
    .then((result)=> {
      this.setState({
        isLoaded: true,
        data: result.data
      });
    }).catch((error)=>{
      this.setState({
        isLoaded: true,
        error
      });
    });
  }
  render(): React.ReactNode {
    const { error, isLoaded, data, currency } = this.state;
    if (error) {
      return <ErrorPage />;
    } else if (!isLoaded) {
      return <EndWindow />;
    } else {
    const setCurrency = (value: string) => this.setState({
      currency: value
    })
    const cart: ICart[] = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart') as string):[];
    new DataFilter(data.categories)
    const STORE_PROPS_OBJ: IStorePropsObj = {
      currency: [setCurrency, currency],
      cart: cart,
      data: data.categories,
    }
    return (
      <StoreContext.Provider value={STORE_PROPS_OBJ}>
      <div className='wrapper'>
        <Header />
        <Main />
      </div>
      </StoreContext.Provider>
    );
  }
  }
}