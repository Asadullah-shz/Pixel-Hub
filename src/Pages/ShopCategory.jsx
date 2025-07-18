import React, { useState, useContext, useEffect } from 'react';
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import SearchFilter from '../Components/SearchFilter/SearchFilter';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(all_product);
  

  useEffect(() => {
    const filtered = all_product.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      const matchesPrice =
        priceRange === '' ||
        (priceRange === 'low' && product.new_price < 50) ||
        (priceRange === 'medium' && product.new_price >= 50 && product.new_price <= 100) ||
        (priceRange === 'high' && product.new_price > 100);
      return matchesSearch && matchesCategory && matchesPrice;
    });

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, priceRange, all_product]);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 Products
        </p>
        {}
      </div>

      <SearchFilter 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        priceRange={priceRange} 
        setPriceRange={setPriceRange} 
      />

      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
