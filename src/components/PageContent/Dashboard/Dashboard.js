'use client';
import React from 'react';

const Dashboard = () => {
  return (
    <>
      {/* <!-- Start::app-content --> */}
      <div class='main-content app-content'>
        <div class='container-fluid'>
          {/* <!-- Start::page-header --> */}

          {/* <!-- breadcrumb --> */}
          <div class='d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb'>
            <div class='left-content'>
              <h3 class='content-title mb-2'>Welcome back,</h3>
              <div class='d-flex p-0'>
                <i class='mdi mdi-home text-muted hover-cursor'></i>
                <p class='text-muted mb-0 hover-cursor'>
                  &nbsp;/&nbsp;Dashboard&nbsp;/&nbsp;
                </p>
                <p class='text-primary mb-0 hover-cursor'>Crypto</p>
              </div>
            </div>
            <div class='d-flex align-items-end flex-wrap my-auto right-content breadcrumb-right'>
              <button
                type='button'
                class='btn btn-warning btn-icon me-3 mt-2 mt-xl-0'
              >
                <i class='mdi mdi-download '></i>
              </button>
              <button
                type='button'
                class='btn btn-danger  btn-icon me-3 mt-2 mt-xl-0'
              >
                <i class='mdi mdi-clock'></i>
              </button>
              <button
                type='button'
                class='btn btn-success btn-icon me-3 mt-2 mt-xl-0'
              >
                <i class='mdi mdi-plus'></i>
              </button>
              <button class='btn btn-primary mt-2 mt-xl-0'>
                Download report
              </button>
            </div>
          </div>
          {/* <!-- /breadcrumb --> */}

          {/* <!-- End::page-header --> */}

          {/* <!-- row  --> */}
          <div class='row'>
            <div class='col-xl-12 col-md-12 col-lg-12'>
              <div class='crypto-card-scroll swiper mySwiper7'>
                <div class='swiper-wrapper'>
                  <div class='swiper-slide'>
                    <div class='item'>
                      <div class='card custom-card'>
                        <div class='card-body crypto-card'>
                          <div class='d-flex no-block align-items-center'>
                            <div class='my-auto'>
                              <img
                                src='/assets/images/crypto-currencies/round-outline/Augur.svg'
                                class='w-6 h-6 mt-0'
                                alt=''
                              />
                            </div>
                            <div class='ms-3'>
                              <p class='mb-1 fs-13'>REP / INR</p>
                              <div class='m-0 fs-13 text-warning'>
                                $0.0215
                                <span class='text-danger ms-2'>
                                  <i class='ion-arrow-down-c me-1'></i>
                                  -0.78%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='swiper-slide'>
                    <div class='item'>
                      <div class='card custom-card'>
                        <div class='card-body crypto-card'>
                          <div class='d-flex no-block align-items-center'>
                            <div class=''>
                              <img
                                src='/assets/images/crypto-currencies/round-outline/AquariusCoin.svg'
                                class='w-6 h-6 mt-0'
                                alt=''
                              />
                            </div>
                            <div class='ms-3'>
                              <p class='mb-1 fs-13'>ARCO / INR</p>
                              <div class='m-0 fs-13 text-warning'>
                                $425.25
                                <span class='text-success ms-2'>
                                  <i class='ion-arrow-up-c me-1'></i>
                                  -12.85%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='swiper-slide'>
                    <div class='item'>
                      <div class='card custom-card'>
                        <div class='card-body crypto-card'>
                          <div class='d-flex no-block align-items-center'>
                            <div class=''>
                              <img
                                src='/assets/images/crypto-currencies/round-outline/BitShares.svg'
                                class='w-6 h-6 mt-0'
                                alt=''
                              />
                            </div>
                            <div class='ms-3'>
                              <p class='mb-1 fs-13'>BTS / INR</p>
                              <div class='m-0 fs-13 text-warning'>
                                $2.786
                                <span class='text-success ms-2'>
                                  <i class='ion-arrow-up-c me-1'></i>
                                  -02.25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='swiper-slide'>
                    <div class='item'>
                      <div class='card custom-card'>
                        <div class='card-body crypto-card'>
                          <div class='d-flex no-block align-items-center'>
                            <div class=''>
                              <img
                                src='/assets/images/crypto-currencies/round-outline/Bytecoin.svg'
                                class='w-6 h-6 mt-0 dark-filter'
                                alt=''
                              />
                            </div>
                            <div class='ms-3'>
                              <p class='mb-1 fs-13'>BCN / INR</p>
                              <div class='m-0 fs-13 text-warning'>
                                $15.425
                                <span class='text-danger ms-2'>
                                  <i class='ion-arrow-down-c me-1'></i>
                                  -0.78%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='swiper-slide'>
                    <div class='item'>
                      <div class='card custom-card'>
                        <div class='card-body crypto-card'>
                          <div class='d-flex no-block align-items-center'>
                            <div class='my-auto'>
                              <img
                                src='/assets/images/crypto-currencies/round-outline/Dash.svg'
                                class='w-6 h-6 mt-0'
                                alt=''
                              />
                            </div>
                            <div class='ms-3'>
                              <p class='mb-1 fs-13'>Dash / INR</p>
                              <div class='m-0 fs-13 text-warning'>
                                $5.125
                                <span class='text-success ms-2'>
                                  <i class='ion-arrow-up-c me-1'></i>
                                  -11.85%%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='swiper-slide'>
                    <div class='item'>
                      <div class='card custom-card'>
                        <div class='card-body crypto-card'>
                          <div class='d-flex no-block align-items-center'>
                            <div class=''>
                              <img
                                src='/assets/images/crypto-currencies/round-outline/EOS.svg'
                                class='w-6 h-6 mt-0 dark-filter'
                                alt=''
                              />
                            </div>
                            <div class='ms-3'>
                              <p class='mb-1 fs-13'>EUR / INR</p>
                              <div class='m-0 fs-13 text-warning'>
                                $135.425
                                <span class='text-danger ms-2'>
                                  <i class='ion-arrow-down-c me-1'></i>
                                  -0.78%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='swiper-slide'>
                    <div class='item'>
                      <div class='card custom-card'>
                        <div class='card-body crypto-card'>
                          <div class='d-flex no-block align-items-center'>
                            <div class=''>
                              <img
                                src='/assets/images/crypto-currencies/round-outline/Decred.svg'
                                class='w-6 h-6 mt-0'
                                alt=''
                              />
                            </div>
                            <div class='ms-3'>
                              <p class='mb-1 fs-13'>ETH / USDT</p>
                              <div class='m-0 fs-13 text-warning'>
                                $34.625
                                <span class='text-success ms-2'>
                                  <i class='ion-arrow-up-c me-1'></i>
                                  -0.32%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='swiper-slide'>
                    <div class='item'>
                      <div class='card custom-card'>
                        <div class='card-body crypto-card'>
                          <div class='d-flex no-block align-items-center'>
                            <div class=''>
                              <img
                                src='/assets/images/crypto-currencies/round-outline/IOTA.svg'
                                class='w-6 h-6 mt-0'
                                alt=''
                              />
                            </div>
                            <div class='ms-3'>
                              <p class='mb-1 fs-13'>IOTA / USD</p>
                              <div class='m-0 fs-13 text-warning'>
                                $67.325
                                <span class='text-danger ms-2'>
                                  <i class='ion-arrow-down-c me-1'></i>
                                  -0.78%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='swiper-slide'>
                    <div class='item'>
                      <div class='card custom-card'>
                        <div class='card-body crypto-card'>
                          <div class='d-flex no-block align-items-center'>
                            <div class=''>
                              <img
                                src='/assets/images/crypto-currencies/round-outline/Litecoin.svg'
                                class='w-6 h-6 mt-0'
                                alt=''
                              />
                            </div>
                            <div class='ms-3'>
                              <p class='mb-1 fs-13'>LTC / USD</p>
                              <div class='m-0 fs-13 text-warning'>
                                $7.525
                                <span class='text-success ms-2'>
                                  <i class='ion-arrow-up-c me-1'></i>
                                  -1.42%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='swiper-slide'>
                    <div class='item'>
                      <div class='card custom-card'>
                        <div class='card-body crypto-card'>
                          <div class='d-flex no-block align-items-center'>
                            <div class=''>
                              <img
                                src='/assets/images/crypto-currencies/round-outline/Monero.svg'
                                class='w-6 h-6 mt-0'
                                alt=''
                              />
                            </div>
                            <div class='ms-3'>
                              <p class='mb-1 fs-13'>XMR / EUR</p>
                              <div class='m-0 fs-13 text-warning'>
                                $4.325
                                <span class='text-danger ms-2'>
                                  <i class='ion-arrow-down-c me-1'></i>
                                  -0.78%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='swiper-slide'>
                    <div class='item'>
                      <div class='card custom-card'>
                        <div class='card-body crypto-card'>
                          <div class='d-flex no-block align-items-center'>
                            <div class=''>
                              <img
                                src='/assets/images/crypto-currencies/round-outline/NEM.svg'
                                class='w-6 h-6 mt-0'
                                alt=''
                              />
                            </div>
                            <div class='ms-3'>
                              <p class='mb-1 fs-13'>ETH / USDT</p>
                              <div class='m-0 fs-13 text-warning'>
                                $5.525
                                <span class='text-success ms-2'>
                                  <i class='ion-arrow-up-c me-1'></i>
                                  -1.32%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='swiper-slide'>
                    <div class='item'>
                      <div class='card custom-card'>
                        <div class='card-body crypto-card'>
                          <div class='d-flex no-block align-items-center'>
                            <div class=''>
                              <img
                                src='/assets/images/crypto-currencies/round-outline/Netko-coin.svg'
                                class='w-6 h-6 mt-0'
                                alt=''
                              />
                            </div>
                            <div class='ms-3'>
                              <p class='mb-1 fs-13'>NEO / USD</p>
                              <div class='m-0 fs-13 text-warning'>
                                $6.025
                                <span class='text-danger ms-2'>
                                  <i class='ion-arrow-down-c me-1'></i>
                                  -0.78%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}

          {/* <!-- row --> */}
          <div class='row row-sm'>
            <div class='col-xl-4 col-lg-6 col-md-12'>
              <div class='card crypto crypt-primary overflow-hidden'>
                <div class='card-body iconfont text-start'>
                  <div class='media'>
                    <div class='coin-logo bg-primary-transparent'>
                      <i class='cf cf-eth text-primary'></i>
                    </div>
                    <div class='media-body'>
                      <h6>Ethereum</h6>
                      <p>
                        ETH (USD) = $148.46 (
                        <span class='text-danger'>-12.24%</span>)
                      </p>
                    </div>
                    <div class='card-body-top mb-3'>
                      <div>
                        <a href=''>14</a> USD Markets
                      </div>
                      <div>
                        <a href=''>82</a> LTC Markets
                      </div>
                    </div>
                  </div>
                  <div class='mt-5'>
                    <div class='flot-chart ht-150 mt-4' id='ethChart'></div>
                  </div>
                </div>
                <div class='card-footer'>
                  <nav class='nav'>
                    <a class='nav-link' href=''>
                      <span>1D</span>
                      <span>-12.24%</span>
                    </a>
                    <a class='nav-link' href=''>
                      <span>1W</span>
                      <span>-16.48%</span>
                    </a>
                    <a class='nav-link' href=''>
                      <span>1M</span>
                      <span>-15.21%</span>
                    </a>
                    <a class='nav-link' href=''>
                      <span>1Y</span>
                      <span>-40.17%</span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-lg-6 col-md-12'>
              <div class='card crypto crypt-danger overflow-hidden'>
                <div class='card-body iconfont text-start'>
                  <div class='media'>
                    <div class='coin-logo bg-danger-transparent'>
                      <i class='cf cf-ltc fs-18 text-danger'></i>
                    </div>
                    <div class='media-body'>
                      <h6>Litecoin</h6>
                      <p>
                        LTC (USD) = $45.81 (
                        <span class='text-danger'>-12.24%</span>)
                      </p>
                    </div>
                    <div class='card-body-top'>
                      <div>
                        <a href=''>21</a> USD Markets
                      </div>
                      <div>
                        <a href=''>56</a> LTC Markets
                      </div>
                    </div>
                  </div>
                  <div class='mt-5'>
                    <div
                      class='flot-chart ht-150  mt-4'
                      id='litecoin-chart'
                    ></div>
                  </div>
                </div>
                <div class='card-footer'>
                  <nav class='nav'>
                    <a class='nav-link' href=''>
                      <span>1D</span>
                      <span>-15.24%</span>
                    </a>
                    <a class='nav-link' href=''>
                      <span>1W</span>
                      <span>-24.68%</span>
                    </a>
                    <a class='nav-link' href=''>
                      <span>1M</span>
                      <span>-17.15%</span>
                    </a>
                    <a class='nav-link' href=''>
                      <span>1Y</span>
                      <span>-30.23%</span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-lg-12 col-md-12'>
              <div class='card crypto  crypt-success overflow-hidden'>
                <div class='card-body iconfont text-start'>
                  <div class='media'>
                    <div class='coin-logo bg-success-transparent'>
                      <i class='cf cf-xrp text-success'></i>
                    </div>
                    <div class='media-body'>
                      <h6>Ripple</h6>
                      <p>
                        XRP (USD) = $0.2195(
                        <span class='text-danger'>-2.97%</span>)
                      </p>
                    </div>
                    <div class='card-body-top'>
                      <div>
                        <a href=''>4</a> USD Markets
                      </div>
                      <div>
                        <a href=''>45</a> LTC Markets
                      </div>
                    </div>
                  </div>
                  <div class='mt-5'>
                    <div class='flot-chart ht-150 mt-4' id='ripple-chart'></div>
                  </div>
                </div>
                <div class='card-footer'>
                  <nav class='nav'>
                    <a class='nav-link' href=''>
                      <span>1D</span>
                      <span>-14.32%</span>
                    </a>
                    <a class='nav-link' href=''>
                      <span>1W</span>
                      <span>-24.39%</span>
                    </a>
                    <a class='nav-link' href=''>
                      <span>1M</span>
                      <span>-42.12%</span>
                    </a>
                    <a class='nav-link' href=''>
                      <span>1Y</span>
                      <span>-50.34%</span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}

          {/* <!-- row --> */}
          <div class='row row-sm row-deck'>
            <div class='col-xl-4 col-lg-12'>
              <div class='card overflow-hidden '>
                <div class='card-header pb-0'>
                  <div class='d-flex justify-content-between'>
                    <h4 class='card-title mg-b-10'>Market Info</h4>
                  </div>
                  <p class='fs-12 text-muted mb-2'>
                    An activity is a scheduled phase in a project plan with a
                    distinct beginning and end.{' '}
                    <a href='' class='text-primary'>
                      Learn more
                    </a>
                  </p>
                </div>
                <div class='card-body p-0'>
                  <div class=''>
                    <div class='list d-flex align-items-center border-bottom p-2 px-3 mt-0'>
                      <img
                        class='w-6 h-6'
                        src='/assets/images/crypto-currencies/round-outline/Bitcoin.svg  '
                        alt='image'
                      />
                      <div class='w-100 ms-3'>
                        <div class='d-flex justify-content-between align-items-center'>
                          <p class='mt-1 mb-0 fw-semibold'>BTC/USD</p>
                          <span class='ms-auto fs-15 mb-0 fw-semibold'>
                            $10,245.00
                          </span>
                        </div>
                        <div class='d-flex justify-content-between align-items-center'>
                          <span class='text-success fs-13'>
                            <i class='fa fa-caret-up me-1'></i>2.04%
                          </span>
                          <small class='text-muted ms-auto'>340.5 USD</small>
                        </div>
                      </div>
                    </div>
                    <div class='list d-flex align-items-center border-bottom p-2 px-3'>
                      <img
                        class='w-6 h-6'
                        src='/assets/images/crypto-currencies/round-outline/Ethereum.svg'
                        alt='image'
                      />
                      <div class='w-100 ms-3'>
                        <div class='d-flex justify-content-between align-items-center'>
                          <p class='mt-1 mb-0 fw-semibold'>ETH/USD</p>
                          <span class='ms-auto fs-15 mb-0 fw-semibold'>
                            $15,183.00
                          </span>
                        </div>
                        <div class='d-flex justify-content-between align-items-center'>
                          <span class='text-danger fs-13'>
                            <i class='fa fa-caret-down me-1'></i>1.25%
                          </span>
                          <small class='text-muted ms-auto'>283.5 USD</small>
                        </div>
                      </div>
                    </div>
                    <div class='list d-flex align-items-center border-bottom p-2 px-3'>
                      <img
                        class='w-6 h-6'
                        src='/assets/images/crypto-currencies/round-outline/Litecoin.svg'
                        alt='image'
                      />
                      <div class='w-100 ms-3'>
                        <div class='d-flex justify-content-between align-items-center'>
                          <p class='mt-1 mb-0 fw-semibold'>LTC/USD</p>
                          <span class='ms-auto fs-15 mb-0 fw-semibold'>
                            $14,348.00
                          </span>
                        </div>
                        <div class='d-flex justify-content-between align-items-center'>
                          <span class='text-danger fs-13'>
                            <i class='fa fa-caret-down me-1'></i>1.04%
                          </span>
                          <small class='text-muted ms-auto'>368.2 USD</small>
                        </div>
                      </div>
                    </div>
                    <div class='list d-flex align-items-center border-bottom p-2 px-3'>
                      <img
                        class='w-6 h-6'
                        src='/assets/images/crypto-currencies/round-outline/Dash.svg'
                        alt='image'
                      />
                      <div class='w-100 ms-3'>
                        <div class='d-flex justify-content-between align-items-center'>
                          <p class='mt-1 mb-0 fw-semibold'>Dash/USD</p>
                          <span class='ms-auto fs-15 mb-0 fw-semibold'>
                            $12,157.00
                          </span>
                        </div>
                        <div class='d-flex justify-content-between align-items-center'>
                          <span class='text-success fs-13'>
                            <i class='fa fa-caret-up me-1'></i>2.04%
                          </span>
                          <small class='text-muted ms-auto'>127.3 USD</small>
                        </div>
                      </div>
                    </div>
                    <div class='list d-flex align-items-center p-2 px-3 mb-0'>
                      <img
                        class='w-6 h-6'
                        src='/assets/images/crypto-currencies/round-outline/NEM.svg'
                        alt='image'
                      />
                      <div class=' w-100 ms-3'>
                        <div class='d-flex justify-content-between align-items-center'>
                          <p class='mt-1 mb-0 fw-semibold'>BTC/USD</p>
                          <span class='ms-auto fs-15 mb-0 fw-semibold'>
                            $11,183.00
                          </span>
                        </div>
                        <div class='d-flex justify-content-between align-items-center'>
                          <span class='text-success fs-13'>
                            <i class='fa fa-caret-up me-1'></i>1.04%
                          </span>
                          <small class='text-muted ms-auto '>165.8 USD</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-xl-8 col-lg-12'>
              <div class='card card-bitcoin'>
                <div class=' card-minimal-two'>
                  <div class='card-header'>
                    <h4 class='card-title mb-0'>Bitcoin / USD Rate</h4>
                    <div class=''>
                      <nav class='nav nav-pills'>
                        <a
                          class='nav-link active'
                          data-bs-toggle='tab'
                          href='javascript:void(0);'
                        >
                          BTH
                        </a>{' '}
                        <a
                          class='nav-link'
                          data-bs-toggle='tab'
                          href='javascript:void(0);'
                        >
                          ETH
                        </a>{' '}
                        <a
                          class='nav-link'
                          data-bs-toggle='tab'
                          href='javascript:void(0);'
                        >
                          LTC
                        </a>{' '}
                        <a
                          class='nav-link'
                          data-bs-toggle='tab'
                          href='javascript:void(0);'
                        >
                          BTG
                        </a>
                      </nav>
                    </div>
                    {/* </div><!-- card-header-right --> */}
                  </div>
                </div>
                <div class='card-body'>
                  <div class='media'>
                    <div class='media-icon'>
                      <i class='fab fa-bitcoin'></i>
                    </div>
                    <div class='media-body'>
                      <div class='row row-sm'>
                        <div class='col'>
                          <label>Symbol</label>
                          <p>BTC</p>
                        </div>
                        <div class='col-3'>
                          <label>Price Benchmark</label>
                          <p>128.00%</p>
                        </div>
                        <div class='col'>
                          <label>Price (USD)</label>
                          <p>$4,253.49</p>
                        </div>
                        <div class='col'>
                          <label>Change (24H)</label>
                          <p>-0.24%</p>
                        </div>
                        <div class='col'>
                          <label>Market Cap</label>
                          <p>$179.12B</p>
                        </div>
                      </div>
                      {/* </div><!-- row --> */}
                    </div>
                  </div>
                  {/* </div><!-- media-body --> */}
                  <div class='flot-wrapper'>
                    <div class='' id='bitcoinchart'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /row  --> */}

          {/* <!-- row --> */}
          <div class='row row-sm'>
            <div class='col-md-12 col-xl-4 col-lg-12'>
              <div class='card overflow-hidden recent-operations-card'>
                <div class='card-body p-0'>
                  <div class='p-3'>
                    <div class='d-flex justify-content-between'>
                      <h4 class='card-title mg-b-10'>Transactions History</h4>
                    </div>
                    <p class='fs-12 text-muted mb-0'>
                      Transaction History shows information about cash deposits,
                      cash withdrawals for your account.
                      <a href=''>Learn more</a>
                    </p>
                  </div>
                  <div class='transcation-scroll'>
                    <ul class='list-unstyled mg-b-0 mt-2'>
                      <li class='list-item px-3 mb-0 pb-3'>
                        <div class='media align-items-center'>
                          <div class='wd-40 ht-40 bg-orange-transparent tx-orange rounded-circle align-items-center justify-content-center d-none d-sm-flex'>
                            <i class='cf cf-btc wd-20 ht-20 text-center fs-20 '></i>
                          </div>
                          <div class='media-body mg-sm-l-15'>
                            <p class='fw-semibold mg-b-3'>Received Bitcoin</p>
                            <p class='fs-11 mg-b-0 text-muted'>
                              Wallet: 03E25DAEYWZXB01
                            </p>
                          </div>
                        </div>
                        <div class='text-end ms-auto'>
                          <p class='mg-b-3  fw-semibold'>2.0435 BTC</p>
                          <p class='fs-11 mg-b-0  text-muted'>
                            <span class='text-success'>+ $25.00</span>USD
                          </p>
                        </div>
                      </li>
                      <li class='list-item  mb-0 px-3 pb-3'>
                        <div class='media align-items-center'>
                          <div class='wd-40 ht-40 bg-teal-transparent tx-teal rounded-circle align-items-center justify-content-center d-none d-sm-flex'>
                            <i class='cf cf-ltc wd-20 ht-20 text-center fs-16 '></i>
                          </div>
                          <div class='media-body mg-sm-l-15'>
                            <p class='fw-semibold mg-b-3'>Sent Litecoin</p>
                            <p class='fs-11 mg-b-0 text-muted'>
                              Wallet: 03E25DAEYWZXB02
                            </p>
                          </div>
                        </div>
                        <div class='text-end ms-auto'>
                          <p class='mg-b-3  fw-semibold'>0.0147 LTC</p>
                          <p class='fs-11 mg-b-0  text-muted'>
                            <span class='text-danger'>- $12.00</span>USD
                          </p>
                        </div>
                      </li>
                      <li class='list-item  mb-0 px-3 pb-3'>
                        <div class='media align-items-center'>
                          <div class='wd-40 ht-40 bg-danger-transparent rounded-circle align-items-center justify-content-center d-none d-sm-flex'>
                            <i class='cf cf-eth wd-20 ht-20 text-danger fs-20 '></i>
                          </div>
                          <div class='media-body mg-sm-l-15'>
                            <p class='fw-semibold mg-b-3'>Received Ethereum</p>
                            <p class='fs-11 mg-b-0 text-muted'>
                              Wallet: 03E25DAEYWZXB03
                            </p>
                          </div>
                        </div>
                        <div class='text-end ms-auto'>
                          <p class='mg-b-3 fw-semibold'>2.0157 ETH</p>
                          <p class='fs-11 mg-b-0  text-muted'>
                            <span class='text-success'>+ $24.00</span>USD
                          </p>
                        </div>
                      </li>
                      <li class='list-item mb-0 px-3 pb-3'>
                        <div class='media align-items-center'>
                          <div class='wd-40 ht-40 bg-primary-transparent  rounded-circle align-items-center justify-content-center d-none d-sm-flex'>
                            <i class='cf cf-dash wd-20 ht-20 text-primary fs-20 '></i>
                          </div>
                          <div class='media-body mg-sm-l-15'>
                            <p class='fw-semibold mg-b-3'>Sent Dash</p>
                            <p class='fs-11 mg-b-0 text-muted'>
                              Wallet: 03E25DAEYWZXB04
                            </p>
                          </div>
                        </div>
                        <div class='text-end ms-auto'>
                          <p class='mg-b-3 fw-semibold'>0.032 Dash</p>
                          <p class='fs-11 mg-b-0  text-muted'>
                            <span class='text-danger'>- $128.39</span>USD
                          </p>
                        </div>
                      </li>
                      <li class='list-item mb-0 px-3 pb-3'>
                        <div class='media align-items-center'>
                          <div class='wd-40 ht-40 bg-success-transparent tx-success rounded-circle align-items-center justify-content-center d-none d-sm-flex'>
                            <i class='cf cf-xmr wd-20 ht-20 text-center fs-20 '></i>
                          </div>
                          <div class='media-body mg-sm-l-15'>
                            <p class='fw-semibold mg-b-3'>Sent Bitcoin</p>
                            <p class='fs-11 mg-b-0 text-muted'>
                              Wallet: 03E25DAEYWZXB05
                            </p>
                          </div>
                        </div>
                        <div class='text-end ms-auto'>
                          <p class='mg-b-3  fw-semibold'>0.0157 BTC</p>
                          <p class='fs-11 mg-b-0 text-muted'>
                            <span class='text-danger'>- $149.00</span> USD
                          </p>
                        </div>
                      </li>
                      <li class='list-item mb-0 px-3 pb-3'>
                        <div class='media align-items-center'>
                          <div class='wd-40 ht-40 bg-purple-transparent tx-purple rounded-circle align-items-center justify-content-center d-none d-sm-flex'>
                            <i class='cf cf-xrp wd-20 ht-20 text-center fs-20 '></i>
                          </div>
                          <div class='media-body mg-sm-l-15'>
                            <p class='fw-semibold mg-b-3'>Pending Ripple</p>
                            <p class='fs-11 mg-b-0 text-muted'>
                              Wallet: 03E25DAEYWZXB06
                            </p>
                          </div>
                        </div>
                        <div class='text-end ms-auto'>
                          <p class='mg-b-3 fw-semibold'>0.0258 XRP</p>
                          <p class='fs-11 mg-b-0 text-muted'>
                            <span class='text-success'>+ $235.00</span> USD
                          </p>
                        </div>
                      </li>
                      <li class='list-item mb-0 px-3 pb-3'>
                        <div class='media align-items-center'>
                          <div class='wd-40 ht-40 bg-warning-transparent tx-warning rounded-circle align-items-center justify-content-center d-none d-sm-flex'>
                            <i class='cf cf-btc wd-20 ht-20 text-center fs-20 '></i>
                          </div>
                          <div class='media-body mg-sm-l-15'>
                            <p class='fw-semibold mg-b-3'>Pending Bitcoin</p>
                            <p class='fs-11 mg-b-0 text-muted'>
                              Wallet: 03E25DAEYWZXB07
                            </p>
                          </div>
                        </div>
                        <div class='text-end ms-auto'>
                          <p class='mg-b-3 fw-semibold'>0.0235 BTC</p>
                          <p class='fs-11 mg-b-0 text-muted'>
                            <span class='text-success'>+ $345.00</span> USD
                          </p>
                        </div>
                      </li>
                      <li class='list-item mb-0 px-3 pb-3'>
                        <div class='media align-items-center'>
                          <div class='wd-40 ht-40 bg-pink-transparent tx-pink rounded-circle align-items-center justify-content-center d-none d-sm-flex'>
                            <i class='cf cf-eth wd-20 ht-20 text-center fs-20 '></i>
                          </div>
                          <div class='media-body mg-sm-l-15'>
                            <p class='fw-semibold mg-b-3'>Sent Ethereum</p>
                            <p class='fs-11 mg-b-0 text-muted'>
                              Wallet: 03E25DAEYWZXB08
                            </p>
                          </div>
                        </div>
                        <div class='text-end ms-auto'>
                          <p class='mg-b-3 fw-semibold'>0.0020 ETH</p>
                          <p class='fs-11 mg-b-0 text-muted'>
                            <span class='text-danger'>- $245.00</span> USD
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-xl-8 col-lg-12'>
              <div class='row row-sm'>
                <div class='col-lg-6'>
                  <div class='card'>
                    <div class='card-body text-center crypto-buy-sell'>
                      <div class='d-flex justify-content-between'>
                        <h4 class='card-title '>Buy Crypto Coins</h4>
                      </div>
                      <div class='form-group mb-3'>
                        <label class='form-label float-start mt-0'>
                          Enter Your Money
                        </label>
                        <div class='input-group'>
                          <input
                            type='text'
                            class='form-control'
                            value='10,000'
                          />
                          <div class='input-group-text wd-100 p-0 border-0 d-block'>
                            <select
                              class='form-control'
                              data-trigger
                              name='choices-single-default'
                              id='choices-single-default3'
                            >
                              <option value=''>USD</option>
                              <option value='Choice 1'>USD</option>
                              <option value='Choice 2'>EUR</option>
                              <option value='Choice 3'>INR</option>
                              <option value='Choice 4'>GBP</option>
                              <option value='Choice 5'>JPY</option>
                              <option value='Choice 6'>RUB</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class='form-group mb-3'>
                        <label class='form-label float-start'>
                          Your Crypto Coins Converted to
                        </label>
                        <div class='input-group'>
                          <input
                            type='text'
                            class='form-control'
                            value='0.254'
                          />
                          <div class='input-group-text wd-100 p-0 border-0 d-block'>
                            <select
                              class='form-control'
                              data-trigger
                              name='choices-single-default'
                              id='choices-single-default4'
                            >
                              <option value=''>BTC</option>
                              <option value='Choice 1'>BTC</option>
                              <option value='Choice 2'>ETH</option>
                              <option value='Choice 3'>DAH</option>
                              <option value='Choice 4'>RIP</option>
                              <option value='Choice 5'>ITA</option>
                              <option value='Choice 6'>EOS</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <a
                        class='btn btn-block btn-success'
                        href='javascript:void(0);'
                      >
                        Buy Coins
                      </a>
                    </div>
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='card'>
                    <div class='card-body text-center'>
                      <div class='d-flex justify-content-between'>
                        <h4 class='card-title '>Sell Crypto Coins</h4>
                      </div>
                      <div class='form-group mb-3'>
                        <label class='form-label float-start mt-0'>
                          Enter Crypto Coin
                        </label>
                        <div class='input-group'>
                          <input
                            type='text'
                            class='form-control'
                            value='0.254'
                          />
                          <div class='input-group-text p-0 border-0 wd-100 d-block'>
                            <select
                              class='form-control'
                              data-trigger
                              name='choices-single-default'
                              id='choices-single-default5'
                            >
                              <option value=''>BTC</option>
                              <option value='Choice 1'>BTC</option>
                              <option value='Choice 2'>ETH</option>
                              <option value='Choice 3'>DAH</option>
                              <option value='Choice 4'>RIP</option>
                              <option value='Choice 5'>ITA</option>
                              <option value='Choice 6'>EOS</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class='form-group mb-3'>
                        <label class='form-label float-start'>
                          Your Money Converted to
                        </label>
                        <div class='input-group'>
                          <input
                            type='text'
                            class='form-control'
                            value='10,000'
                          />
                          <div class='input-group-text wd-100 p-0 border-0 d-block'>
                            <select
                              class='form-control'
                              data-trigger
                              name='choices-single-default'
                              id='choices-single-default6'
                            >
                              <option value=''>USD</option>
                              <option value='Choice 1'>USD</option>
                              <option value='Choice 2'>EUR</option>
                              <option value='Choice 3'>INR</option>
                              <option value='Choice 4'>GBP</option>
                              <option value='Choice 5'>JPY</option>
                              <option value='Choice 6'>RUB</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <a
                        class='btn btn-block btn-primary'
                        href='javascript:void(0);'
                      >
                        Sell Coins
                      </a>
                    </div>
                  </div>
                </div>
                <div class='col-lg-12'>
                  <div class='card'>
                    <div class='card-body'>
                      <div class='card-title mb-4'>Quick Conversion</div>
                      <div class='row'>
                        <div class='col-xxl-3 col-md-6'>
                          <div class='form-group'>
                            <label class='form-label'>From</label>
                            <select
                              class='form-control'
                              data-trigger
                              name='choices-single-default'
                              id='choices-single-default7'
                            >
                              <option value=''>Coins</option>
                              <option value='Choice 1'>BTC</option>
                              <option value='Choice 2'>ETH</option>
                              <option value='Choice 3'>DAH</option>
                              <option value='Choice 4'>RIP</option>
                              <option value='Choice 5'>ITA</option>
                              <option value='Choice 6'>EOS</option>
                            </select>
                          </div>
                        </div>
                        <div class='col-xxl-3 col-md-6'>
                          <div class='form-group'>
                            <label class='form-label'>To</label>
                            <select
                              class='form-control'
                              data-trigger
                              name='choices-single-default'
                              id='choices-single-default8'
                            >
                              <option value=''>Choose one</option>
                              <option value='Choice 1'>USD</option>
                              <option value='Choice 2'>EUR</option>
                              <option value='Choice 3'>INR</option>
                              <option value='Choice 4'>GBP</option>
                              <option value='Choice 5'>JPY</option>
                              <option value='Choice 6'>RUB</option>
                            </select>
                          </div>
                        </div>
                        <div class='col-xxl-3 col-md-6'>
                          <div class='form-group'>
                            <label class='form-label float-start'>Amount</label>
                            <div class='input-group'>
                              <input
                                type='text'
                                class='form-control'
                                value='10'
                              />
                              <div class=''>
                                <button
                                  type='button'
                                  class='btn btn-light py-2'
                                >
                                  BTC
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class='col-xxl-3 col-md-6'>
                          <div class='form-group'>
                            <label class='form-label float-start'>
                              Price For BTC
                            </label>
                            <div class='input-group'>
                              <input
                                type='text'
                                class='form-control'
                                value='15,25,457'
                              />
                              <div class=''>
                                <button
                                  type='button'
                                  class='btn btn-light py-2'
                                >
                                  USD
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='float-end'>
                        <a class='btn btn-primary' href='javascript:void(0);'>
                          <i class='fa fa-refresh'></i> Transfer Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}

          {/* <!-- row --> */}
          <div class='row'>
            <div class='col-md-12'>
              <div class='card overflow-hidden'>
                <div class='card-body'>
                  <div class=''>
                    <div class='d-flex justify-content-between'>
                      <h4 class='card-title mg-b-10'>
                        Crypto currencies marketing values
                      </h4>
                    </div>
                    <p class='fs-12 text-muted mb-2'>
                      A cryptocurrency is a new form of digital asset based on a
                      network that is distributed across a large number of
                      computers. This decentralized structure allows them to
                      exist outside the control of governments and central
                      authorities.
                      <a href=''>Learn more</a>
                    </p>
                  </div>
                  <div class='table-responsive market-values'>
                    <table class='table table-bordered table-hover table-striped text-nowrap mb-0 fs-13'>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Icon</th>
                          <th>Price</th>
                          <th>% 24h</th>
                          <th>Market Cap</th>
                          <th>CMGR/Month</th>
                          <th>Exchange</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class='border-bottom'>
                          <td>Ethereum</td>
                          <td>
                            <i class='cf cf-eth fs-22'></i>
                          </td>
                          <td>$966.61</td>
                          <td class='text-red'>-6%</td>
                          <td>$95,270,125,036</td>
                          <td>22.62% / 29</td>
                          <td>
                            <a
                              href='javascript:void(0);'
                              class='btn btn-sm btn-success'
                            >
                              Transfer Now
                            </a>
                          </td>
                        </tr>
                        <tr class='border-bottom'>
                          <td>Bitcoin</td>
                          <td>
                            <i class='cf cf-btc fs-22 text-orange'></i>
                          </td>
                          <td>$10513.00</td>
                          <td class='text-red'>-7%</td>
                          <td>$179,470,305,923</td>
                          <td>8.11% / 57</td>
                          <td>
                            <a
                              href='javascript:void(0);'
                              class='btn btn-sm btn-success'
                            >
                              Transfer Now
                            </a>
                          </td>
                        </tr>
                        <tr class='border-bottom'>
                          <td>NEM</td>
                          <td>
                            <i class='cf cf-xem fs-20 text-teal'></i>
                          </td>
                          <td>$1547.00</td>
                          <td class='text-red'>-11%</td>
                          <td>$26,720,210,956</td>
                          <td>21.30% / 6</td>
                          <td>
                            <a
                              href='javascript:void(0);'
                              class='btn btn-sm btn-success'
                            >
                              Transfer Now
                            </a>
                          </td>
                        </tr>
                        <tr class='border-bottom'>
                          <td>Ripple</td>
                          <td>
                            <i class='cf cf-xrp fs-22 text-primary'></i>
                          </td>
                          <td>$1.2029</td>
                          <td class='text-red'>-11%</td>
                          <td>$47,649,145,657</td>
                          <td>10.85% / 53</td>
                          <td>
                            <a
                              href='javascript:void(0);'
                              class='btn btn-sm btn-success'
                            >
                              Transfer Now
                            </a>
                          </td>
                        </tr>
                        <tr class='border-bottom'>
                          <td>Litecoin</td>
                          <td>
                            <i class='cf cf-ltc fs-20 text-muted'></i>
                          </td>
                          <td>$173.86</td>
                          <td class='text-red'>-7%</td>
                          <td>$9,670,920,267</td>
                          <td>6.87% / 57</td>
                          <td>
                            <a
                              href='javascript:void(0);'
                              class='btn btn-sm btn-success'
                            >
                              Transfer Now
                            </a>
                          </td>
                        </tr>
                        <tr class='border-bottom'>
                          <td>Dash</td>
                          <td>
                            <i class='cf cf-dash fs-22 text-purple'></i>
                          </td>
                          <td>$0.935049</td>
                          <td class='text-red'>-11%</td>
                          <td>$8,415,440,999</td>
                          <td>26.99% / 33</td>
                          <td>
                            <a
                              href='javascript:void(0);'
                              class='btn btn-sm btn-success'
                            >
                              Transfer Now
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
      </div>
      {/* <!-- End::app-content --> */}
      <div
        class='modal fade'
        id='searchModal'
        tabIndex='-1'
        aria-labelledby='searchModal'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-body'>
              <div class='input-group'>
                <a
                  href='javascript:void(0);'
                  class='input-group-text'
                  id='Search-Grid'
                >
                  <i class='fe fe-search header-link-icon fs-18'></i>
                </a>
                <input
                  type='search'
                  class='form-control border-0 px-2'
                  placeholder='Search'
                  aria-label='Username'
                />
                <a
                  href='javascript:void(0);'
                  class='input-group-text'
                  id='voice-search'
                >
                  <i class='fe fe-mic header-link-icon'></i>
                </a>
                <a
                  href='javascript:void(0);'
                  class='btn btn-light btn-icon'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <i class='fe fe-more-vertical'></i>
                </a>
                <ul class='dropdown-menu'>
                  <li>
                    <a class='dropdown-item' href='javascript:void(0);'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='javascript:void(0);'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='javascript:void(0);'>
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr class='dropdown-divider' />
                  </li>
                  <li>
                    <a class='dropdown-item' href='javascript:void(0);'>
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
              <div class='mt-4'>
                <p class='fw-semibold text-muted mb-2'>
                  Are You Looking For...
                </p>
                <span class='search-tags'>
                  <i class='fe fe-user me-2'></i>People
                  <a href='javascript:void(0)' class='tag-addon'>
                    <i class='fe fe-x'></i>
                  </a>
                </span>
                <span class='search-tags'>
                  <i class='fe fe-file-text me-2'></i>Pages
                  <a href='javascript:void(0)' class='tag-addon'>
                    <i class='fe fe-x'></i>
                  </a>
                </span>
                <span class='search-tags'>
                  <i class='fe fe-align-left me-2'></i>Articles
                  <a href='javascript:void(0)' class='tag-addon'>
                    <i class='fe fe-x'></i>
                  </a>
                </span>
                <span class='search-tags'>
                  <i class='fe fe-server me-2'></i>Tags
                  <a href='javascript:void(0)' class='tag-addon'>
                    <i class='fe fe-x'></i>
                  </a>
                </span>
              </div>
              <div class='my-4'>
                <p class='fw-semibold text-muted mb-2'>Recent Search :</p>
                <div class='p-2 border br-5 d-flex align-items-center text-muted mb-2 alert'>
                  <a href='notifications.html'>
                    <span>Notifications</span>
                  </a>
                  <a
                    class='ms-auto lh-1'
                    href='javascript:void(0);'
                    data-bs-dismiss='alert'
                    aria-label='Close'
                  >
                    <i class='fe fe-x text-muted'></i>
                  </a>
                </div>
                <div class='p-2 border br-5 d-flex align-items-center text-muted mb-2 alert'>
                  <a href='alerts.html'>
                    <span>Alerts</span>
                  </a>
                  <a
                    class='ms-auto lh-1'
                    href='javascript:void(0);'
                    data-bs-dismiss='alert'
                    aria-label='Close'
                  >
                    <i class='fe fe-x text-muted'></i>
                  </a>
                </div>
                <div class='p-2 border br-5 d-flex align-items-center text-muted mb-0 alert'>
                  <a href='mail.html'>
                    <span>Mail</span>
                  </a>
                  <a
                    class='ms-auto lh-1'
                    href='javascript:void(0);'
                    data-bs-dismiss='alert'
                    aria-label='Close'
                  >
                    <i class='fe fe-x text-muted'></i>
                  </a>
                </div>
              </div>
            </div>
            <div class='modal-footer'>
              <div class='btn-group ms-auto'>
                <button class='btn btn-sm btn-primary-light'>Search</button>
                <button class='btn btn-sm btn-primary'>Clear Recents</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
