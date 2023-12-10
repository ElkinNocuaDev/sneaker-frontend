import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import PriceInfo from '../components/PriceInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState('ProductList');

  const handleMenuClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-toggle="collapse"
          data-target="#sidebar"
          aria-controls="sidebar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand col-sm-3 col-md-2 mr-0 center-title" href="#">
          Sneaker Store
        </a>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-md-block bg-light sidebar collapse" id="sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className={`nav-item ${selectedOption === 'ProductList' ? 'active' : ''}`}>
                  <a className="nav-link" href="#" onClick={() => handleMenuClick('ProductList')}>
                    Product in Stock
                  </a>
                </li>
                <li className={`nav-item ${selectedOption === 'PriceInfo' ? 'active' : ''}`}>
                  <a className="nav-link" href="#" onClick={() => handleMenuClick('PriceInfo')}>
                    Price Info User
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2 className="h4">Dashboard</h2>
            </div>

            {selectedOption === 'ProductList' && (
              <div className="row">
                <div className="col-md-12">
                  <ProductList />
                </div>
              </div>
            )}

            {selectedOption === 'PriceInfo' && (
              <div className="row">
                <div className="col-md-12">
                  <PriceInfo user_id="user3" nombre_producto="Classic" />
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="footer mt-auto py-3 bg-dark text-light fixed-bottom">
        <div className="container text-center">
          <span className="text-light">Sneaker Store © 2023</span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
