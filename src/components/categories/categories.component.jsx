import React, {Component} from 'react';
import Category from '../category/category.component';
import { Query } from 'react-apollo';
import PRODUCTS_QUERY from '../category-list/index';



class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categores: []
          };
    }

    render() {
        return (
            <Query query={PRODUCTS_QUERY}>
             {({ loading, error, data }) => {
      
                if (loading) return <div>Fetching</div>
                if (error)   return <div>Error</div>
      
                const items = data.categoriesList.items;
                return (
                  <div>
                    <div>
                      <div className="row">
                         {items.map(item => <Category key={item.id} product={item} addItem={this.addItem} />)}
                      </div>
                    </div>
                  </div>
                )
              }}
            </Query>
          );
    }
    
};

export default Categories;