import React from 'react';
import Category from '../category/category.component';
import { Query } from 'react-apollo';
import PRODUCTS_QUERY from '../category-list/index';



const Categories = () =>  {
  return (
      <Query query={PRODUCTS_QUERY}>
        {({ loading, error, data }) => {

          if (loading) return <div>Fetching</div>
          if (error)   return <div>Errorr</div>

          const items = data.categoriesList.items;
         
          return (
            <div>
              <div>
                <div className="row">
                    {items.map(item => <Category key={item.id} item={item} />)}
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    );
};

export default Categories;