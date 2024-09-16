'use client';
import React, { useState } from 'react';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    console.log('first');
    setSidebar(!sidebar);
    if (sidebar) {
      // Function to remove the data-toggled attribute from the <html> tag
      //  function removeDataToggled() {
      document.documentElement.removeAttribute('data-toggled');
      console.log('Removed: data-toggled');
      //  }
    } else {
      document.documentElement.setAttribute(
        'data-toggled',
        'icon-overlay-close',
      );
      console.log('Added: data-toggled="icon-overlay-close"');
    }
  };
  return (
    <>
      {/* <!-- app-header --> */}
      <header className='app-header'>
        {/* <!-- Start::main-header-container --> */}
        <div className='main-header-container container-fluid'>
          {/* <!-- Start::header-content-left --> */}
          <div className='header-content-left'>
            {/* <!-- Start::header-element --> */}
            <div className='header-element'>
              <div className='horizontal-logo'>
                <a href='index.html' className='header-logo'>
                  <img
                    src='/assets/images/brand-logos/desktop-logo.png'
                    alt='logo'
                    className='desktop-logo'
                  />
                  <img
                    src='/assets/images/brand-logos/toggle-logo.png'
                    alt='logo'
                    className='toggle-logo'
                  />
                  <img
                    src='/assets/images/brand-logos/desktop-dark.png'
                    alt='logo'
                    className='desktop-dark'
                  />
                  <img
                    src='/assets/images/brand-logos/toggle-dark.png'
                    alt='logo'
                    className='toggle-dark'
                  />
                  <img
                    src='/assets/images/brand-logos/desktop-white.png'
                    alt='logo'
                    className='desktop-white'
                  />
                  <img
                    src='/assets/images/brand-logos/toggle-white.png'
                    alt='logo'
                    className='toggle-white'
                  />
                </a>
              </div>
            </div>
            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}
            <div className='header-element'>
              {/* <!-- Start::header-link --> */}
              <span
                onClick={() => console.log('first')}
                aria-label='Hide Sidebar'
                className='sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle'
              >
                <span></span>
              </span>
              {/* <!-- End::header-link --> */}
            </div>
            {/* <!-- End::header-element --> */}

            <div className='main-header-center ms-3 my-auto d-none d-xl-block'>
              <input
                type='search'
                className='form-control'
                placeholder='Search...'
              />
              <button className='btn'>
                <i className='ti ti-search'></i>
              </button>
            </div>
          </div>
          {/* <!-- End::header-content-left --> */}

          {/* <!-- Start::header-content-right --> */}
          <div className='header-content-right'>
            {/* <!-- Start::header-element --> */}
            <div className='header-element country-selector'>
              {/* <!-- Start::header-link|dropdown-toggle --> */}
              <a
                href='javascript:void(0);'
                className='header-link dropdown-toggle'
                data-bs-auto-close='outside'
                data-bs-toggle='dropdown'
              >
                <img
                  src='/assets/images/flags/us_flag.jpg'
                  alt='img'
                  className='rounded-circle header-link-icon'
                />
              </a>
              {/* <!-- End::header-link|dropdown-toggle --> */}
              <ul
                className='main-header-dropdown dropdown-menu dropdown-menu-end'
                data-popper-placement='none'
              >
                <li>
                  <a
                    className='dropdown-item d-flex align-items-center'
                    href='javascript:void(0);'
                  >
                    <span className='avatar avatar-xs lh-1 me-2'>
                      <img src='/assets/images/flags/us_flag.jpg' alt='img' />
                    </span>
                    English
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item d-flex align-items-center'
                    href='javascript:void(0);'
                  >
                    <span className='avatar avatar-xs lh-1 me-2'>
                      <img
                        src='/assets/images/flags/spain_flag.jpg'
                        alt='img'
                      />
                    </span>
                    Spanish
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item d-flex align-items-center'
                    href='javascript:void(0);'
                  >
                    <span className='avatar avatar-xs lh-1 me-2'>
                      <img
                        src='/assets/images/flags/french_flag.jpg'
                        alt='img'
                      />
                    </span>
                    French
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item d-flex align-items-center'
                    href='javascript:void(0);'
                  >
                    <span className='avatar avatar-xs lh-1 me-2'>
                      <img
                        src='/assets/images/flags/germany_flag.jpg'
                        alt='img'
                      />
                    </span>
                    German
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item d-flex align-items-center'
                    href='javascript:void(0);'
                  >
                    <span className='avatar avatar-xs lh-1 me-2'>
                      <img
                        src='/assets/images/flags/italy_flag.jpg'
                        alt='img'
                      />
                    </span>
                    Italian
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item d-flex align-items-center'
                    href='javascript:void(0);'
                  >
                    <span className='avatar avatar-xs lh-1 me-2'>
                      <img
                        src='/assets/images/flags/russia_flag.jpg'
                        alt='img'
                      />
                    </span>
                    Russian
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}
            <div className='header-element header-theme-mode'>
              {/* <!-- Start::header-link|layout-setting --> */}
              <a
                href='javascript:void(0);'
                className='header-link layout-setting'
              >
                <span className='light-layout lh-1'>
                  {/* <!-- Start::header-link-icon --> */}
                  <i className='fe fe-moon header-link-icon'></i>
                  {/* <!-- End::header-link-icon --> */}
                </span>
                <span className='dark-layout lh-1'>
                  {/* <!-- Start::header-link-icon --> */}
                  <i className='fe fe-sun header-link-icon'></i>
                  {/* <!-- End::header-link-icon --> */}
                </span>
              </a>
              {/* <!-- End::header-link|layout-setting --> */}
            </div>
            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}
            <div className='header-element cart-dropdown'>
              {/* <!-- Start::header-link|dropdown-toggle --> */}
              <a
                href='javascript:void(0);'
                className='header-link dropdown-toggle'
                data-bs-auto-close='outside'
                data-bs-toggle='dropdown'
              >
                <i className='fe fe-shopping-cart header-link-icon'></i>
                <span
                  className='badge bg-primary rounded-pill header-icon-badge'
                  id='cart-icon-badge'
                >
                  5
                </span>
              </a>
              {/* <!-- End::header-link|dropdown-toggle --> */}
              {/* <!-- Start::main-header-dropdown --> */}
              <div
                className='main-header-dropdown dropdown-menu dropdown-menu-end border-0 dropdown-menu-arrow'
                data-popper-placement='none'
              >
                <div className='p-3 menu-header-content text-fixed-white rounded-top'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <p className='mb-0 fs-17 fw-semibold'>Shopping cart</p>
                    <span className='badge bg-success' id='cart-data'>
                      5 Items
                    </span>
                  </div>
                </div>
                <div>
                  <hr className='dropdown-divider' />
                </div>
                <ul
                  className='list-unstyled mb-0'
                  id='header-cart-items-scroll'
                >
                  <li className='dropdown-item'>
                    <div className='d-flex align-items-start cart-dropdown-item'>
                      <img
                        src='/assets/images/ecommerce/cart/1.jpg'
                        alt='img'
                        className='avatar avatar-md rounded-3 me-3'
                      />
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-start justify-content-between mb-0'>
                          <div className='mb-0 fs-14 text-dark fw-semibold'>
                            <a href='product-cart.html'>Wall Photo Frame</a>
                          </div>
                          <div>
                            <a
                              href='javascript:void(0);'
                              className='header-cart-remove float-end dropdown-item-close'
                            >
                              <i className='bi bi-trash3'></i>
                            </a>
                          </div>
                        </div>
                        <div className='min-w-fit-content d-flex align-items-start justify-content-between'>
                          <ul className='header-product-item d-flex'>
                            <li>Quantity: 2</li>
                            <li>Price: $921</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='dropdown-item'>
                    <div className='d-flex align-items-start cart-dropdown-item'>
                      <img
                        src='/assets/images/ecommerce/cart/3.jpg'
                        alt='img'
                        className='avatar avatar-md rounded-3 me-3'
                      />
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-start justify-content-between mb-0'>
                          <div className='mb-0 fs-14 text-dark fw-semibold'>
                            <a href='product-cart.html'>Designed Chair</a>
                          </div>
                          <div>
                            <a
                              href='javascript:void(0);'
                              className='header-cart-remove float-end dropdown-item-close'
                            >
                              <i className='bi bi-trash3'></i>
                            </a>
                          </div>
                        </div>
                        <div className='min-w-fit-content d-flex align-items-start justify-content-between'>
                          <div className='min-w-fit-content d-flex align-items-start justify-content-between'>
                            <ul className='header-product-item d-flex'>
                              <li>Quantity: 1</li>
                              <li>Price: $770</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='dropdown-item'>
                    <div className='d-flex align-items-start cart-dropdown-item'>
                      <img
                        src='/assets/images/ecommerce/cart/5.jpg'
                        alt='img'
                        className='avatar avatar-md rounded-3 me-3'
                      />
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-start justify-content-between mb-0'>
                          <div className='mb-0 fs-14 text-dark fw-semibold'>
                            <a href='product-cart.html'>Loot Headphones</a>
                          </div>
                          <div>
                            <a
                              href='javascript:void(0);'
                              className='header-cart-remove float-end dropdown-item-close'
                            >
                              <i className='bi bi-trash3'></i>
                            </a>
                          </div>
                        </div>
                        <div className='min-w-fit-content d-flex align-items-start justify-content-between'>
                          <div className='header-product-item d-flex'>
                            <div className='min-w-fit-content d-flex align-items-start justify-content-between'>
                              <ul className='header-product-item d-flex'>
                                <li>Quantity: 2</li>
                                <li>Price: $290.02</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='dropdown-item'>
                    <div className='d-flex align-items-start cart-dropdown-item'>
                      <img
                        src='/assets/images/ecommerce/cart/4.jpg'
                        alt='img'
                        className='avatar avatar-md rounded-3 me-3'
                      />
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-start justify-content-between mb-0'>
                          <div className='mb-0 fs-14 text-dark fw-semibold'>
                            <a href='product-cart.html'>Ultra Camera Lens</a>
                          </div>
                          <div>
                            <a
                              href='javascript:void(0);'
                              className='header-cart-remove float-end dropdown-item-close'
                            >
                              <i className='bi bi-trash3'></i>
                            </a>
                          </div>
                        </div>
                        <div className='min-w-fit-content d-flex align-items-start justify-content-between'>
                          <ul className='header-product-item d-flex'>
                            <li>Quantity: 3</li>
                            <li>Price: $250.12</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='dropdown-item'>
                    <div className='d-flex align-items-start cart-dropdown-item'>
                      <img
                        src='/assets/images/ecommerce/cart/6.jpg'
                        alt='img'
                        className='avatar avatar-md rounded-3 me-3'
                      />
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-start justify-content-between mb-0'>
                          <div className='mb-0 fs-14 text-dark fw-semibold'>
                            <a href='product-cart.html'>Stylish Coffee Cup</a>
                          </div>
                          <div>
                            <a
                              href='javascript:void(0);'
                              className='header-cart-remove float-end dropdown-item-close'
                            >
                              <i className='bi bi-trash3'></i>
                            </a>
                          </div>
                        </div>
                        <div className='d-flex align-items-start justify-content-between'>
                          <div className='min-w-fit-content d-flex align-items-start justify-content-between'>
                            <ul className='header-product-item d-flex'>
                              <li>Quantity: 1</li>
                              <li>Price: $80.78</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className='p-2 empty-header-item border-top'>
                  <div className='d-grid'>
                    <a href='checkout.html' className='btn btn-primary'>
                      Proceed to checkout
                    </a>
                  </div>
                </div>
                <div className='p-5 empty-item d-none'>
                  <div className='text-center'>
                    <span className='avatar avatar-xl avatar-rounded bg-warning-transparent'>
                      <i className='ri-shopping-cart-2-line fs-2'></i>
                    </span>
                    <h6 className='fw-bold mb-1 mt-3'>Your Cart is Empty</h6>
                    <span className='mb-3 fw-normal fs-13 d-block'>
                      Add some items to make me happy :
                    </span>
                    <a
                      href='products.html'
                      className='btn btn-primary btn-wave btn-sm m-1'
                      data-abc='true'
                    >
                      continue shopping{' '}
                      <i className='bi bi-arrow-right ms-1'></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End::main-header-dropdown --> */}
            </div>
            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}
            <div className='header-element header-messages-dropdown d-sm-flex d-none'>
              {/* <!-- Start::header-link|dropdown-toggle --> */}
              <a
                href='javascript:void(0);'
                className='header-link dropdown-toggle'
                data-bs-auto-close='outside'
                data-bs-toggle='dropdown'
              >
                <i className='fe fe-mail header-link-icon'></i>
                <span className='pulse-danger'></span>
              </a>
              {/* <!-- End::header-link|dropdown-toggle --> */}
              {/* <!-- Start::main-header-dropdown --> */}
              <div
                className='main-header-dropdown dropdown-menu dropdown-menu-end border-0 dropdown-menu-arrow'
                data-popper-placement='none'
              >
                <div className='p-3 menu-header-content text-fixed-white rounded-top'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <p className='mb-0 fs-17 fw-semibold'>5 New messages</p>
                    <span className='badge bg-warning rounded-pill'>
                      Mark All Read
                    </span>
                  </div>
                </div>
                <div>
                  <hr className='dropdown-divider' />
                </div>
                <ul className='list-unstyled mb-0' id='header-messages-scroll'>
                  <li className='dropdown-item'>
                    <div className='d-flex align-items-start'>
                      <img
                        src='/assets/images/users/3.jpg'
                        alt='img'
                        className='avatar avatar-md rounded-5 me-2'
                      />
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-start justify-content-between mb-0'>
                          <div className='mb-0 fs-14 text-dark'>
                            <a href='mail.html'>Paul Molive</a>
                          </div>
                          <div>
                            <p className='fs-11 mb-0 text-muted'>10 min ago </p>
                          </div>
                        </div>
                        <div className='min-w-fit-content d-flex align-items-start justify-content-between'>
                          <p className='mb-0 fs-12 text-muted'>
                            I'm sorry but i'm not sure how...
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='dropdown-item'>
                    <div className='d-flex align-items-start'>
                      <img
                        src='/assets/images/users/2.jpg'
                        alt='img'
                        className='avatar avatar-md rounded-5 me-2'
                      />
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-start justify-content-between mb-0'>
                          <div className='mb-0 fs-14 text-dark'>
                            <a href='mail.html'>Sahar Dary</a>
                          </div>
                          <div>
                            <p className='fs-11 mb-0 text-muted'>13 min ago </p>
                          </div>
                        </div>
                        <div className='min-w-fit-content d-flex align-items-start justify-content-between'>
                          <p className='mb-0 fs-12 text-muted'>
                            All set ! Now, time to get to you now......{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='dropdown-item'>
                    <div className='d-flex align-items-start'>
                      <img
                        src='/assets/images/users/9.jpg'
                        alt='img'
                        className='avatar avatar-md rounded-5 me-2'
                      />
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-start justify-content-between mb-0'>
                          <div className='mb-0 fs-14 text-dark'>
                            <a href='mail.html'>Khadija Mehr</a>
                          </div>
                          <div>
                            <p className='fs-11 mb-0 text-muted'>20 min ago </p>
                          </div>
                        </div>
                        <div className='min-w-fit-content d-flex align-items-start justify-content-between'>
                          <p className='mb-0 fs-12 text-muted'>
                            Are you ready to pickup your Delivery...{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='dropdown-item'>
                    <div className='d-flex align-items-start'>
                      <img
                        src='/assets/images/users/12.jpg'
                        alt='img'
                        className='avatar avatar-md rounded-5 me-2'
                      />
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-start justify-content-between mb-0'>
                          <div className='mb-0 fs-14 text-dark'>
                            <a href='mail.html'>Barney Cull</a>
                          </div>
                          <div>
                            <p className='fs-11 mb-0 text-muted'>30 min ago </p>
                          </div>
                        </div>
                        <div className='min-w-fit-content d-flex align-items-start justify-content-between'>
                          <p className='mb-0 fs-12 text-muted'>
                            Here are some products ...
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='dropdown-item'>
                    <div className='d-flex align-items-start'>
                      <img
                        src='/assets/images/users/5.jpg'
                        alt='img'
                        className='avatar avatar-md rounded-5 me-2'
                      />
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-start justify-content-between mb-0'>
                          <div className='mb-0 fs-14 text-dark'>
                            <a href='mail.html'>Petey Cruiser</a>
                          </div>
                          <div>
                            <p className='fs-11 mb-0 text-muted'>35 min ago </p>
                          </div>
                        </div>
                        <div className='d-flex align-items-start justify-content-between'>
                          <div className='min-w-fit-content d-flex align-items-start justify-content-between'>
                            <p className='mb-0 fs-12 text-muted'>
                              I'm sorry but i'm not sure how...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className='p-2 empty-header-item border-top bg-primary-transparent'>
                  <div className='d-grid text-center'>
                    <a href='mail.html' className='text-primary'>
                      VIEW ALL
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End::main-header-dropdown --> */}
            </div>
            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}
            <div className='header-element notifications-dropdown'>
              {/* <!-- Start::header-link|dropdown-toggle --> */}
              <a
                href='javascript:void(0);'
                className='header-link dropdown-toggle'
                data-bs-toggle='dropdown'
                data-bs-auto-close='outside'
                id='messageDropdown'
                aria-expanded='false'
              >
                <i className='fe fe-bell header-link-icon'></i>
                <span className='pulse'></span>
              </a>
              {/* <!-- End::header-link|dropdown-toggle --> */}
              {/* <!-- Start::main-header-dropdown --> */}
              <div
                className='main-header-dropdown dropdown-menu dropdown-menu-end border-0 dropdown-menu-arrow'
                data-popper-placement='none'
              >
                <div className='p-3 menu-header-content rounded-top'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <p className='mb-0 fs-17 text-fixed-white fw-semibold'>
                      7 Notifications
                    </p>
                    <span
                      className='badge bg-warning rounded-pill'
                      id='notifiation-data'
                    >
                      Mark All Aead
                    </span>
                  </div>
                </div>
                <div className='dropdown-divider'></div>
                <ul
                  className='list-unstyled mb-0'
                  id='header-notification-scroll'
                >
                  <li className='dropdown-item p-3'>
                    <div className='d-flex align-items-start'>
                      <div className='pe-2'>
                        <span className='avatar avatar-md bg-success-transparent avatar-rounded'>
                          <i className='la la-shopping-basket text-success fs-21'></i>
                        </span>
                      </div>
                      <div className='flex-grow-1 d-flex align-items-center justify-content-between'>
                        <div>
                          <p className='mb-0 fs-14 fw-semibold'>
                            <a href='notifications.html'>New Order Received</a>
                          </p>
                          <span className='text-muted fw-normal fs-12 header-notification-text'>
                            1 hour ago
                          </span>
                        </div>
                        <div>
                          <a
                            href='javascript:void(0);'
                            className='min-w-fit-content text-muted me-1'
                          >
                            <i className='las la-angle-right fs-13'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='dropdown-item p-3'>
                    <div className='d-flex align-items-start'>
                      <div className='pe-2'>
                        <span className='avatar avatar-md bg-danger-transparent avatar-rounded'>
                          <i className='la la-user-check text-danger fs-21'></i>
                        </span>
                      </div>
                      <div className='flex-grow-1 d-flex align-items-center justify-content-between'>
                        <div>
                          <p className='mb-0 fs-14 fw-semibold'>
                            <a href='notifications.html'>
                              22 Verified registrations
                            </a>
                          </p>
                          <span className='text-muted fw-normal fs-12 header-notification-text'>
                            2 hours ago
                          </span>
                        </div>
                        <div>
                          <a
                            href='javascript:void(0);'
                            className='min-w-fit-content text-muted me-1'
                          >
                            <i className='las la-angle-right fs-13'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='dropdown-item p-3'>
                    <div className='d-flex align-items-start'>
                      <div className='pe-2'>
                        <span className='avatar avatar-md bg-primary-transparent avatar-rounded'>
                          <i className='la la-check-circle text-primary fs-21'></i>
                        </span>
                      </div>
                      <div className='flex-grow-1 d-flex align-items-center justify-content-between'>
                        <div>
                          <p className='mb-0 fs-14 fw-semibold'>
                            <a href='notifications.html'>
                              Project has been approved
                            </a>
                          </p>
                          <span className='text-muted fw-normal fs-12 header-notification-text'>
                            4 hours ago
                          </span>
                        </div>
                        <div>
                          <a
                            href='javascript:void(0);'
                            className='min-w-fit-content text-muted me-1'
                          >
                            <i className='las la-angle-right fs-13'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='dropdown-item p-3'>
                    <div className='d-flex align-items-start'>
                      <div className='pe-2'>
                        <span className='avatar avatar-md bg-pink-transparent avatar-rounded'>
                          <i className='la la-file-alt text-pink fs-21'></i>
                        </span>
                      </div>
                      <div className='flex-grow-1 d-flex align-items-center justify-content-between'>
                        <div>
                          <p className='mb-0 fs-14 fw-semibold'>
                            <a href='notifications.html'>New files available</a>
                          </p>
                          <span className='text-muted fw-normal fs-12 header-notification-text'>
                            10 hours ago
                          </span>
                        </div>
                        <div>
                          <a
                            href='javascript:void(0);'
                            className='min-w-fit-content text-muted me-1'
                          >
                            <i className='las la-angle-right fs-13'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='dropdown-item p-3'>
                    <div className='d-flex align-items-start'>
                      <div className='pe-2'>
                        <span className='avatar avatar-md bg-warning-transparent avatar-rounded'>
                          <i className='la la-envelope-open text-warning fs-21'></i>
                        </span>
                      </div>
                      <div className='flex-grow-1 d-flex align-items-center justify-content-between'>
                        <div>
                          <p className='mb-0 fs-14 fw-semibold'>
                            <a href='notifications.html'>New review received</a>
                          </p>
                          <span className='text-muted fw-normal fs-12 header-notification-text'>
                            1 day ago
                          </span>
                        </div>
                        <div>
                          <a
                            href='javascript:void(0);'
                            className='min-w-fit-content text-muted me-1'
                          >
                            <i className='las la-angle-right fs-13'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='dropdown-item p-3'>
                    <div className='d-flex align-items-start'>
                      <div className='pe-2'>
                        <span className='avatar avatar-md bg-purple-transparent avatar-rounded'>
                          <i className='la la-gem text-purple fs-21'></i>
                        </span>
                      </div>
                      <div className='flex-grow-1 d-flex align-items-center justify-content-between'>
                        <div>
                          <p className='mb-0 fs-14 fw-semibold'>
                            <a href='notifications.html'>Updates available</a>
                          </p>
                          <span className='text-muted fw-normal fs-12 header-notification-text'>
                            2 days ago
                          </span>
                        </div>
                        <div>
                          <a
                            href='javascript:void(0);'
                            className='min-w-fit-content text-muted me-1'
                          >
                            <i className='las la-angle-right fs-13'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className='p-2 empty-header-item border-top bg-primary-transparent'>
                  <div className='d-grid text-center'>
                    <a href='notifications.html' className='text-primary'>
                      VIEW ALL
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End::main-header-dropdown --> */}
            </div>
            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}
            <div className='header-element header-fullscreen'>
              {/* <!-- Start::header-link --> */}
              <a
                onClick='openFullscreen();'
                href='javascript:void(0);'
                className='header-link'
              >
                <i className='fe fe-maximize full-screen-open header-link-icon'></i>
                <i className='fe fe-minimize full-screen-close header-link-icon d-none'></i>
              </a>
              {/* <!-- End::header-link --> */}
            </div>
            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}
            <div className='header-element'>
              <a
                href='javascript:void(0);'
                className='header-link'
                data-bs-toggle='offcanvas'
                data-bs-target='#rightsidebar-canvas'
              >
                <i className='fe fe-align-right header-link-icon'></i>
              </a>
            </div>
            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}
            <div className='header-element profile-dropdown'>
              {/* <!-- Start::header-link|dropdown-toggle --> */}
              <a
                href='javascript:void(0);'
                className='header-link dropdown-toggle'
                id='mainHeaderProfile'
                data-bs-toggle='dropdown'
                data-bs-auto-close='outside'
                aria-expanded='false'
              >
                <div className='d-flex align-items-center'>
                  <div className='me-sm-2 me-0'>
                    <img
                      src='/assets/images/users/5.jpg'
                      alt='img'
                      width='32'
                      height='32'
                      className='rounded-circle'
                    />
                  </div>
                  <div className='d-sm-block d-none'>
                    <p className='fw-semibold mb-0'>Elizabeth Zane</p>
                    <span className='op-7 fw-normal d-block fs-11 lh-1'>
                      Premium Member
                    </span>
                  </div>
                </div>
              </a>
              {/* <!-- End::header-link|dropdown-toggle --> */}
              <div
                className='main-header-dropdown dropdown-menu pt-0 border-0 header-profile-dropdown dropdown-menu-end dropdown-menu-arrow'
                aria-labelledby='mainHeaderProfile'
              >
                <div className='p-3 menu-header-content text-fixed-white rounded-top text-center'>
                  <div className=''>
                    <div className='avatar avatar-xl rounded-circle'>
                      <img
                        alt=''
                        className='rounded-circle'
                        src='/assets/images/users/5.jpg'
                      />
                    </div>
                    <p className='text-fixed-white fs-18 fw-semibold mb-0'>
                      Elizabeth Jane
                    </p>
                    <span className='fs-13 text-fixed-white'>
                      Premium Member
                    </span>
                  </div>
                </div>
                <div>
                  <hr className='dropdown-divider' />
                </div>
                <div>
                  <a className='dropdown-item' href='profile.html'>
                    <i className='fa fa-user me-1'></i> My Profile
                  </a>
                  <a className='dropdown-item' href='profile.html'>
                    <i className='fa fa-edit me-1'></i>
                    Edit Profile
                  </a>
                  <a className='dropdown-item' href='notifications.html'>
                    <i className='fa fa-clock me-1'></i> Activity Logs
                  </a>
                  <a className='dropdown-item' href='settings.html'>
                    <i className='fa fa-sliders-h me-1'></i> Account Settings
                  </a>
                  <a className='dropdown-item' href='signin.html'>
                    <i className='fa fa-sign-out-alt me-1'></i> Sign Out
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- End::header-element --> */}

            {/* <!-- Start::header-element --> */}
            <div className='header-element'>
              {/* <!-- Start::header-link|switcher-icon --> */}
              <a
                href='javascript:void(0);'
                className='header-link switcher-icon'
                data-bs-toggle='offcanvas'
                data-bs-target='#switcher-canvas'
              >
                <i className='fe fe-settings header-link-icon'></i>
              </a>
              {/* <!-- End::header-link|switcher-icon --> */}
            </div>
            {/* <!-- End::header-element --> */}
          </div>
          {/* <!-- End::header-content-right --> */}
        </div>
        {/* <!-- End::main-header-container --> */}
      </header>
      {/* <!-- /app-header --> */}
    </>
  );
};

export default Header;
