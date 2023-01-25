import React from 'react';
import './Home.css';
import Product from './Product';
import product1 from './img/product01.png';

const SearchFilter = ({ filteredData},) => {

  return (
    <div className='home'>
      <div className='home__container'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt="" className='home__image' />
          <div className="flex__row">
            {filteredData.map((item) => (
              <div className='product'>
              <Product
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              />
              </div>
          ))}
          {filteredData.length === 0 && <div className='not-found-box'><p className="not-found">No results found.</p><div className='not-found-space'></div></div>}
          </div>
        </div>
      </div>
  );
};

export default SearchFilter;