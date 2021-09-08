import React from 'react';

const Copyright = () => {
  return (
    <p>
      {/*// <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
      Copyright ©
      { new Date().getFullYear() }
      All rights reserved | This template is made with
      <i className="icon-heart text-danger" aria-hidden="true"/> by <a
      href="https://colorlib.com" target="_blank">Colorlib</a>
      {/*// <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
    </p>
  );
};

export default Copyright;