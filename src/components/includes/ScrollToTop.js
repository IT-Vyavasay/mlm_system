import React from 'react';

const ScrollToTop = () => {
  return (
    <>
      {/* <!-- Scroll To Top --> */}
      <div className='scrollToTop'>
        <span className='arrow'>
          <i className='ri-arrow-up-s-fill fs-20'></i>
        </span>
      </div>
      <div id='responsive-overlay'></div>

      {/* <!-- Scroll To Top --> */}
    </>
  );
};

export default ScrollToTop;
