import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
import { getPurchaseHistory } from './apiUser';
import moment from 'moment';

const Dashboard = () => {
  const [history, setHistory] = useState([]);

  const {
    user: { _id, name, email, role }
  } = isAuthenticated();
  const token = isAuthenticated().token;

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setHistory(data);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
  }, []);

  const userLinks = () => {
    return (
      <div className='card'>
        <h4 className='card-header'><i class="fa fa-tachometer" aria-hidden="true"></i> User Dashboard</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link className='nav-link text-dark' to='/cart'>
              <i class='fa fa-shopping-cart' aria-hidden='true'></i> My Cart
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link text-dark' to={`/profile/${_id}`}>
              <i class='fa fa-user' aria-hidden='true'></i> Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <div className='card'>
        <h3 className='card-header'><i class="fa fa-users" aria-hidden="true"></i> User Information</h3>
        <ul className='list-group'>
          <li className='list-group-item'><i class="fa fa-user-o" aria-hidden="true"></i> {name}</li>
          <li className='list-group-item'><i class="fa fa-envelope-o" aria-hidden="true"></i> {email}</li>
          <li className='list-group-item'><i class="fa fa-user-secret" aria-hidden="true"></i> {' '}
            {role === 1 ? 'Admin' : 'Registered User'}
          </li>
        </ul>
      </div>
      
    );
  };

  const purchaseHistory = history => {
    return (
      
      <div className='card Purchasehistorystyle'>
        <h3 className='card-header'><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Purchase history</h3>
        <ul className='list-group'>
          <li className='list-group-item'>
            {history.map((h, i) => {
              return (
                <div>
                  <hr />
                  {h.products.map((p, i) => {
                    return (
                      <div key={i}>
                        <h6>Product name: {p.name}</h6>
                        <h6>Product price: ${p.price}</h6>
                        <h6>Purchased date: {moment(p.createdAt).fromNow()}</h6>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      titel='Elegant Essence'
      description={`Dashboard`}
      className='container'
    >
      <div className='row'>
        <div className='col-3'>{userLinks()}</div>
        <div className='col-9'>
          {userInfo()}
          {purchaseHistory(history)}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
