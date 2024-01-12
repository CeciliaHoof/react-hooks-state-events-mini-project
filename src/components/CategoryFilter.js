import React, { useState } from "react";

function CategoryFilter({ categories, onSelect, selectedCategory }){ 
  

  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => 
        (<button
          key={category}
          id={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={onSelect}
          >{category}</button>))}
    </div>
  );
}

export default CategoryFilter;
