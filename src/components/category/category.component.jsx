import React from 'react';

const Category = ({item: {title}}) => {
    return(
    <div className="col-sm">
       <h2>{title}</h2>
    </div>
    );
}

export default Category;