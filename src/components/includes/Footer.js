import React from 'react';

const Footer = () => {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <footer className='footer mt-auto py-3 bg-white text-center'>
        <div className='container'>
          <span className='text-muted'>
            {' '}
            Copyright © <span id='year'></span>{' '}
            <a href='javascript:void(0);' className='text-primary fw-semibold'>
              Xino
            </a>
            . Designed with{' '}
            <span className='bi bi-heart-fill text-danger'></span> by{' '}
            <a href='javascript:void(0);'>
              <span className='fw-semibold text-primary text-decoration-underline'>
                Spruko
              </span>
            </a>{' '}
            All rights reserved
          </span>
        </div>
      </footer>
      {/* <!-- Footer End --> */}
    </>
  );
};

export default Footer;
