import React from 'react';

const RightSideBar = () => {
  return (
    <>
      {/* <!-- Start Rightsidebar --> */}
      <div
        className='offcanvas offcanvas-end'
        tabIndex='-1'
        id='rightsidebar-canvas'
        aria-labelledby='offcanvasRightLabel'
      >
        <div className='offcanvas-header border-bottom bg-light'>
          <h5
            className='offcanvas-title text-default fw-semibold'
            id='offcanvasRightLabel1'
          >
            NOTIFICATIONS
          </h5>
          <button
            type='button'
            className='btn-close text-primary'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body p-0'>
          <div className='tabs-menu'>
            {/* <!-- Tabs --> */}
            <ul className='nav panel-tabs'>
              <li className=''>
                <a href='#tab' className='active show' data-bs-toggle='tab'>
                  Profile
                </a>
              </li>
              <li className=''>
                <a href='#tab1' data-bs-toggle='tab' className=''>
                  Friends
                </a>
              </li>
              <li>
                <a href='#tab2' data-bs-toggle='tab' className=''>
                  Activity
                </a>
              </li>
              <li>
                <a href='#tab3' data-bs-toggle='tab' className=''>
                  Todo
                </a>
              </li>
            </ul>
          </div>
          <div className='panel-body tabs-menu-body side-tab-body p-0 border-0 '>
            <div className='tab-content'>
              <div className='tab-pane active' id='tab'>
                <div className='card-body p-0'>
                  <div className='header-user text-center mt-3'>
                    <span className='avatar avatar-xxl rounded-circle mx-auto'>
                      <img
                        src='/assets/images/users/5.jpg'
                        alt='Profile-img'
                        className='avatar avatar-xxl rounded-circle'
                      />
                    </span>
                    <div className=' text-center fw-semibold user mt-2 h6 mb-0'>
                      Elizabeth Jane
                    </div>
                    <span className='text-muted'>App Developer</span>
                  </div>
                  <div className='card-body p-3'>
                    <p className='fw-semibold mb-1'>Offline/Online</p>
                    <select
                      className='form-control'
                      data-trigger
                      name='choices-single-default'
                      id='choices-single-default1'
                    >
                      <option value='Choice 1'>Online</option>
                      <option value='Choice 2'>Offline</option>
                    </select>
                    <p className='fw-semibold mb-1'>Website</p>
                    <select
                      className='form-control'
                      data-trigger
                      name='choices-single-default'
                      id='choices-single-default2'
                    >
                      <option value='Choice 1'>Spruko.com</option>
                      <option value='Choice 2'>sprukosoft.com</option>
                      <option value='Choice 3'>sprukotechnologies.com</option>
                      <option value='Choice 4'>sprukoinfo.com</option>
                      <option value='Choice 5'>sprukotech.com</option>
                    </select>
                  </div>
                  <a className='dropdown-item  border-top' href='profile.html'>
                    <i className='dropdown-icon fe fe-edit me-2 float-start'></i>{' '}
                    Edit Profile
                  </a>
                  <a className='dropdown-item  border-top' href='about.html'>
                    <i className='dropdown-icon fe fe-user me-2 float-start'></i>{' '}
                    Spruko technologies
                  </a>
                  <a className='dropdown-item border-top' href='settings.html'>
                    <i className='dropdown-icon  fe fe-unlock me-2 float-start'></i>{' '}
                    Add Another Account
                  </a>
                  <a className='dropdown-item  border-top' href='chat.html'>
                    <i className='dropdown-icon fe fe-mail me-2 float-start'></i>{' '}
                    Message
                  </a>
                  <a className='dropdown-item  border-top' href='faq.html'>
                    <i className='dropdown-icon fe fe-help-circle me-2 float-start'></i>{' '}
                    Need Help?
                  </a>
                  <div className='card-body border-top p-3'>
                    <h6 className='mb-0'>Followers</h6>
                    <div className='row mt-2'>
                      <div className='col-12'>
                        <div className='avatar-list-stacked'>
                          <span className='avatar avatar-rounded'>
                            <img src='/assets/images/users/3.jpg' alt='img' />
                          </span>
                          <span className='avatar avatar-rounded'>
                            <img src='/assets/images/users/6.jpg' alt='img' />
                          </span>
                          <span className='avatar avatar-rounded'>
                            <img src='/assets/images/users/3.jpg' alt='img' />
                          </span>
                          <span className='avatar avatar-rounded'>
                            <img src='/assets/images/users/4.jpg' alt='img' />
                          </span>
                          <span className='avatar avatar-rounded'>
                            <img src='/assets/images/users/9.jpg' alt='img' />
                          </span>
                          <a
                            className='avatar bg-primary avatar-rounded text-fixed-white'
                            href='javascript:void(0);'
                          >
                            +34
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card-body border-top border-bottom p-3 mt-5'>
                    <div className='row'>
                      <div className='col-4 text-center'>
                        <a className='' href='mail.html'>
                          <i className='dropdown-icon mdi  mdi-message-outline fs-20 m-0 leading-tight text-primary'></i>
                        </a>
                        <div>Inbox</div>
                      </div>
                      <div className='col-4 text-center'>
                        <a className='' href='settings.html'>
                          <i className='dropdown-icon mdi mdi-tune fs-20 m-0 leading-tight text-primary'></i>
                        </a>
                        <div>Settings</div>
                      </div>
                      <div className='col-4 text-center'>
                        <a className='' href='signin.html'>
                          <i className='dropdown-icon mdi mdi-logout-variant fs-20 m-0 leading-tight text-primary'></i>
                        </a>
                        <div>Sign out</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tab-pane' id='tab1'>
                <div className='chat'>
                  <div className='contacts_card'>
                    <div className='input-group mb-0 p-3'>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control text-truncate'
                          placeholder='Search ...'
                          aria-label='Search ...'
                        />
                        <button className='btn btn-primary' type='button'>
                          <i className='fe fe-search' aria-hidden='true'></i>
                        </button>
                      </div>
                    </div>
                    <ul className='contacts mb-0 list-unstyled'>
                      <li className='active'>
                        <div className='d-flex bd-highlight w-100'>
                          <div className='img_cont'>
                            <img
                              src='/assets/images/users/12.jpg'
                              className='rounded-circle user_img'
                              alt='img'
                            />
                            <span className='online_icon'></span>
                          </div>
                          <div className='user_info'>
                            <h5 className='my-1'>Maryam Naz</h5>
                            <small className='text-muted'>is online</small>
                          </div>
                          <div className='ms-auto my-auto'>
                            <small>01-02-2019</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='d-flex bd-highlight w-100'>
                          <div className='img_cont'>
                            <img
                              src='/assets/images/users/2.jpg'
                              className='rounded-circle user_img'
                              alt='img'
                            />
                            <span className=' online_icon'></span>
                          </div>
                          <div className='user_info'>
                            <h5 className='my-1'>Sahar Darya</h5>
                            <small className='text-muted'>
                              left 7 mins ago
                            </small>
                          </div>
                          <div className='ms-auto my-auto'>
                            <small>01-02-2019</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='d-flex bd-highlight w-100'>
                          <div className='img_cont'>
                            <img
                              src='/assets/images/users/5.jpg'
                              className='rounded-circle user_img'
                              alt='img'
                            />
                            <span className='online_icon'></span>
                          </div>
                          <div className='user_info'>
                            <h5 className='my-1'>Maryam Naz</h5>
                            <small className='text-muted'>online</small>
                          </div>
                          <div className='ms-auto my-auto'>
                            <small>01-02-2019</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='d-flex bd-highlight w-100'>
                          <div className='img_cont'>
                            <img
                              src='/assets/images/users/7.jpg'
                              className='rounded-circle user_img'
                              alt='img'
                            />
                            <span className='online_icon'></span>
                          </div>
                          <div className='user_info'>
                            <h5 className='my-1'>Yolduz Rafi</h5>
                            <small className='text-muted'>online</small>
                          </div>
                          <div className='ms-auto my-auto'>
                            <small>02-02-2019</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='d-flex bd-highlight w-100'>
                          <div className='img_cont'>
                            <img
                              src='/assets/images/users/8.jpg'
                              className='rounded-circle user_img'
                              alt='img'
                            />
                            <span className='online_icon'></span>
                          </div>
                          <div className='user_info'>
                            <h5 className='my-1'>Nargis Hawa</h5>
                            <small className='text-muted'>30 mins ago</small>
                          </div>
                          <div className='ms-auto my-auto'>
                            <small>02-02-2019</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='d-flex bd-highlight w-100'>
                          <div className='img_cont'>
                            <img
                              src='/assets/images/users/3.jpg'
                              className='rounded-circle user_img'
                              alt='img'
                            />
                            <span className='online_icon'></span>
                          </div>
                          <div className='user_info'>
                            <h5 className='my-1'>Khadija Mehr</h5>
                            <small className='text-muted'>50 mins ago</small>
                          </div>
                          <div className='ms-auto my-auto'>
                            <small>03-02-2019</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='d-flex bd-highlight w-100'>
                          <div className='img_cont'>
                            <img
                              src='/assets/images/users/14.jpg'
                              className='rounded-circle user_img'
                              alt='img'
                            />
                            <span className='online_icon'></span>
                          </div>
                          <div className='user_info'>
                            <h5 className='my-1'>Petey Cruiser</h5>
                            <small className='text-muted'>1hr ago</small>
                          </div>
                          <div className='ms-auto my-auto'>
                            <small>03-02-2019</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='d-flex bd-highlight w-100'>
                          <div className='img_cont'>
                            <img
                              src='/assets/images/users/11.jpg'
                              className='rounded-circle user_img'
                              alt='img'
                            />
                          </div>
                          <div className='user_info'>
                            <h5 className='my-1'>Khadija Mehr</h5>
                            <small className='text-muted'>2hr ago</small>
                          </div>
                          <div className='ms-auto my-auto'>
                            <small>03-02-2019</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='tab-pane' id='tab2'>
                <div className='list d-flex align-items-center border-bottom p-3 mt-3'>
                  <div className=''>
                    <span className='avatar bg-primary rounded-circle avatar-md'>
                      CH
                    </span>
                  </div>
                  <div className='wrapper w-100 ms-3'>
                    <p className='mb-0 d-flex'>
                      <b>New Websites is Created</b>
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <i className='mdi mdi-clock text-muted me-1'></i>
                        <small className='text-muted ms-auto'>
                          30 mins ago
                        </small>
                        <p className='mb-0'></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='list d-flex align-items-center border-bottom p-3'>
                  <div className=''>
                    <span className='avatar bg-danger rounded-circle avatar-md'>
                      N
                    </span>
                  </div>
                  <div className='wrapper w-100 ms-3'>
                    <p className='mb-0 d-flex'>
                      <b>Prepare For the Next Project</b>
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <i className='mdi mdi-clock text-muted me-1'></i>
                        <small className='text-muted ms-auto'>
                          2 hours ago
                        </small>
                        <p className='mb-0'></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='list d-flex align-items-center border-bottom p-3'>
                  <div className=''>
                    <span className='avatar bg-info rounded-circle avatar-md'>
                      S
                    </span>
                  </div>
                  <div className='wrapper w-100 ms-3'>
                    <p className='mb-0 d-flex'>
                      <b>Decide the live Discussion Time</b>
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <i className='mdi mdi-clock text-muted me-1'></i>
                        <small className='text-muted ms-auto'>
                          3 hours ago
                        </small>
                        <p className='mb-0'></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='list d-flex align-items-center border-bottom p-3'>
                  <div className=''>
                    <span className='avatar bg-warning rounded-circle avatar-md'>
                      K
                    </span>
                  </div>
                  <div className='wrapper w-100 ms-3'>
                    <p className='mb-0 d-flex'>
                      <b>Team Review meeting</b>
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <i className='mdi mdi-clock text-muted me-1'></i>
                        <small className='text-muted ms-auto'>
                          4 hours ago
                        </small>
                        <p className='mb-0'></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='list d-flex align-items-center border-bottom p-3'>
                  <div className=''>
                    <span className='avatar bg-success rounded-circle avatar-md'>
                      R
                    </span>
                  </div>
                  <div className='wrapper w-100 ms-3'>
                    <p className='mb-0 d-flex'>
                      <b>Prepare for Presentation</b>
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <i className='mdi mdi-clock text-muted me-1'></i>
                        <small className='text-muted ms-auto'>1 days ago</small>
                        <p className='mb-0'></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='list d-flex align-items-center  border-bottom p-3'>
                  <div className=''>
                    <span className='avatar bg-pink rounded-circle avatar-md'>
                      MS
                    </span>
                  </div>
                  <div className='wrapper w-100 ms-3'>
                    <p className='mb-0 d-flex'>
                      <b>Prepare for Presentation</b>
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <i className='mdi mdi-clock text-muted me-1'></i>
                        <small className='text-muted ms-auto'>1 days ago</small>
                        <p className='mb-0'></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='list d-flex align-items-center border-bottom p-3'>
                  <div className=''>
                    <span className='avatar bg-purple rounded-circle avatar-md'>
                      L
                    </span>
                  </div>
                  <div className='wrapper w-100 ms-3'>
                    <p className='mb-0 d-flex'>
                      <b>Prepare for Presentation</b>
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <i className='mdi mdi-clock text-muted me-1'></i>
                        <small className='text-muted ms-auto'>
                          45 mintues ago
                        </small>
                        <p className='mb-0'></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='list d-flex align-items-center border-bottom p-3'>
                  <div className=''>
                    <span className='avatar bg-primary rounded-circle avatar-md'>
                      CH
                    </span>
                  </div>
                  <div className='wrapper w-100 ms-3'>
                    <p className='mb-0 d-flex'>
                      <b>New Websites is Created</b>
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <i className='mdi mdi-clock text-muted me-1'></i>
                        <small className='text-muted ms-auto'>
                          30 mins ago
                        </small>
                        <p className='mb-0'></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='list d-flex align-items-center p-3'>
                  <div className=''>
                    <span className='avatar bg-secondary rounded-circle avatar-md'>
                      U
                    </span>
                  </div>
                  <div className='wrapper w-100 ms-3'>
                    <p className='mb-0 d-flex'>
                      <b>Prepare for Presentation</b>
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <i className='mdi mdi-clock text-muted me-1'></i>
                        <small className='text-muted ms-auto'>2 days ago</small>
                        <p className='mb-0'></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tab-pane' id='tab3'>
                <div className='mt-3'>
                  <div className='d-flex p-3'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault1'
                        checked
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexCheckDefault1'
                      >
                        Do Even More...
                      </label>
                    </div>
                    <span className='ms-auto'>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        data-bs-title='Edit'
                        data-bs-placement='top'
                      >
                        <i className='si si-pencil text-primary me-2'></i>
                      </a>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        data-bs-title='Delete'
                        data-bs-placement='top'
                      >
                        <i className='si si-trash text-danger me-2'></i>
                      </a>
                    </span>
                  </div>
                  <div className='d-flex p-3 border-top'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault2'
                        checked
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexCheckDefault2'
                      >
                        Find an idea.
                      </label>
                    </div>
                    <span className='ms-auto'>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Edit'
                        data-bs-placement='top'
                      >
                        <i className='si si-pencil text-primary me-2'></i>
                      </a>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Delete'
                        data-bs-placement='top'
                      >
                        <i className='si si-trash text-danger me-2'></i>
                      </a>
                    </span>
                  </div>
                  <div className='d-flex p-3 border-top'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault3'
                        checked
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexCheckDefault3'
                      >
                        Hangout with friends
                      </label>
                    </div>
                    <span className='ms-auto'>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Edit'
                        data-bs-placement='top'
                      >
                        <i className='si si-pencil text-primary me-2'></i>
                      </a>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Delete'
                        data-bs-placement='top'
                      >
                        <i className='si si-trash text-danger me-2'></i>
                      </a>
                    </span>
                  </div>
                  <div className='d-flex p-3 border-top'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault4'
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexCheckDefault4'
                      >
                        Do Something else
                      </label>
                    </div>
                    <span className='ms-auto'>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Edit'
                        data-bs-placement='top'
                      >
                        <i className='si si-pencil text-primary me-2'></i>
                      </a>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Delete'
                        data-bs-placement='top'
                      >
                        <i className='si si-trash text-danger me-2'></i>
                      </a>
                    </span>
                  </div>
                  <div className='d-flex p-3 border-top'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault5'
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexCheckDefault5'
                      >
                        Eat healthy, Eat Fresh..
                      </label>
                    </div>
                    <span className='ms-auto'>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Edit'
                        data-bs-placement='top'
                      >
                        <i className='si si-pencil text-primary me-2'></i>
                      </a>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Delete'
                        data-bs-placement='top'
                      >
                        <i className='si si-trash text-danger me-2'></i>
                      </a>
                    </span>
                  </div>
                  <div className='d-flex p-3 border-top'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault6'
                        checked
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexCheckDefault6'
                      >
                        Finsh something more..
                      </label>
                    </div>
                    <span className='ms-auto'>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Edit'
                        data-bs-placement='top'
                      >
                        <i className='si si-pencil text-primary me-2'></i>
                      </a>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Delete'
                        data-bs-placement='top'
                      >
                        <i className='si si-trash text-danger me-2'></i>
                      </a>
                    </span>
                  </div>
                  <div className='d-flex p-3 border-top'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault7'
                        checked
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexCheckDefault7'
                      >
                        Do something more
                      </label>
                    </div>
                    <span className='ms-auto'>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Edit'
                        data-bs-placement='top'
                      >
                        <i className='si si-pencil text-primary me-2'></i>
                      </a>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Delete'
                        data-bs-placement='top'
                      >
                        <i className='si si-trash text-danger me-2'></i>
                      </a>
                    </span>
                  </div>
                  <div className='d-flex p-3 border-top'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault8'
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexCheckDefault8'
                      >
                        Updated more files
                      </label>
                    </div>
                    <span className='ms-auto'>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Edit'
                        data-bs-placement='top'
                      >
                        <i className='si si-pencil text-primary me-2'></i>
                      </a>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Delete'
                        data-bs-placement='top'
                      >
                        <i className='si si-trash text-danger me-2'></i>
                      </a>
                    </span>
                  </div>
                  <div className='d-flex p-3 border-top'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault9'
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexCheckDefault9'
                      >
                        System updated
                      </label>
                    </div>
                    <span className='ms-auto'>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Edit'
                        data-bs-placement='top'
                      >
                        <i className='si si-pencil text-primary me-2'></i>
                      </a>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Delete'
                        data-bs-placement='top'
                      >
                        <i className='si si-trash text-danger me-2'></i>
                      </a>
                    </span>
                  </div>
                  <div className='d-flex p-3 border-top border-bottom'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault10'
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexCheckDefault10'
                      >
                        Settings Changings...
                      </label>
                    </div>
                    <span className='ms-auto'>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Edit'
                        data-bs-placement='top'
                      >
                        <i className='si si-pencil text-primary me-2'></i>
                      </a>
                      <a
                        href='javascript:void(0);'
                        data-bs-toggle='tooltip'
                        title='Delete'
                        data-bs-placement='top'
                      >
                        <i className='si si-trash text-danger me-2'></i>
                      </a>
                    </span>
                  </div>
                  <div className='text-center pt-5'>
                    <a href='javascript:void(0);' className='btn btn-primary'>
                      Add more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Rightsidebar --> */}
    </>
  );
};

export default RightSideBar;
