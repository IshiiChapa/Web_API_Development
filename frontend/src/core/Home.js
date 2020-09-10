import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts('sold').then(data => {
      // if (data.error) {
      //   setError(data.error);
      // } else {
      //   setProductsBySell(data);
      // }
    });
  };

  const loadProductsByArrival = () => {
    getProducts('createdAt').then(data => {
      console.log(data);
      // if (data.error) {
      //   setError(data.error);
      // } else {
      //   setProductsByArrival(data);
      // }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout
      titel='Elegant Esscence'
      description='A brand new online jewellery shopping expirience'
      className='container'
    >
      <Search />
      <h1 className='mb-4'>Elegant Essence</h1>
      <div className='row'>
        {productsByArrival.map((product, i) => (
          <div key={i} className='col-4 mb-3'>
            <Card product={product} />
          </div>
        ))}
      </div>
      <h2 className='mb-4'>Every single piece of Elegant Essence's speaks volumes of the rich
heritage that forms the foundation of this company.</h2>
      <h3 className='mb-4'>Elegant Essence has proven its reliability through 5 decades of serving you. 
Elegant Essence has proven its commitment to giving you not only a piece of jewellery but a beautiful experience to 
cherish throughout your life. Elegant Essence stands by its lifetime’s guarantee by being with you forever.Best Jeweller in Sri Lanka.</h3>

      <div className='row'>
        {/* {productsBySell.map((product, i) => (
          <div key={i} className='col-4 mb-3'>
            <Card product={product} />
          </div>
        ))} */}
      </div>
    </Layout>
  );
};

export default Home;
