import React from 'react';
import Specials from '../../components/specials/specials.component';
import Categories from '../../components/categories/categories.component';

const Home = (props) => (
    <div className="container">
        <Specials></Specials>
        <Categories></Categories>
    </div>
)

export default Home;