import React from 'react';

const Sidebar = () => {
  return (
    <>
      {/* <!-- Start::app-sidebar --> */}
      <aside className='app-sidebar sticky' id='sidebar'>
        {/* <!-- Start::main-sidebar-header --> */}
        <div className='main-sidebar-header'>
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
        {/* <!-- End::main-sidebar-header --> */}

        {/* <!-- Start::main-sidebar --> */}
        <div className='main-sidebar' id='sidebar-scroll'>
          {/* <!-- Start::nav --> */}
          <nav className='main-menu-container nav nav-pills flex-column sub-open'>
            <div className='slide-left' id='slide-left'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#7b8191'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                {' '}
                <path d='M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z'></path>{' '}
              </svg>
            </div>
            <ul className='main-menu'>
              {/* <!-- Start::slide__category --> */}
              <li className='slide__category'>
                <span className='category-name'>Dashboard</span>
              </li>
              {/* <!-- End::slide__category --> */}

              {/* <!-- Start::slide --> */}
              <li className='slide'>
                <a href='index.html' className='side-menu__item'>
                  <i className='side-menu__icon ti-desktop'></i>
                  <span className='side-menu__label'>Dashboard</span>
                </a>
              </li>
              {/* <!-- End::slide --> */}

              {/* <!-- Start::slide__category --> */}
              <li className='slide__category'>
                <span className='category-name'>widgets & maps</span>
              </li>
              {/* <!-- End::slide__category --> */}

              {/* <!-- Start::slide --> */}
              <li className='slide'>
                <a href='widgets.html' className='side-menu__item'>
                  <i className='side-menu__icon ti-package'></i>
                  <span className='side-menu__label'>Widgets</span>
                </a>
              </li>
              {/* <!-- End::slide --> */}

              {/* <!-- Start::slide --> */}
              <li className='slide has-sub'>
                <a href='javascript:void(0);' className='side-menu__item'>
                  <i className='side-menu__icon ti-briefcase'></i>
                  <span className='side-menu__label'>Apps</span>
                  <i className='fe fe-chevron-right side-menu__angle'></i>
                </a>
                <ul className='slide-menu child1'>
                  <li className='slide side-menu__label1'>
                    <a href='javascript:void(0)'>Apps</a>
                  </li>
                  <li className='slide'>
                    <a href='cards.html' className='side-menu__item'>
                      Cards
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='draggable-cards.html' className='side-menu__item'>
                      Draggable Cards
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='full-calendar.html' className='side-menu__item'>
                      Full Calendar
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='contacts.html' className='side-menu__item'>
                      Contacts
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='notifications.html' className='side-menu__item'>
                      Notifications
                    </a>
                  </li>
                  <li className='slide'>
                    <a
                      href='widget-notification.html'
                      className='side-menu__item'
                    >
                      Widget Notification
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='treeview.html' className='side-menu__item'>
                      Treeview
                    </a>
                  </li>
                  <li className='slide has-sub'>
                    <a href='javascript:void(0);' className='side-menu__item'>
                      File Manager
                      <i className='fe fe-chevron-right side-menu__angle'></i>
                    </a>
                    <ul className='slide-menu child2'>
                      <li className='slide'>
                        <a href='filemanager.html' className='side-menu__item'>
                          File Manager
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='filemanager-list.html'
                          className='side-menu__item'
                        >
                          File Manager List
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='filemanager-details.html'
                          className='side-menu__item'
                        >
                          File Details
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* <!-- End::slide --> */}

              {/* <!-- Start::slide --> */}
              <li className='slide'>
                <a href='icons.html' className='side-menu__item'>
                  <i className='side-menu__icon ti-face-smile menu-icon'></i>
                  <span className='side-menu__label'>Icons</span>
                </a>
              </li>
              {/* <!-- End::slide --> */}

              {/* <!-- Start::slide --> */}
              <li className='slide has-sub'>
                <a href='javascript:void(0);' className='side-menu__item'>
                  <i className='side-menu__icon ti-map-alt menu-icon'></i>
                  <span className='side-menu__label'>Maps</span>
                  <i className='fe fe-chevron-right side-menu__angle'></i>
                </a>
                <ul className='slide-menu child1'>
                  <li className='slide side-menu__label1'>
                    <a href='javascript:void(0)'>Maps</a>
                  </li>
                  <li className='slide'>
                    <a href='google-maps.html' className='side-menu__item'>
                      Google Maps
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='leaflet-maps.html' className='side-menu__item'>
                      Leaflet Maps
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='vector-maps.html' className='side-menu__item'>
                      Vector Maps
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- End::slide --> */}

              {/* <!-- Start::slide__category --> */}
              <li className='slide__category'>
                <span className='category-name'>componenents</span>
              </li>
              {/* <!-- End::slide__category --> */}

              {/* <!-- Start::slide --> */}
              <li className='slide has-sub'>
                <a href='javascript:void(0);' className='side-menu__item'>
                  <i className='side-menu__icon ti-server'></i>
                  <span className='side-menu__label'>Elements</span>
                  <i className='fe fe-chevron-right side-menu__angle'></i>
                </a>
                <ul className='slide-menu child1 mega-menu'>
                  <li className='slide side-menu__label1'>
                    <a href='javascript:void(0)'>Ui Elements</a>
                  </li>
                  <li className='slide'>
                    <a href='alerts.html' className='side-menu__item'>
                      Alerts
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='avatars.html' className='side-menu__item'>
                      Avatars
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='breadcrumb.html' className='side-menu__item'>
                      Breadcrumbs
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='buttons.html' className='side-menu__item'>
                      Buttons
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='dropdowns.html' className='side-menu__item'>
                      Dropdowns
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='images_figures.html' className='side-menu__item'>
                      Images & Figures
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='listgroup.html' className='side-menu__item'>
                      List Group
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='navs_tabs.html' className='side-menu__item'>
                      Navs & Tabs
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='pagination.html' className='side-menu__item'>
                      Pagination
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='popovers.html' className='side-menu__item'>
                      Popovers
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='progress.html' className='side-menu__item'>
                      Progress
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='spinners.html' className='side-menu__item'>
                      Spinners
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='object-fit.html' className='side-menu__item'>
                      Object Fit
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='typography.html' className='side-menu__item'>
                      Typography
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='tooltips.html' className='side-menu__item'>
                      Tooltips
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='toasts.html' className='side-menu__item'>
                      Toasts
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='tags.html' className='side-menu__item'>
                      Tags
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='badge.html' className='side-menu__item'>
                      Badge
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='buttongroup.html' className='side-menu__item'>
                      Button Group
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- End::slide --> */}

              {/* <!-- Start::slide --> */}
              <li className='slide has-sub'>
                <a href='javascript:void(0);' className='side-menu__item'>
                  <i className='side-menu__icon ti-palette'></i>
                  <span className='side-menu__label'>Advanced Ui</span>
                  <i className='fe fe-chevron-right side-menu__angle'></i>
                </a>
                <ul className='slide-menu child1'>
                  <li className='slide side-menu__label1'>
                    <a href='javascript:void(0)'>Advanced Ui</a>
                  </li>
                  <li className='slide'>
                    <a
                      href='accordions_collpase.html'
                      className='side-menu__item'
                    >
                      Accordions & Collapse
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='carousel.html' className='side-menu__item'>
                      Carousel
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='modals_closes.html' className='side-menu__item'>
                      Modals & Closes
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='timeline.html' className='side-menu__item'>
                      Timeline
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='sweet_alerts.html' className='side-menu__item'>
                      Sweet Alerts
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='ratings.html' className='side-menu__item'>
                      Ratings
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='userlist.html' className='side-menu__item'>
                      Userlist
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='navbar.html' className='side-menu__item'>
                      Navbar
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='offcanvas.html' className='side-menu__item'>
                      Offcanvas
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='placeholders.html' className='side-menu__item'>
                      Placeholders
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='scrollspy.html' className='side-menu__item'>
                      Scrollspy
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='swiperjs.html' className='side-menu__item'>
                      Swiper JS
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- End::slide --> */}

              {/* <!-- Start::slide__category --> */}
              <li className='slide__category'>
                <span className='category-name'>Forms</span>
              </li>
              {/* <!-- End::slide__category --> */}

              {/* <!-- Start::slide --> */}
              <li className='slide has-sub'>
                <a href='javascript:void(0);' className='side-menu__item'>
                  <i className='side-menu__icon ti-pencil-alt'></i>
                  <span className='side-menu__label'>Forms</span>
                  <i className='fe fe-chevron-right side-menu__angle'></i>
                </a>
                <ul className='slide-menu child1'>
                  <li className='slide side-menu__label1'>
                    <a href='javascript:void(0)'>Forms</a>
                  </li>
                  <li className='slide has-sub'>
                    <a href='javascript:void(0);' className='side-menu__item'>
                      Form Elements
                      <i className='fe fe-chevron-right side-menu__angle'></i>
                    </a>
                    <ul className='slide-menu child2'>
                      <li className='slide'>
                        <a href='form_inputs.html' className='side-menu__item'>
                          Inputs
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='form_check_radios.html'
                          className='side-menu__item'
                        >
                          Checks & Radios
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='form_input_group.html'
                          className='side-menu__item'
                        >
                          Input Group
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='form_select.html' className='side-menu__item'>
                          Form Select
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='form_range.html' className='side-menu__item'>
                          Range Slider
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='form_input_masks.html'
                          className='side-menu__item'
                        >
                          Input Masks
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='form_file_uploads.html'
                          className='side-menu__item'
                        >
                          File Uploads
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='form_dateTime_pickers.html'
                          className='side-menu__item'
                        >
                          Date,Time Picker
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='form_color_pickers.html'
                          className='side-menu__item'
                        >
                          Color Pickers
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='slide'>
                    <a href='floating_labels.html' className='side-menu__item'>
                      Floating Labels
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='form_layout.html' className='side-menu__item'>
                      Form Layouts
                    </a>
                  </li>
                  <li className='slide has-sub'>
                    <a href='javascript:void(0);' className='side-menu__item'>
                      Form Editors
                      <i className='fe fe-chevron-right side-menu__angle'></i>
                    </a>
                    <ul className='slide-menu child2'>
                      <li className='slide'>
                        <a href='quill_editor.html' className='side-menu__item'>
                          Quill Editor
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='slide'>
                    <a href='form_validation.html' className='side-menu__item'>
                      Validation
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='form_select2.html' className='side-menu__item'>
                      Select2
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- End::slide --> */}

              {/* <!-- Start::slide --> */}
              <li className='slide has-sub'>
                <a href='javascript:void(0);' className='side-menu__item'>
                  <i className='side-menu__icon ti-view-grid'></i>
                  <span className='side-menu__label'>Sub Menus</span>
                  <i className='fe fe-chevron-right side-menu__angle'></i>
                </a>
                <ul className='slide-menu child1'>
                  <li className='slide side-menu__label1'>
                    <a href='javascript:void(0)'>Sub Menus</a>
                  </li>
                  <li className='slide'>
                    <a href='javascript:void(0);' className='side-menu__item'>
                      Level-1
                    </a>
                  </li>
                  <li className='slide has-sub'>
                    <a href='javascript:void(0);' className='side-menu__item'>
                      Level-2
                      <i className='fe fe-chevron-right side-menu__angle'></i>
                    </a>
                    <ul className='slide-menu child2'>
                      <li className='slide'>
                        <a
                          href='javascript:void(0);'
                          className='side-menu__item'
                        >
                          Level-2-1
                        </a>
                      </li>
                      <li className='slide has-sub'>
                        <a
                          href='javascript:void(0);'
                          className='side-menu__item'
                        >
                          Level-2-2
                          <i className='fe fe-chevron-right side-menu__angle'></i>
                        </a>
                        <ul className='slide-menu child3'>
                          <li className='slide'>
                            <a
                              href='javascript:void(0);'
                              className='side-menu__item'
                            >
                              Level-2-2-1
                            </a>
                          </li>
                          <li className='slide'>
                            <a
                              href='javascript:void(0);'
                              className='side-menu__item'
                            >
                              Level-2-2-2
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* <!-- End::slide --> */}

              {/* <!-- Start::slide__category --> */}
              <li className='slide__category'>
                <span className='category-name'>other pages</span>
              </li>
              {/* <!-- End::slide__category --> */}

              {/* <!-- Start::slide --> */}
              <li className='slide has-sub'>
                <a href='javascript:void(0);' className='side-menu__item'>
                  <i className='side-menu__icon ti-files'></i>
                  <span className='side-menu__label'>Pages</span>
                  <i className='fe fe-chevron-right side-menu__angle'></i>
                </a>
                <ul className='slide-menu child1'>
                  <li className='slide side-menu__label1'>
                    <a href='javascript:void(0)'>Pages</a>
                  </li>
                  <li className='slide has-sub'>
                    <a href='javascript:void(0);' className='side-menu__item'>
                      Blog
                      <i className='fe fe-chevron-right side-menu__angle'></i>
                    </a>
                    <ul className='slide-menu child2'>
                      <li className='slide'>
                        <a href='blog.html' className='side-menu__item'>
                          Blog
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='blog-details.html' className='side-menu__item'>
                          Blog Details
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='blog-post.html' className='side-menu__item'>
                          Blog Post
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='slide'>
                    <a href='profile.html' className='side-menu__item'>
                      Profile
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='invoice.html' className='side-menu__item'>
                      Invoice
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='pricing.html' className='side-menu__item'>
                      Pricing
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='gallery.html' className='side-menu__item'>
                      Gallery
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='settings.html' className='side-menu__item'>
                      Settings
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='services.html' className='side-menu__item'>
                      Services
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='terms.html' className='side-menu__item'>
                      Terms
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='about.html' className='side-menu__item'>
                      About Company
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='todotask.html' className='side-menu__item'>
                      TodoTask
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='faq.html' className='side-menu__item'>
                      Faqs
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='empty.html' className='side-menu__item'>
                      Empty
                    </a>
                  </li>
                  <li className='slide has-sub'>
                    <a href='javascript:void(0);' className='side-menu__item'>
                      Custom Pages
                      <i className='fe fe-chevron-right side-menu__angle'></i>
                    </a>
                    <ul className='slide-menu child2'>
                      <li className='slide'>
                        <a href='signin.html' className='side-menu__item'>
                          Sign In
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='signup.html' className='side-menu__item'>
                          Sign Up
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='forgot.html' className='side-menu__item'>
                          Forgot Password
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='reset.html' className='side-menu__item'>
                          Reset Password
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='lockscreen.html' className='side-menu__item'>
                          Lockscreen
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='underconstruction.html'
                          className='side-menu__item'
                        >
                          Under Construction
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='404.html' className='side-menu__item'>
                          404 Error
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='500.html' className='side-menu__item'>
                          500 Error
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='slide has-sub'>
                    <a href='javascript:void(0);' className='side-menu__item'>
                      Ecommerce
                      <i className='fe fe-chevron-right side-menu__angle'></i>
                    </a>
                    <ul className='slide-menu child2'>
                      <li className='slide'>
                        <a href='products.html' className='side-menu__item'>
                          Products
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='product-details.html'
                          className='side-menu__item'
                        >
                          Product Details
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='product-cart.html' className='side-menu__item'>
                          Cart
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='checkout.html' className='side-menu__item'>
                          Checkout
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='wishlist.html' className='side-menu__item'>
                          Wishlist
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='slide has-sub'>
                    <a href='javascript:void(0);' className='side-menu__item'>
                      Mail
                      <i className='fe fe-chevron-right side-menu__angle'></i>
                    </a>
                    <ul className='slide-menu child2'>
                      <li className='slide'>
                        <a href='mail.html' className='side-menu__item'>
                          Mail
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='mail-compose.html' className='side-menu__item'>
                          Mail Compose
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='mail-read.html' className='side-menu__item'>
                          Read-Mail
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='mail-settings.html'
                          className='side-menu__item'
                        >
                          Mail-settings
                        </a>
                      </li>
                      <li className='slide'>
                        <a href='chat.html' className='side-menu__item'>
                          Chat
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* <!-- End::slide --> */}

              {/* <!-- Start::slide --> */}
              <li className='slide has-sub'>
                <a href='javascript:void(0);' className='side-menu__item'>
                  <i className='side-menu__icon ti-layers-alt'></i>
                  <span className='side-menu__label'>Utilities</span>
                  <i className='fe fe-chevron-right side-menu__angle'></i>
                </a>
                <ul className='slide-menu child1'>
                  <li className='slide side-menu__label1'>
                    <a href='javascript:void(0)'>Utilities</a>
                  </li>
                  <li className='slide'>
                    <a href='borders.html' className='side-menu__item'>
                      Borders
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='breakpoints.html' className='side-menu__item'>
                      Breakpoints
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='colors.html' className='side-menu__item'>
                      Colors
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='columns.html' className='side-menu__item'>
                      Columns
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='flex.html' className='side-menu__item'>
                      Flex
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='gutters.html' className='side-menu__item'>
                      Gutters
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='helpers.html' className='side-menu__item'>
                      Helpers
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='position.html' className='side-menu__item'>
                      Position
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='more.html' className='side-menu__item'>
                      Additional Content
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- End::slide --> */}

              {/* <!-- Start::slide__category --> */}
              <li className='slide__category'>
                <span className='category-name'>Tables & Charts</span>
              </li>
              {/* <!-- End::slide__category --> */}

              {/* <!-- Start::slide --> */}
              <li className='slide has-sub'>
                <a href='javascript:void(0);' className='side-menu__item'>
                  <i className='side-menu__icon ti-bar-chart-alt'></i>
                  <span className='side-menu__label'>Charts</span>
                  <i className='fe fe-chevron-right side-menu__angle'></i>
                </a>
                <ul className='slide-menu child1'>
                  <li className='slide side-menu__label1'>
                    <a href='javascript:void(0)'>Charts</a>
                  </li>
                  <li className='slide has-sub'>
                    <a href='javascript:void(0);' className='side-menu__item'>
                      Apex Charts
                      <i className='fe fe-chevron-right side-menu__angle'></i>
                    </a>
                    <ul className='slide-menu child2'>
                      <li className='slide'>
                        <a
                          href='apex-line-charts.html'
                          className='side-menu__item'
                        >
                          Line Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-area-charts.html'
                          className='side-menu__item'
                        >
                          Area Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-column-charts.html'
                          className='side-menu__item'
                        >
                          Column Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-bar-charts.html'
                          className='side-menu__item'
                        >
                          Bar Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-mixed-charts.html'
                          className='side-menu__item'
                        >
                          Mixed Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-rangearea-charts.html'
                          className='side-menu__item'
                        >
                          Range Area Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-timeline-charts.html'
                          className='side-menu__item'
                        >
                          Timeline Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-candlestick-charts.html'
                          className='side-menu__item'
                        >
                          CandleStick Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-boxplot-charts.html'
                          className='side-menu__item'
                        >
                          Boxplot Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-bubble-charts.html'
                          className='side-menu__item'
                        >
                          Bubble Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-scatter-charts.html'
                          className='side-menu__item'
                        >
                          Scatter Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-heatmap-charts.html'
                          className='side-menu__item'
                        >
                          Heatmap Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-treemap-charts.html'
                          className='side-menu__item'
                        >
                          Treemap Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-pie-charts.html'
                          className='side-menu__item'
                        >
                          Pie Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-radialbar-charts.html'
                          className='side-menu__item'
                        >
                          Radialbar Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-radar-charts.html'
                          className='side-menu__item'
                        >
                          Radar Charts
                        </a>
                      </li>
                      <li className='slide'>
                        <a
                          href='apex-polararea-charts.html'
                          className='side-menu__item'
                        >
                          Polararea Charts
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='slide'>
                    <a href='chartjs-charts.html' className='side-menu__item'>
                      Chartjs Charts
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='echarts.html' className='side-menu__item'>
                      Echart Charts
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- End::slide --> */}

              {/* <!-- Start::slide --> */}
              <li className='slide has-sub'>
                <a href='javascript:void(0);' className='side-menu__item'>
                  <i className='side-menu__icon ti-layout-grid3'></i>
                  <span className='side-menu__label'>
                    Tables
                    <span className='badge bg-success-transparent ms-2'>3</span>
                  </span>
                  <i className='fe fe-chevron-right side-menu__angle'></i>
                </a>
                <ul className='slide-menu child1'>
                  <li className='slide side-menu__label1'>
                    <a href='javascript:void(0)'>Tables</a>
                  </li>
                  <li className='slide'>
                    <a href='tables.html' className='side-menu__item'>
                      Tables
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='grid-tables.html' className='side-menu__item'>
                      Grid JS Tables
                    </a>
                  </li>
                  <li className='slide'>
                    <a href='data-tables.html' className='side-menu__item'>
                      Data Tables
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- End::slide --> */}
            </ul>
            <div className='slide-right' id='slide-right'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#7b8191'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                {' '}
                <path d='M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z'></path>{' '}
              </svg>
            </div>
          </nav>
          {/* <!-- End::nav --> */}
        </div>
        {/* <!-- End::main-sidebar --> */}
      </aside>
      {/* <!-- End::app-sidebar --> */}
    </>
  );
};

export default Sidebar;
