import React, { useState, useEffect } from 'react';
import Layout from './Layout';

    <Layout
      titel='Shop Page'
      description='Search and Find the Juwelary of Your Choices '
      className='container-fluid'
    >
      <div className='row' style={{display: "flex", justifyContent: "center",lignItems: "center"}} >
        {/* <div className='col-3 border-info border-right'>
          <h4 className='text-muted'>Filter by categories</h4>
          <hr />
          <ul>
            <Checkbox
              categories={categories}
              handleFilters={filters => handleFilters(filters, 'category')}
            />
          </ul>
          <hr />

          <h4 className='text-muted'>Filter by price range</h4>
          <hr />
          <div>
            <RadioBox
              prices={prices}
              handleFilters={filters => handleFilters(filters, 'price')}
            />
          </div>
        </div> */}
        <div className='col-9'>
          <h2 className='mb-4'>Products</h2>
          <div className='row'>
            {filteredResults.map((product, i) => (
              <div key={i} className='col-4 mb-3'>
                <Card product={product} />
              </div>
            ))}
          </div>
          <hr />
          {loadMoreButton()}
        </div>
      </div>
    </Layout>
  );

