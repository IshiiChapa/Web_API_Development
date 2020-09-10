import React, { useState, useEffect } from 'react';
import Layout from './Layout';



    <Layout
      titel='JewelleryLK'
      description='A brand new online jewellery shopping expirience'
      className='container'
    >
      <Search />
      <h2 className='mb-4'>New Collection</h2>
      <div className='row'>
        {productsByArrival.map((product, i) => (
          <div key={i} className='col-4 mb-3'>
            <Card product={product} />
          </div>
        ))}
      </div>
      <h2 className='mb-4'>Best Selling products</h2>
      <h2 className='mb-4'>Best Selling products</h2>

      <div className='row'>
        {/* {productsBySell.map((product, i) => (
          <div key={i} className='col-4 mb-3'>
            <Card product={product} />
          </div>
        ))} */}
      </div>
    </Layout>




