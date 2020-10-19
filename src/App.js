import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Category from './components/category/category.component';
import { Query } from 'react-apollo';
import PRODUCTS_QUERY from './components/category-list/index'

function App() {
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

export default App;
